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
    def test_shared_page_hero_is_reused_with_first_party_media_and_alt_text(self) -> None:
        component_path = ROOT / "components/PageHero.tsx"
        self.assertTrue(component_path.is_file(), "components/PageHero.tsx must provide the shared page hero")
        hero = text("components/PageHero.tsx")
        self.assertRegex(hero, r"\{\s*image:\s*string;\s*imageAlt:\s*string\s*\}")
        self.assertRegex(hero, r"\{\s*image\?:\s*never;\s*imageAlt\?:\s*never\s*\}")
        self.assertRegex(hero, r"image\s*===\s*undefined")
        self.assertRegex(hero, r"\{\s*src:\s*site\.heroImage,\s*alt:\s*site\.heroAlt\s*\}")
        self.assertRegex(hero, r"\{\s*src:\s*image,\s*alt:\s*imageAlt\s*\}")
        self.assertRegex(hero, r"<Image\b[^>]*\bsrc=\{media\.src\}[^>]*\balt=\{media\.alt\}")

        for path in ("app/services/page.tsx", "app/about/page.tsx", "app/contact-us/page.tsx"):
            source = text(path)
            self.assertIn("@/components/PageHero", source, path)
            invocation = re.search(r"<PageHero\b(.*?)(?:/>|>)", source, re.DOTALL)
            self.assertIsNotNone(invocation, path)
            props = invocation.group(1)
            image = re.search(r'\bimage=["\'](/[^"\']+)["\']', props)
            image_alt = re.search(r'\bimageAlt=["\']([^"\']{12,})["\']', props)
            self.assertIsNotNone(image, f"{path} must pass a first-party PageHero image")
            self.assertIsNotNone(image_alt, f"{path} must pass meaningful PageHero alt text")

    def test_service_details_cover_every_authoritative_service_with_real_data(self) -> None:
        details_path = ROOT / "lib/service-details.ts"
        self.assertTrue(details_path.is_file(), "lib/service-details.ts must hold service-specific detail data")
        details = text("lib/service-details.ts")
        types = text("lib/types.ts")
        self.assertIn("export type ServiceSlug =", types)
        self.assertIn("Record<ServiceSlug, ServiceDetail>", details)
        expected_slugs = {
            "employee-onboarding-support",
            "interview-scheduling",
            "employee-records",
            "training-administration",
            "policy-acknowledgments",
            "people-operations-reporting",
        }
        declared_slugs = re.findall(r"^\s*['\"]([a-z0-9-]+)['\"]\s*:\s*\{", details, re.MULTILINE)
        self.assertEqual(set(declared_slugs), expected_slugs)
        self.assertEqual(len(declared_slugs), len(expected_slugs), "service detail records must not be duplicated")

        shared_controls = re.search(r"\bsharedControls\s*=\s*\[(.*?)\]", details, re.DOTALL)
        if shared_controls:
            self.assertRegex(shared_controls.group(1), r"['\"][^'\"]+['\"]")

        for slug in expected_slugs:
            start = details.find(f"'{slug}':")
            if start < 0:
                start = details.find(f'"{slug}":')
            self.assertGreaterEqual(start, 0, slug)
            next_records = [
                position for other in expected_slugs
                if other != slug
                for position in (details.find(f"'{other}':", start + 1), details.find(f'"{other}":', start + 1))
                if position >= 0
            ]
            record = details[start:min(next_records) if next_records else len(details)]
            for field in ("audience", "inputs", "deliverables", "boundaries"):
                array = re.search(rf"\b{field}\s*:\s*\[(.*?)\]", record, re.DOTALL)
                self.assertIsNotNone(array, f"{slug}.{field} must be an array")
                self.assertRegex(array.group(1), r"['\"][^'\"]+['\"]", f"{slug}.{field} must not be empty")
            controls = re.search(r"\bcontrols\s*:\s*(\[[^\]]*\]|[A-Za-z_$][\w$]*)", record, re.DOTALL)
            self.assertIsNotNone(controls, f"{slug}.controls must contain quality controls")
            control_value = controls.group(1)
            if control_value.startswith("["):
                control_data = control_value
            else:
                declaration = re.search(rf"\b{re.escape(control_value)}\s*=\s*\[(.*?)\]", details, re.DOTALL)
                self.assertIsNotNone(declaration, f"{slug}.controls must reference an existing array")
                control_data = declaration.group(1)
            self.assertRegex(control_data, r"['\"][^'\"]+['\"]", f"{slug}.controls must not be empty")

            scenarios = re.search(r"\bscenarios\s*:\s*\[(.*?)\]", record, re.DOTALL)
            faq = re.search(r"\bfaq\s*:\s*\[(.*?)\]", record, re.DOTALL)
            self.assertIsNotNone(scenarios, f"{slug}.scenarios must be an array")
            self.assertIsNotNone(faq, f"{slug}.faq must be an array")
            scenario_data = scenarios.group(1)
            faq_data = faq.group(1)
            self.assertGreaterEqual(len(re.findall(r"\btitle\s*:\s*['\"][^'\"]+['\"]", scenario_data)), 3, slug)
            self.assertGreaterEqual(len(re.findall(r"\bcopy\s*:\s*['\"][^'\"]+['\"]", scenario_data)), 3, slug)
            self.assertGreaterEqual(len(re.findall(r"\bq\s*:\s*['\"][^'\"]+['\"]", faq_data)), 3, slug)
            self.assertGreaterEqual(len(re.findall(r"\ba\s*:\s*['\"][^'\"]+['\"]", faq_data)), 3, slug)

    def test_page_hero_pairs_custom_media_with_its_alt_text(self) -> None:
        hero = text("components/PageHero.tsx")
        self.assertRegex(hero, r"image:\s*string;\s*imageAlt:\s*string")
        self.assertRegex(hero, r"image\?:\s*never;\s*imageAlt\?:\s*never")

    def test_service_page_consumes_detail_data_and_keeps_authoritative_media_metadata(self) -> None:
        service = text("app/services/[slug]/page.tsx")
        self.assertIn("@/lib/service-details", service)
        self.assertRegex(service, r"if\s*\(\s*!service\s*\)\s*notFound\(\)")
        self.assertRegex(service, r"serviceDetails\s*\[\s*service\.slug\s*\]")
        for field in ("audience", "inputs", "deliverables", "controls", "boundaries", "scenarios", "faq"):
            self.assertRegex(service, rf"detail\.{field}\.map\(", field)
        self.assertIn("service.heroImage", service)
        self.assertIn("service.heroAlt", service)
        metadata = service.split("export default", 1)[0]
        self.assertIn("title: service.name", metadata)
        self.assertIn("description: service.short", metadata)
        self.assertIn("alternates:", metadata)
        self.assertIn("canonical:", metadata)
        self.assertRegex(metadata, r"openGraph\s*:\s*\{[^}]*service\.heroImage")

    def test_active_section_remains_the_accessible_article_navigator(self) -> None:
        active_section = text("components/ActiveSection.tsx")
        self.assertIn('aria-label="On this page"', active_section)
        self.assertRegex(
            active_section,
            r"aria-current=\{active\s*===\s*item\.id\s*\?\s*['\"](?:location|page|step|true)['\"]\s*:\s*undefined\}",
        )
        for path in ("app/blog/[slug]/page.tsx", "app/research/[slug]/page.tsx"):
            source = text(path)
            self.assertIn("@/components/ActiveSection", source, path)
            self.assertIn("<ActiveSection items={toc}", source, path)
            self.assertNotIn("ArticleNavigator", source, path)

    def test_warm_connected_visual_system_is_responsive_and_motion_safe(self) -> None:
        css = text("app/globals.css")
        root = re.search(r":root\s*\{([^}]+)\}", css, re.DOTALL)
        self.assertIsNotNone(root)
        self.assertRegex(root.group(1), r"--(?:paper|canvas)\s*:")
        self.assertRegex(root.group(1), r"--(?:wine|burgundy|primary)\s*:")
        self.assertRegex(css, r"(?:page-hero|hero)[^{]*\{[^}]*\}")
        self.assertRegex(css, r"(?:clip-path|border-radius)\s*:")
        self.assertRegex(css, r"\.thread\s+li\s*\{[^}]*border-left", "workflow stages need a connected marker")
        self.assertRegex(css, r"\.thread\s+li:before\s*\{[^}]*(?:border-radius|clip-path)", "workflow stages need visible nodes")
        self.assertRegex(
            css,
            r"\.service-hero\s*>\s*img\s*\{[^}]*object-fit\s*:\s*contain",
            "text-bearing service artwork must remain fully visible at tablet widths",
        )
        self.assertRegex(css, r"@media\s*\(max-width\s*:")
        self.assertRegex(css, r"@media\s*\(prefers-reduced-motion\s*:\s*reduce\)")

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
            "analytics service", "Form information is sent", "lead activity",
            "OnceHub", "when that page loads", "scheduling details",
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
