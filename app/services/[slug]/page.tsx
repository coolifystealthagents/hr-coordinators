import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${service.slug}` }, openGraph: { images: [service.heroImage] } } : {};
}

const scenarios: Record<string, string[]> = {
  'employee-onboarding-support': ['New hires arrive across several teams each month', 'Managers need one visible checklist and exception path', 'Records are complete only after several owners respond'],
  'interview-scheduling': ['Panels span time zones and changing calendars', 'Candidates need consistent approved communication', 'Recruiters need conflicts surfaced before the interview'],
  'employee-records': ['Approved updates arrive through several channels', 'Personnel file indexes are incomplete or inconsistent', 'Sensitive changes need a clear authorization boundary'],
  'training-administration': ['Enrollments and completion evidence live in separate systems', 'Managers need approved reminders before deadlines', 'Overdue or disputed records need escalation'],
  'policy-acknowledgments': ['A new approved policy version must reach a defined audience', 'Receipt status needs a traceable source record', 'Missing or unclear responses need follow-up'],
  'people-operations-reporting': ['Leaders spend time reconciling routine status updates', 'Metric definitions vary between source owners', 'Exceptions need context before leadership review']
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = site.services.filter((item) => item.slug !== service.slug).slice(0, 3);
  return <main id="main-content"><header className="page-hero split-page-hero service-hero"><div><p className="eyebrow">Focused HR coordination</p><h1>{service.name}</h1><p>{service.short} The role follows your approved process and gives accountable HR leaders a clear point to review.</p><Link className="button primary" href="/contact-us">Discuss this service</Link></div><Image src={service.heroImage} alt={service.heroAlt} width={1200} height={630} priority/></header>
    <div className="content-wrap service-longform">
      <section><h2>Who this support is for</h2><p>This service fits HR leaders and people operations teams with recurring work that has a known owner but needs steadier preparation, tracking, and follow-through. It works best when your organization can name the governing process and assign a reviewer.</p></section>
      <section><h2>The problem it addresses</h2><p>Routine work becomes difficult when requests are spread across inboxes, calendars, files, and private notes. The coordinator creates a visible queue so missing information, ownership changes, and exceptions reach the right person instead of disappearing between handoffs.</p></section>
      <section><h2>Inputs and access</h2><p>Before launch, your team identifies the approved request channel, system of record, required fields, communication templates, access owner, and retention rules. Access should be limited to what the workflow requires.</p><ul><li>Approved source records and request channels</li><li>Current checklist, templates, and completion definition</li><li>Named review owner and response expectations</li><li>Written rules for privacy, access, and escalation</li></ul></section>
      <section><h2>What the coordinator does</h2><p>The coordinator works the routine path your team has approved. For this service, that can include:</p><ul>{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul><p>When a request falls outside that path, documenting and escalating the exception is part of the work.</p></section>
      <section><h2>Deliverables</h2><p>Outputs are designed for review rather than activity reporting. Depending on your workflow, the coordinator can maintain an updated queue, a completion record, a concise exception log, source links, and a next-owner summary.</p></section>
      <section><h2>Quality controls</h2><p>Your HR owner defines a short acceptance checklist. Early work is reviewed more closely, then sampled at an agreed rhythm. Reviews check source accuracy, required fields, status evidence, appropriate communication, and timely escalation. Repeated exceptions become updates to the process.</p></section>
      <section className="boundary-panel"><h2>What stays with HR leadership</h2><p>Hiring decisions, compensation, classification, accommodations, investigations, employee relations, discipline, termination, legal interpretation, policy approval, sensitive exceptions, and final access decisions remain with authorized HR, legal, security, and business leaders.</p></section>
      <section><h2>Common starting scenarios</h2><ul>{scenarios[service.slug].map((item) => <li key={item}>{item}</li>)}</ul><h3>A controlled first workflow</h3><p>Select one request type, test the checklist on a limited queue, and review the exceptions with the accountable owner. Expand only when the inputs, output, and escalation route are working as intended.</p></section>
      <section className="faq-block"><h2>Frequently asked questions</h2><details><summary>How quickly can the scope expand?</summary><p>Expand after the first queue has stable inputs, a consistent output, an available reviewer, and a documented response to common exceptions.</p></details><details><summary>Does the coordinator set HR policy?</summary><p>No. The coordinator works from approved policy and routes uncertainty to authorized leaders. Policy creation and interpretation stay with your organization.</p></details><details><summary>Who owns employee data controls?</summary><p>Your organization owns lawful use, access, privacy, security, retention, notices, and approval. The coordinator follows the controls you provide.</p></details></section>
      <section><h2>Related services</h2><div className="related-links">{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><strong>{item.name}</strong><span>{item.short}</span></Link>)}</div></section>
    </div>
    <section className="closing"><h2>Turn this queue into a reviewable role.</h2><p>Bring the current workflow, owner, and examples. Do not send employee or candidate data.</p><Link className="button primary" href="/contact-us">Plan a free consultation</Link></section>
  </main>;
}
