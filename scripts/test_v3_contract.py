#!/usr/bin/env python3
"""Source-level release contract for the HR Coordinators V3 implementation."""
from __future__ import annotations

import json
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def text(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


class V3ContractTests(unittest.TestCase):
    def test_global_chrome_has_exact_navigation_and_parent_attribution(self) -> None:
        chrome = text("components/SiteChrome.tsx")
        content = text("lib/content.ts")
        self.assertIn("Powered by StealthAgents", chrome)
        self.assertGreaterEqual(chrome.count("Powered by StealthAgents"), 2)
        nav_block = re.search(r"export const nav = \[(.*?)\];", content, re.DOTALL)
        self.assertIsNotNone(nav_block)
        nav_items = re.findall(r"\{\s*href:\s*'([^']+)',\s*label:\s*'([^']+)'\s*\}", nav_block.group(1))
        self.assertEqual(nav_items, [("/", "Home"), ("/services", "Services"), ("/contact-us", "Contact Us")])
        self.assertEqual(chrome.count("nav.map"), 2)
        self.assertNotIn("TimedLeadModal", chrome)
        self.assertNotIn("TimedLeadModal", text("app/layout.tsx"))

    def test_approved_stealthagents_review_collection(self) -> None:
        data = json.loads(text("app/review-provenance.json"))
        self.assertIn("stealthagents.com", data["source"])
        records = data["records"]
        self.assertGreaterEqual(len(records), 10)
        identities = {(item["name"].strip().lower(), item["body"].strip().lower()) for item in records}
        self.assertEqual(len(records), len(identities))
        contact = text("app/contact-us/page.tsx")
        self.assertIn("StealthAgents reviews", contact)
        self.assertIn("review-provenance.json", contact)
        self.assertNotIn("5 out of 5 stars", contact)
        self.assertNotIn("Verified first-party", contact)
        self.assertIn("tabIndex={0}", contact)
        self.assertIn(":focus-within .review-track", text("app/contact-us/contact.css"))

    def test_contact_and_booking_sequence(self) -> None:
        contact = text("app/contact-us/page.tsx")
        self.assertNotIn("go.oncehub.com", contact)
        self.assertIn("stealth-agents-team", contact)
        self.assertIn("stealth-agents-logo", contact)
        self.assertIn("Official team, Bacolod", contact)
        self.assertLess(contact.index("<LeadForm"), contact.index("Official team, Bacolod"))
        thank_you = text("app/thank-you/page.tsx")
        self.assertIn('src="https://go.oncehub.com/StealthAgentsTeam"', thank_you)
        self.assertNotIn("StealthAgentsTeam?", thank_you)
        self.assertIn("You are booked", text("app/thanks-whats-next/page.tsx"))
        self.assertIn("router.push('/thank-you')", text("components/LeadForm.tsx"))

    def test_every_service_page_is_long_form_and_has_topic_image(self) -> None:
        service = text("app/services/[slug]/page.tsx")
        for marker in ("Who this support is for", "Inputs and access", "What the coordinator does", "Deliverables", "Quality controls", "What stays with HR leadership", "Common starting scenarios", "Frequently asked questions", "Related services"):
            self.assertIn(marker, service)
        self.assertRegex(service, r"service\.(heroImage|image)")
        self.assertIn("alternates:{canonical:", service.replace(" ", ""))

    def test_article_templates_have_complete_toc_and_populated_sidebar(self) -> None:
        blog = text("app/blog/[slug]/page.tsx")
        research = text("app/research/[slug]/page.tsx")
        for source in (blog, research):
            self.assertIn("On this page", source)
            self.assertIn("article-sidebar", source)
            self.assertIn("Related", source)
            self.assertIn("<ActiveSection items={toc}", source)
            self.assertIn("id={slugify(section.heading)}", source)
        self.assertIn("post.sections.map", blog)
        self.assertIn("bodySections.map", research)

    def test_legacy_research_is_honest_and_substantive_review_planning(self) -> None:
        content = text("lib/content.ts")
        legacy = content.split("const legacyResearchPosts", 1)[1].split("export const blogPosts", 1)[0]
        titles = re.findall(r'"title":\s*"([^"]+)"', legacy)
        self.assertEqual(len(titles), 20)
        for title in titles:
            self.assertTrue(title.endswith("review plan"), title)
            self.assertNotRegex(title.lower(), r"\b(study|report|audit)\b")
        research = text("app/research/[slug]/page.tsx")
        self.assertIn("reviewPlanSections(post)", research)
        self.assertIn("This page is a planning guide, not a completed audit or study.", research)
        self.assertIn("Reference sources", research)

    def test_public_claims_match_available_provenance(self) -> None:
        public_source = "\n".join((text("app/contact-us/page.tsx"), text("lib/site.ts")))
        self.assertNotIn("Top 1 percent", public_source)
        self.assertNotIn("5 out of 5 stars", public_source)
        privacy = text("app/privacy/page.tsx")
        metadata = privacy.split("export default", 1)[0]
        self.assertNotIn("protects", metadata)
        self.assertNotIn("retains", metadata)

    def test_skip_link_privacy_and_topic_routing_are_complete(self) -> None:
        layout = text("app/layout.tsx")
        self.assertIn('href="#page-content"', layout)
        self.assertIn('id="page-content"', layout)

        privacy = text("app/privacy/page.tsx")
        for disclosure in (
            "phone number", "company website", "company size", "expected hiring volume",
            "IP address", "browser user agent", "accepted language", "Mattermost",
            "analytics service", "OnceHub", "scheduling details",
        ):
            self.assertIn(disclosure, privacy)

        research = text("app/research/[slug]/page.tsx")
        self.assertIn("function topicImage", research)
        self.assertIn("post.thumbnail || topicImage(post)", research)
        self.assertNotIn("researchPosts.findIndex", research)

        october_research = text("lib/october12-research.ts")
        self.assertIn("relevantSourceLabels", october_research)
        self.assertIn("post.sources.filter", october_research)
        self.assertNotIn("We reviewed ten authoritative public sources", october_research)

        blog_sources = text("lib/content.ts") + text("lib/october12-blog.ts")
        expected_links = {
            "employee-onboarding-map": "/services/employee-onboarding-support",
            "form-i9-administrative-handoff": "/services/employee-records",
            "interview-schedule-change-log": "/services/interview-scheduling",
            "policy-acknowledgment-version-control": "/services/policy-acknowledgments",
            "training-completion-evidence-register": "/services/training-administration",
            "personnel-file-correction-history": "/services/employee-records",
            "candidate-communication-template-governance": "/services/interview-scheduling",
            "people-operations-metric-dictionary": "/services/people-operations-reporting",
        }
        for slug, service in expected_links.items():
            match = re.search(
                rf'["\']slug["\']:\s*["\']{re.escape(slug)}["\'](.*?)["\']internalService["\']:\s*["\']([^"\']+)',
                blog_sources,
                re.DOTALL,
            )
            self.assertIsNotNone(match, slug)
            self.assertEqual(match.group(2), service, slug)

        october_blog = text("lib/october12-blog.ts")
        source_urls = re.findall(r'"source":\s*\{.*?"url":\s*"([^"]+)"', october_blog, re.DOTALL)
        self.assertEqual(len(source_urls), 12)
        self.assertGreaterEqual(len(set(source_urls)), 8)
        self.assertIn("https://www.uscis.gov/i-9-central", source_urls)
        self.assertIn("https://www.dol.gov/agencies/whd/fmla", source_urls)
        self.assertTrue(any("eeoc.gov/laws/guidance" in url for url in source_urls))
        self.assertTrue(any("nist.gov" in url for url in source_urls))

    def test_http_redirects_are_production_host_scoped(self) -> None:
        proxy = text("proxy.ts")
        self.assertIn("cloudflareProtocol ?? forwardedProtocol", proxy)
        self.assertIn("requestHost === 'hrcoordinators.com'", proxy)
        self.assertIn("requestHost === 'www.hrcoordinators.com'", proxy)
        self.assertIn("needsCanonicalRedirect", proxy)
        self.assertIn("request.nextUrl.pathname", proxy)
        self.assertIn("request.nextUrl.search", proxy)
        self.assertIn("308", proxy)
        self.assertNotIn("key: 'x-forwarded-proto'", text("next.config.mjs"))

    def test_no_decorative_zero_padded_labels_or_overlay_modal(self) -> None:
        commercial = "\n".join(
            text(path)
            for path in (
                "components/Marketing.tsx",
                "app/contact-us/page.tsx",
                "app/services/page.tsx",
                "app/services/[slug]/page.tsx",
            )
        )
        self.assertNotRegex(commercial, r">\s*0[1-9]\s*<")
        self.assertNotIn("modal-backdrop", text("app/globals.css"))

    def test_uniform_subsidiary_logo_and_official_parent_assets_exist(self) -> None:
        for path in (
            "public/logo.svg",
            "public/favicon.svg",
            "public/brand/stealth-agents-logo-black.png",
            "public/brand/stealth-agents-team-bacolod.webp",
        ):
            p = ROOT / path
            self.assertTrue(p.is_file(), path)
            self.assertGreater(p.stat().st_size, 100, path)
        layout = text("app/layout.tsx")
        self.assertIn("/favicon.svg", layout)


if __name__ == "__main__":
    unittest.main(verbosity=2)
