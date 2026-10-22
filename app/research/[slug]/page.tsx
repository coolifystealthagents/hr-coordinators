import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ActiveSection } from '@/components/ActiveSection';
import { researchPosts, researchBySlug } from '@/lib/content';
import { site } from '@/lib/site';
import type { ResearchPost } from '@/lib/types';

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const fallbackImages = site.services.map((service) => service.heroImage);
type Section = { heading: string; paragraphs: string[] };

const topicSections: Record<string, Section[]> = {
  onboarding: [
    { heading: 'Map the onboarding inputs', paragraphs: ['List the approved offer details, start date, manager, location, equipment needs, policy set, and systems that feed each onboarding step. Record which source is authoritative when two systems disagree.', 'Remove personal information from working examples. Give the coordinator only the minimum access needed to prepare the checklist, route routine reminders, and flag missing inputs.'] },
    { heading: 'Keep employment decisions with HR', paragraphs: ['The coordinator can maintain an approved checklist and prepare materials, but HR retains decisions about eligibility, compensation, accommodations, worker classification, policy exceptions, and employment status.', 'Write those boundaries into the workflow before assigning volume. A clear pause point is safer than asking a coordinator to infer policy from prior cases.'] },
    { heading: 'Define onboarding completion', paragraphs: ['Choose evidence that can be checked without exposing unnecessary employee data, such as an approved acknowledgment status, confirmed equipment handoff, or manager-reviewed orientation schedule.', 'The completion rule should name the reviewer and the next action for incomplete or conflicting records.'] },
  ],
  interviews: [
    { heading: 'Map the scheduling inputs', paragraphs: ['Document approved interviewer pools, candidate availability, time zones, meeting format, accessibility routing, and the recruiting system that owns status. Define what happens when any input is missing.', 'Use neutral scheduling templates and minimum-necessary candidate details. Selection, evaluation, and accommodation decisions remain with authorized recruiting and HR personnel.'] },
    { heading: 'Separate logistics from selection', paragraphs: ['A coordinator can propose times, issue approved invitations, maintain status fields, and surface conflicts. They should not rank candidates, infer fit, change interview stages, or communicate a hiring decision.', 'Make the escalation path visible for unavailable panels, delayed feedback, sensitive candidate messages, and requests outside the approved template.'] },
    { heading: 'Define a complete handoff', paragraphs: ['A useful scheduling record shows confirmed participants, time zone, meeting link or location, approved preparation material, and the owner of the next recruiting decision.', 'Review recurring reschedules and missing inputs to improve the process without treating coordination activity as evidence of hiring quality.'] },
  ],
  records: [
    { heading: 'Inventory approved record sources', paragraphs: ['List the HR systems, authorized fields, naming rules, request channels, and retention instructions that govern the workflow. Identify the source of truth for each status before access is granted.', 'Use role-based accounts and minimum-necessary access. A coordinator should never copy sensitive records into private notes or an unapproved tool.'] },
    { heading: 'Define update boundaries', paragraphs: ['Routine updates can follow a written rule and an approved request. Corrections involving identity, compensation, benefits, complaints, medical information, legal holds, or policy interpretation require the designated owner.', 'Require source evidence for each update and an escalation path for conflicts, incomplete approvals, and requests from an unverified sender.'] },
    { heading: 'Review completeness without overexposure', paragraphs: ['Use a narrow checklist that confirms required fields, source reference, reviewer, and status. Avoid exporting broad employee datasets when a queue-level status is sufficient.', 'Sample completed work at a predictable interval and update the checklist when repeated exceptions reveal an unclear rule.'] },
  ],
  training: [
    { heading: 'Map the training catalog and audience', paragraphs: ['Identify approved courses, assignment rules, due dates, delivery systems, manager contacts, and the source that determines who receives each training item.', 'Keep decisions about mandatory training, exceptions, discipline, and role qualification with authorized HR, legal, compliance, or management owners.'] },
    { heading: 'Define coordination tasks', paragraphs: ['A coordinator can issue approved invitations, maintain rosters, send routine reminders, compile completion status, and flag access problems. The role should not alter content or certify competence.', 'Document the route for accessibility requests, disputed assignments, unavailable courses, and records that do not reconcile.'] },
    { heading: 'Choose reviewable evidence', paragraphs: ['A complete record can show the approved assignment source, invitation date, system status, and responsible reviewer without exposing more employee information than the task requires.', 'Use status summaries to help the accountable owner act. Do not present attendance or system completion as proof that a person understood or mastered the material.'] },
  ],
  policies: [
    { heading: 'Map the approved policy set', paragraphs: ['List the current policy version, eligible audience, approved communication template, acknowledgment method, due date, and the system that owns completion status.', 'Only authorized HR or legal personnel should interpret policy, decide exceptions, or determine consequences. Coordination begins after those decisions are documented.'] },
    { heading: 'Keep acknowledgment neutral', paragraphs: ['A coordinator can distribute approved material, send routine reminders, maintain status, and route questions. They should not explain legal meaning or pressure an employee to accept an unclear requirement.', 'Create a clear escalation path for access barriers, disputed versions, language needs, accommodation requests, and questions that require policy interpretation.'] },
    { heading: 'Define reliable status evidence', paragraphs: ['A useful queue distinguishes sent, received, acknowledged, exception pending, and owner review required. Each status should have an approved source and a named next owner.', 'Review unresolved items without placing sensitive employee conversations into the coordination log.'] },
  ],
  reporting: [
    { heading: 'Define the reporting question', paragraphs: ['Name the decision the report supports, its approved source systems, definitions, time period, owner, and refresh schedule. A report should not combine fields whose definitions or populations differ.', 'Use minimum-necessary data and approved access paths. Remove direct identifiers when leaders only need queue, timing, or exception patterns.'] },
    { heading: 'Separate preparation from interpretation', paragraphs: ['A coordinator can compile approved fields, apply documented definitions, check completeness, and flag source conflicts. HR leaders retain interpretation, policy conclusions, and employment decisions.', 'Record unresolved data gaps beside the output rather than silently filling them with assumptions.'] },
    { heading: 'Set an acceptance check', paragraphs: ['Before release, confirm the period, population, field definitions, source timestamp, reviewer, and known limitations. Reconcile totals only against an approved reference.', 'Use recurring discrepancies to improve source practices. Do not frame an operational summary as a causal finding or employee-performance judgment.'] },
  ],
};

