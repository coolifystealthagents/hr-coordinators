import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import reviewData from '../review-provenance.json';
import './contact.css';

export const metadata: Metadata = { title: 'Contact Us | HR Coordinator Staffing Consultation', description: 'Talk with HR Coordinators about focused support for recurring people operations workflows.', alternates: { canonical: '/contact-us' } };

export default function ContactPage() {
  return <main id="main-content" className="contact-page">
    <PageHero eyebrow="Contact Us" title="Bring order to the HR queue that keeps pulling you back in." description="Tell us which recurring workflow needs clearer coordination. We will discuss the inputs, access, review owner, and decision boundaries before shaping a role." image="/thumbnails/october-12/candidate-communication-template-governance.webp" imageAlt="Illustrated candidate communication workflow with approved templates and review points"/>
    <section className="contact-fold"><div className="contact-intro"><div className="scope-labels"><span>Focused role design</span><span>Human review</span><span>Clear escalation</span></div><div className="review-heading"><strong>StealthAgents reviews</strong><span>First-party StealthAgents client comments</span></div><div className="review-window" aria-label="StealthAgents client comments" tabIndex={0}><div className="review-track">{reviewData.records.map((review) => <figure className="review-card" key={`${review.name}-${review.headline}`}><blockquote><strong>{review.headline}</strong><p>“{review.body}”</p></blockquote><figcaption><b>{review.name}</b><span>{review.detail}</span></figcaption></figure>)}</div></div></div>
      <div className="contact-form-card"><h2>Start a useful conversation</h2><p>Share operating context only. Do not include employee identities, credentials, medical details, complaints, or other sensitive information.</p><LeadForm source="contact-page-consultation"/></div>
    </section>

    <section className="team-section"><div className="team-photo"><Image src="/brand/stealth-agents-team-bacolod.webp" alt="Official StealthAgents team in Bacolod" fill sizes="(max-width: 900px) 100vw, 55vw"/></div><div className="team-copy"><p className="eyebrow">The managed-service team behind the work</p><h2>Powered by StealthAgents</h2><p>StealthAgents supports matching and managed operations for the service. Your organization defines the workflow, access, standards, and accountable HR owners. Coordinators work within those approved boundaries and surface exceptions for human review.</p><div className="official-plate"><Image src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width={170} height={42}/><strong>Official team, Bacolod</strong></div></div></section>

    <section className="contact-section contact-expect"><div><p className="eyebrow">What we will discuss</p><h2>Turn a recurring queue into a focused brief.</h2></div><div className="handoff-list"><article><h3>The work as it happens now</h3><p>Map the request channel, source records, current owners, timing, and the places where work stalls.</p></article><article><h3>The safe coordination boundary</h3><p>Separate routine preparation and communication from policy, employment judgment, approvals, and sensitive exceptions.</p></article><article><h3>The review rhythm</h3><p>Define what complete looks like, who inspects the output, and how recurring exceptions improve the process.</p></article></div></section>

    <section className="contact-section contact-boundaries"><h2>Keep sensitive decisions with authorized leaders.</h2><p>Remote coordinators can maintain approved checklists, schedule interviews and training, update authorized record fields, send routine reminders, compile reports, and flag exceptions. They do not choose candidates, set compensation, classify workers, investigate complaints, decide accommodations, evaluate performance, discipline or terminate employees, interpret employment law, or override privacy controls.</p><p>Your HR, legal, payroll, benefits, privacy, security, management, and executive personnel retain responsibility for final decisions and regulated obligations.</p></section>

    <section className="contact-section contact-links"><div><p className="eyebrow">Prepare for the conversation</p><h2>A little context makes the call useful.</h2><p>Bring queue volume, current ownership, approved systems, timing expectations, access constraints, and examples with personal information removed.</p></div><div><h3>Explore before you contact us</h3><Link href="/services/employee-onboarding-support">Employee onboarding support</Link><Link href="/services/interview-scheduling">Interview scheduling</Link><Link href="/services/employee-records">Employee records support</Link><Link href="/services">All HR coordination services</Link></div></section>
  </main>;
}
