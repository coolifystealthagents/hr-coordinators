import type { ServiceSlug } from './types';

export type ServiceDetail = {
  audience: string[];
  inputs: string[];
  deliverables: string[];
  controls: string[];
  boundaries: string[];
  scenarios: { title: string; copy: string }[];
  faq: { q: string; a: string }[];
};

const sharedControls = [
  'A written completion checklist for the selected HR workflow',
  'A named HR reviewer and a predictable sample review rhythm',
  'Visible source, status, next owner, due date, and exception notes',
  'Least privilege access with account ownership retained by your team'
];

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  'employee-onboarding-support': {
    audience: ['Growing teams with a repeatable onboarding plan', 'HR leaders coordinating managers, new hires, IT, payroll, and facilities', 'People teams that need visible task custody without outsourcing employment decisions'],
    inputs: ['An approved onboarding checklist and role start details', 'Named owners for HR, manager, IT, payroll, and workplace tasks', 'Approved templates, systems, due dates, access rules, and escalation paths'],
    deliverables: ['A current onboarding task register with owner and status', 'Prepared welcome messages and approved reminder drafts', 'Exception summaries for missing, conflicting, or sensitive items'],
    controls: sharedControls,
    boundaries: ['HR leadership retains employment, eligibility, compensation, accommodation, and policy decisions', 'The coordinator does not interpret Form I-9 rules or certify legal compliance', 'Sensitive records stay in approved systems and unclear requests escalate'],
    scenarios: [
      { title: 'Preboarding handoff', copy: 'Coordinate approved forms, account requests, welcome materials, and manager reminders from one visible checklist.' },
      { title: 'First week follow through', copy: 'Track assigned tasks and surface missing owners or overdue steps without making decisions for them.' },
      { title: 'Onboarding evidence review', copy: 'Prepare a completion view with source references and return exceptions to HR.' }
    ],
    faq: [
      { q: 'Can a coordinator complete Form I-9 decisions?', a: 'No. A coordinator can track approved administrative steps, but authorized staff retain verification, eligibility, and compliance decisions.' },
      { q: 'What is a safe first workflow?', a: 'Start with one role type and one checklist where owners, due dates, systems, and review points are already known.' },
      { q: 'How is quality reviewed?', a: 'Sample task custody, source accuracy, due dates, system placement, and escalation timing against the agreed checklist.' }
    ]
  },
  'interview-scheduling': {
    audience: ['Recruiting teams coordinating multi-stage candidate interviews', 'Hiring managers with complex panel availability', 'People teams that need responsive logistics without delegating selection decisions'],
    inputs: ['Approved candidate stage, panel, duration, time zone, and scheduling windows', 'Calendar access, interview format, meeting links, and contact templates', 'Reschedule, no show, privacy, and escalation rules'],
    deliverables: ['Conflict checked interview options and confirmed invitations', 'Candidate and panel reminders from approved templates', 'A current change log with time, reason, and next owner'],
    controls: sharedControls,
    boundaries: ['Interview evaluation, candidate ranking, compensation, and hiring decisions stay with authorized staff', 'The coordinator does not promise outcomes or interpret candidate communications', 'Accommodation and discrimination related requests go directly to the designated HR owner'],
    scenarios: [
      { title: 'Panel scheduling', copy: 'Collect constraints, prepare viable windows, and confirm the approved option across candidate and panel calendars.' },
      { title: 'Late schedule change', copy: 'Record the change, notify affected participants from approved wording, and preserve the event history.' },
      { title: 'Candidate logistics', copy: 'Confirm time zone, format, meeting access, and arrival details without discussing selection status.' }
    ],
    faq: [
      { q: 'Can the coordinator communicate with candidates?', a: 'Yes, within approved templates and scheduling authority. Selection feedback, offers, accommodations, and sensitive questions route to HR.' },
      { q: 'How are time zone errors reduced?', a: 'Store the candidate and panel time zones, show both in confirmations, and verify meeting links before sending.' },
      { q: 'What should always escalate?', a: 'Accommodation requests, complaints, protected information, offer questions, disputed status, and requests outside the scheduling path.' }
    ]
  },
  'employee-records': {
    audience: ['HR teams with incomplete or inconsistently organized personnel records', 'Growing organizations preparing files for accountable review', 'People operations leaders who need traceable corrections and retrieval'],
    inputs: ['Approved source documents and the designated HR system of record', 'File naming, field, version, access, and retention rules', 'Procedures for conflicts, duplicates, and missing information'],
    deliverables: ['Organized authorized records with consistent names and metadata', 'Missing information, duplicate, and correction queues', 'A correction history that preserves prior value, source, owner, and date'],
    controls: sharedControls,
    boundaries: ['The coordinator does not define retention law, certify compliance, or decide access policy', 'Medical, accommodation, investigation, identity, and other restricted data follow designated controls', 'Conflicting records remain open and route to an authorized HR owner'],
    scenarios: [
      { title: 'Personnel file review', copy: 'Check required components and prepare an exception list without creating or assuming missing facts.' },
      { title: 'HRIS correction queue', copy: 'Apply authorized changes from valid sources and preserve the correction history.' },
      { title: 'Record retrieval', copy: 'Locate approved records for an authorized request while maintaining access and handling boundaries.' }
    ],
    faq: [
      { q: 'Can coordinators clean up legacy files?', a: 'Yes, when source boundaries, naming rules, restricted data handling, and deletion authority are explicit.' },
      { q: 'Who owns retention decisions?', a: 'Your legal, compliance, privacy, security, and HR owners retain policy and deletion decisions.' },
      { q: 'What should a quality sample inspect?', a: 'Naming, field accuracy, source lineage, access classification, duplicate handling, and exception notes.' }
    ]
  },
  'training-administration': {
    audience: ['HR and learning teams coordinating recurring training', 'Managers who need clear enrollment and completion visibility', 'Organizations that want better administrative evidence without outsourcing training policy'],
    inputs: ['Approved audience, course, due date, assignment, and exemption lists', 'Learning platform access, reminder templates, and completion evidence rules', 'Escalation paths for access issues, overdue items, and disputed records'],
    deliverables: ['Current enrollment and assignment records', 'Approved reminder schedules and prepared learner communications', 'Exception queues for access, overdue, duplicate, or conflicting evidence'],
    controls: sharedControls,
    boundaries: ['HR or compliance leaders select training, audiences, deadlines, and consequences', 'The coordinator does not grant exemptions or certify regulatory compliance', 'Completion is recorded only from an approved evidence source'],
    scenarios: [
      { title: 'Recurring assignment cycle', copy: 'Load the approved roster, verify assignments, and track administrative completion evidence.' },
      { title: 'Overdue follow through', copy: 'Prepare reminders and manager views while consequences remain with authorized leaders.' },
      { title: 'Evidence reconciliation', copy: 'Compare platform records with approved sources and return conflicts for review.' }
    ],
    faq: [
      { q: 'Can the coordinator decide who must take a course?', a: 'No. The authorized program owner defines audience, deadlines, exemptions, and consequences.' },
      { q: 'What counts as completion evidence?', a: 'Use only evidence approved by the program owner, such as a learning platform record or validated certificate.' },
      { q: 'How should disputed completion be handled?', a: 'Keep the record open, attach both sources, and route the exception to the accountable program owner.' }
    ]
  },
  'policy-acknowledgments': {
    audience: ['HR teams distributing approved policies across a changing workforce', 'Organizations that need version aware acknowledgment records', 'People leaders who want visible follow through and exception routing'],
    inputs: ['The approved policy version, effective date, audience, and distribution channel', 'Authorized employee roster, acknowledgment language, due dates, and reminder cadence', 'Rules for leave, access issues, refusals, questions, and later policy replacements'],
    deliverables: ['A version linked distribution and acknowledgment register', 'Approved distribution and reminder communications', 'Current missing, overdue, inaccessible, and disputed acknowledgment queues'],
    controls: sharedControls,
    boundaries: ['HR and legal owners approve policy meaning, audience, effective date, and response to refusal', 'An acknowledgment record is not presented as proof of understanding or legal sufficiency', 'Policy questions and disputes route to the designated HR owner'],
    scenarios: [
      { title: 'New policy release', copy: 'Distribute the approved version to the authorized roster and preserve the exact version reference.' },
      { title: 'Reminder cycle', copy: 'Prepare reminders from the approved cadence and separate access problems from nonresponse.' },
      { title: 'Version replacement', copy: 'Close the prior cycle, preserve its evidence, and open the new version without overwriting history.' }
    ],
    faq: [
      { q: 'Can the coordinator explain what a policy means?', a: 'No. Interpretation and employee specific guidance remain with authorized HR or legal owners.' },
      { q: 'What should the register preserve?', a: 'Employee, policy identifier, version, distribution date, response status, source, and exception owner.' },
      { q: 'How are refusals handled?', a: 'Record the status without judgment and route it through the response path set by HR leadership.' }
    ]
  },
  'people-operations-reporting': {
    audience: ['HR leaders assembling recurring operational reports from several systems', 'People teams that need consistent metric definitions and source traceability', 'Growing organizations preparing decision ready views without outsourcing interpretation'],
    inputs: ['Approved metric dictionary, source systems, period, filters, and reporting calendar', 'Authorized data extracts and rules for suppression, privacy, and small populations', 'Named owners for source questions, data quality exceptions, and interpretation'],
    deliverables: ['Prepared recurring dashboards or report tables from approved definitions', 'Source and refresh notes for every reported measure', 'Data quality and reconciliation exception logs'],
    controls: sharedControls,
    boundaries: ['HR leadership interprets results and makes workforce decisions', 'The coordinator does not infer protected characteristics or create unsupported metrics', 'Sensitive and small population data follow your privacy, security, and reporting rules'],
    scenarios: [
      { title: 'Monthly operations pack', copy: 'Refresh approved measures, preserve source notes, and flag unresolved changes before leadership review.' },
      { title: 'Metric definition cleanup', copy: 'Document name, purpose, formula, source, owner, and limitations for each approved measure.' },
      { title: 'Source reconciliation', copy: 'Compare expected totals across approved systems and prepare discrepancies for accountable owners.' }
    ],
    faq: [
      { q: 'Can the coordinator interpret turnover or engagement?', a: 'No. The role prepares consistent evidence while contextual interpretation and decisions remain with HR leadership.' },
      { q: 'How do definitions stay consistent?', a: 'Maintain an approved metric dictionary with formula, source, population, period, owner, and change history.' },
      { q: 'What happens when two systems disagree?', a: 'Show both sources, document the discrepancy, and route it to the named data owner rather than selecting a result by assumption.' }
    ]
  }
};
