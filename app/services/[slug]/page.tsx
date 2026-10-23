import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { serviceDetails } from '@/lib/service-details';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${service.slug}` }, openGraph: { images: [service.heroImage] } } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const detail = serviceDetails[service.slug];
  const related = site.services.filter((item) => item.slug !== service.slug).slice(0, 3);
  return <main id="main-content"><header className="page-hero split-page-hero service-hero"><div><p className="eyebrow">Focused HR coordination</p><h1>{service.name}</h1><p>{service.short} The role follows your approved process and gives accountable HR leaders a clear point to review.</p><Link className="button primary" href="/contact-us">Discuss this service</Link></div><Image src={service.heroImage} alt={service.heroAlt} width={1200} height={630} priority/></header>
    <div className="content-wrap service-longform">
      <section><h2>Who this support is for</h2><p>This service fits teams that can name the governing process and assign an accountable reviewer.</p><ul>{detail.audience.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>The problem it addresses</h2><p>Routine work becomes difficult when requests are spread across inboxes, calendars, files, and private notes. The coordinator creates a visible queue so missing information, ownership changes, and exceptions reach the right person instead of disappearing between handoffs.</p></section>
      <section><h2>Inputs and access</h2><p>Before launch, your team identifies the approved request channel, system of record, required fields, communication templates, access owner, and retention rules. Access should be limited to what the workflow requires.</p><ul>{detail.inputs.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>What the coordinator does</h2><p>The coordinator works the routine path your team has approved. For this service, that can include:</p><ul>{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul><p>When a request falls outside that path, documenting and escalating the exception is part of the work.</p></section>
      <section><h2>Deliverables</h2><p>Outputs are designed for review rather than activity reporting.</p><ul>{detail.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>Quality controls</h2><p>Early work is reviewed closely, then sampled at an agreed rhythm. Repeated exceptions become updates to the process.</p><ul>{detail.controls.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="boundary-panel"><h2>What stays with HR leadership</h2><h3>Decision boundaries</h3><p>Accountable leaders retain strategy, approvals, system ownership, and sensitive decisions. Escalation is the correct outcome when work falls outside the documented path.</p><ul>{detail.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>Common starting scenarios</h2><div>{detail.scenarios.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div><h3>A controlled first workflow</h3><p>Select one request type, test the checklist on a limited queue, and review the exceptions with the accountable owner. Expand only when the inputs, output, and escalation route are working as intended.</p></section>
      <section className="faq-block"><h2>Frequently asked questions</h2>{detail.faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
      <section><h2>Related services</h2><div className="related-links">{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><strong>{item.name}</strong><span>{item.short}</span></Link>)}</div></section>
    </div>
    <section className="closing"><h2>Turn this queue into a reviewable role.</h2><p>Bring the current workflow, owner, and examples. Do not send employee or candidate data.</p><Link className="button primary" href="/contact-us">Plan a free consultation</Link></section>
  </main>;
}