const lensSections: Record<string, Section[]> = {
  boundary: [
    { heading: 'Run a boundary review', paragraphs: ['Mark each step as prepare, review, decide, approve, or escalate. Assign coordination only where the source, output, and acceptance rule are written.', 'Test the boundary with an incomplete record and a sensitive exception. Both should stop with the named accountable owner.'] },
    { heading: 'Record the revised workflow', paragraphs: ['Publish a short role brief with entry criteria, permitted actions, prohibited decisions, reviewer, escalation channel, and completion evidence.', 'Review the brief after the first controlled batch before expanding access or volume.'] },
  ],
  source: [
    { heading: 'Run a source review', paragraphs: ['For every required field, name the approved source, owner, freshness expectation, and conflict rule. Remove fields that do not affect the output or its review.', 'Test whether a coordinator can distinguish an authoritative record from an email, private note, or stale export.'] },
    { heading: 'Document source exceptions', paragraphs: ['Define what happens when a source is missing, inaccessible, contradictory, or outside its expected update window.', 'The coordinator should preserve the discrepancy and route it, not choose whichever value makes the queue easier to close.'] },
  ],
  exceptions: [
    { heading: 'Build an exception sample', paragraphs: ['Collect de-identified examples of incomplete inputs, conflicting records, urgent requests, access failures, and requests outside the written rule.', 'Group them by the decision owner they require instead of treating every unusual case as a new coordinator task.'] },
    { heading: 'Turn patterns into escalation rules', paragraphs: ['For each recurring exception, write the stop condition, evidence to preserve, destination, and expected acknowledgment.', 'Retire exceptions from the queue only when the accountable owner has approved a repeatable path.'] },
  ],
  handoff: [
    { heading: 'Inspect every handoff', paragraphs: ['At each transfer, name the sender, receiver, required context, source link, status, and response expectation. Remove handoffs that merely duplicate an update elsewhere.', 'Test the workflow when the receiver is unavailable so ownership does not disappear into a shared inbox.'] },
    { heading: 'Define recovery from a missed handoff', paragraphs: ['Choose a reminder point, escalation route, and visible status for work that has not been accepted by the next owner.', 'Use the recovery record to repair unclear ownership rather than measuring the coordinator only by message volume.'] },
  ],
  consistency: [
    { heading: 'Create a review sample', paragraphs: ['Choose a small, representative set of completed items and compare each against the same source, boundary, output, and escalation checklist.', 'Include ordinary work and known exceptions. A sample made only of easy items cannot reveal where the process needs clarification.'] },
    { heading: 'Use review results carefully', paragraphs: ['Record the observed checklist gaps without inferring motives or making employee-performance conclusions. Assign each process correction to an accountable owner.', 'Repeat the sample after guidance changes, then decide whether the workflow is stable enough for additional volume.'] },
  ],
};

