import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, CheckIcon } from './Icons';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon/></Link>;

function ServiceList() {
  return <div className="service-list">{site.services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug} className="service-row"><Image src={service.heroImage} alt="" width={180} height={96}/><div><h3>{service.name}</h3><p>{service.short}</p></div><span aria-hidden="true">↗</span></Link>)}</div>;
}

export function HomePage() {
  return <main id="main-content" className="home design-people">
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1>{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Plan a free consultation</CTA><Link className="quiet-link" href="/services">Explore services</Link></div><div className="principles">{site.principles.map((item) => <div key={item}><CheckIcon/><span>{item}</span></div>)}</div></div>
      <div className="hero-visual"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw"/><div className="paper-note"><strong>One visible rhythm</strong><span>Request → owner → review → next handoff</span></div></div>
    </section>

    <section className="section intro"><p className="eyebrow">Coordination with clear custody</p><div><h2>Give routine people work a dependable path.</h2><p>HR work crosses calendars, documents, managers, candidates, and employees. A coordinator keeps approved tasks moving and makes incomplete work visible. Your HR leaders retain policy, judgment, and final decisions.</p></div></section>

    <section className="section services"><div className="section-heading"><p className="eyebrow">Focused services</p><h2>Start with the queue that keeps slipping between owners.</h2><p>Each service is shaped around explicit inputs, a reviewable output, and an escalation route.</p></div><ServiceList/></section>

    <section className="section workflow"><div className="workflow-copy"><p className="eyebrow">A connected handoff thread</p><h2>Build the role around how work really travels.</h2><p>We begin with one recurring workflow. Together, we identify where the request starts, what source records are allowed, who reviews the output, and which situations must return to HR leadership.</p><CTA id="cta-home-workflow">Map your first workflow</CTA></div><ol className="thread"><li><strong>Collect approved inputs</strong><span>Use named systems and required fields.</span></li><li><strong>Coordinate the routine path</strong><span>Follow the checklist and record status.</span></li><li><strong>Surface exceptions</strong><span>Pause when information or authority is missing.</span></li><li><strong>Hand off for review</strong><span>Give the accountable owner useful context.</span></li></ol></section>

    <section className="section boundaries"><div><p className="eyebrow">A practical boundary</p><h2>Support does not replace HR authority.</h2></div><div className="boundary-columns"><div><h3>Coordination can include</h3><ul><li>Maintaining approved task and record queues</li><li>Scheduling and sending approved reminders</li><li>Preparing review-ready status summaries</li><li>Documenting missing inputs and exceptions</li></ul></div><div><h3>Leadership keeps</h3><ul><li>Employment and policy decisions</li><li>Legal, classification, and compensation judgment</li><li>Sensitive employee conversations</li><li>Approval for exceptions and access</li></ul></div></div></section>

    <section className="section journal"><div className="section-heading"><p className="eyebrow">People operations field notes</p><h2>Useful guidance for designing the handoff.</h2></div><div className="article-grid">{blogPosts.slice(0,3).map((post) => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}>{post.thumbnail && <img src={post.thumbnail} alt=""/>}<span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide</span></Link>)}</div></section>

    <section className="closing"><p className="eyebrow">A calmer operating rhythm</p><h2>Bring us one recurring HR workflow.</h2><p>We will help you define the coordination, review, and escalation boundaries before the role begins.</p><CTA id="cta-home-closing">Start the conversation</CTA></section>
  </main>;
}