function reviewPlanSections(post: ResearchPost): Section[] {
  const topic = post.slug.includes('interview-scheduling') ? 'interviews'
    : post.slug.includes('employee-records') ? 'records'
      : post.slug.includes('training-administration') ? 'training'
        : post.slug.includes('policy-acknowledgments') ? 'policies'
          : post.slug.includes('people-operations-reporting') ? 'reporting'
            : 'onboarding';
  const lens = post.slug.includes('source-quality') ? 'source'
    : post.slug.includes('exception-pattern') ? 'exceptions'
      : post.slug.includes('handoff-reliability') ? 'handoff'
        : post.slug.includes('review-consistency') ? 'consistency'
          : 'boundary';
  return [...topicSections[topic], ...lensSections[lens]];
}

export function generateStaticParams() {
  return researchPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) return {};
  const isReviewPlan = !post.sections?.length;
  return {
    title: post.title,
    description: isReviewPlan ? `${post.title}. A practical plan for reviewing sources, ownership, acceptance checks, and escalation.` : `Research brief: ${post.title}. Findings for HR leaders defining source quality, review ownership, and escalation.`,
    alternates: { canonical: `/research/${post.slug}` },
    openGraph: { images: [post.thumbnail || fallbackImages[researchPosts.findIndex((item) => item.slug === post.slug) % fallbackImages.length]] },
  };
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();
  const isReviewPlan = !post.sections?.length;
  const related = researchPosts.filter((item) => item.slug !== post.slug && item.cluster === post.cluster).slice(0, 3);
  const image = post.thumbnail || fallbackImages[researchPosts.findIndex((item) => item.slug === post.slug) % fallbackImages.length];
  const bodySections = post.sections?.length ? post.sections : reviewPlanSections(post);
  const toc = [
    ...bodySections.map((section) => ({ id: slugify(section.heading), label: section.heading })),
    { id: 'method-note', label: isReviewPlan ? 'How to use this plan' : 'Method note' },
    { id: 'sources', label: isReviewPlan ? 'Reference sources' : 'Sources' },
    ...(post.faq ? [{ id: 'common-questions', label: 'Common questions' }] : []),
  ];

  return <main id="main-content">
    <header className="article-hero research-hero"><div><p className="eyebrow">{post.cluster} {isReviewPlan ? 'workflow review plan' : 'research brief'}</p><h1>{post.title}</h1><p className="dek">{post.summary}</p><p className="meta">{site.name} Editorial Team · Published {post.publishedAt}</p></div><Image src={image} alt={`Research illustration for ${post.title}`} width={1200} height={630} priority /></header>
    <section className="article-layout content-wrap">
      <article className="article-body">
        <p className="research-finding"><strong>{isReviewPlan ? 'Planning premise:' : 'Central finding:'}</strong> {post.finding}</p>
        {bodySections.map((section) => <section key={section.heading} id={slugify(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        <section id="method-note"><h2>{isReviewPlan ? 'How to use this plan' : 'Method note'}</h2><p>{post.methodology || (isReviewPlan ? 'This page is a planning guide, not a completed audit or study. Use the public references below as starting points, confirm the rules that apply to your organization with qualified owners, and document what your own workflow review shows.' : 'We reviewed the public sources listed below and translated recurring operational ideas into questions for workflow ownership, source evidence, review, and escalation. This is operational guidance, not legal advice.')}</p></section>
        <section id="sources"><h2>{isReviewPlan ? 'Reference sources' : 'Sources'}</h2><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol></section>
        {post.faq && <section id="common-questions"><h2>Common questions answered</h2>{post.faq.map((item) => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</section>}
        <Link className="button primary" href="/contact-us">Discuss your workflow</Link>
      </article>
      <aside className="article-sidebar" data-toc-label="On this page">
        <ActiveSection items={toc} />
        <section><h2>{isReviewPlan ? 'Plan context' : 'Research context'}</h2><dl><div><dt>Publisher</dt><dd>{site.name} Editorial Team</dd></div><div><dt>Topic cluster</dt><dd>{post.cluster}</dd></div><div><dt>{isReviewPlan ? 'Reference sources' : 'Sources reviewed'}</dt><dd>{post.sources.length}</dd></div></dl></section>
        <section><h2>Related reading</h2>{related.map((item) => <Link href={`/research/${item.slug}`} key={item.slug}>{item.title}</Link>)}</section>
        <section><h2>Use this {isReviewPlan ? 'plan' : 'brief'}</h2><p>{isReviewPlan ? 'Apply the checks to your own records and document what you observe before changing ownership or access.' : 'Compare the findings with your own source records, decision boundaries, and exception patterns.'}</p><Link href="/services">Explore service scopes</Link></section>
      </aside>
    </section>
  </main>;
}
