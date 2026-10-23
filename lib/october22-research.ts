import type { ResearchPost } from './types';

export const october22ResearchPosts: ResearchPost[] = [
  {
    "slug": "onboarding-document-completeness-audit",
    "title": "Auditing Onboarding Document Completeness",
    "summary": "A source-bounded method for testing whether new-hire records contain the required documents, approvals, and follow-up evidence.",
    "cluster": "Onboarding research",
    "publishedAt": "2026-10-22",
    "finding": "Onboarding document completeness is reviewable only when the required set, source, reviewer, and exception rule are defined before the sample is drawn.",
    "thumbnail": "/thumbnails/october-22/onboarding-document-completeness-audit.webp",
    "methodology": "Define the eligible new-hire population for a declared period. Record the query, systems, filters, exclusions, and count before reviewing any file. List the required documents by hire type and jurisdiction. Separate documents required before the start date from those that may be completed within a stated window. For each document, record the source, received date, reviewer, storage location, and status. Missing and rejected documents stay in the population. Sample across departments, locations, and start dates. Include hires who started late or had an approved exception so the sample reflects the real process. Classify gaps by cause: not requested, not received, rejected, unreadable, conflicting, or system error. Assign an owner and a correction path. Report the population, sample, field results, exclusions, and limits. Do not conclude that the onboarding process is compliant or that the employee is authorized to work.",
    "sections": [
      {
        "heading": "Scope and population",
        "paragraphs": [
          "Define the eligible new-hire population for a declared period. Record the query, systems, filters, exclusions, and count before reviewing any file.",
          "List the required documents by hire type and jurisdiction. Separate documents required before the start date from those that may be completed within a stated window."
        ]
      },
      {
        "heading": "Evidence and review method",
        "paragraphs": [
          "For each document, record the source, received date, reviewer, storage location, and status. Missing and rejected documents stay in the population.",
          "Sample across departments, locations, and start dates. Include hires who started late or had an approved exception so the sample reflects the real process."
        ]
      },
      {
        "heading": "Findings and limitations",
        "paragraphs": [
          "Classify gaps by cause: not requested, not received, rejected, unreadable, conflicting, or system error. Assign an owner and a correction path.",
          "Report the population, sample, field results, exclusions, and limits. Do not conclude that the onboarding process is compliant or that the employee is authorized to work.",
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved. Corrective actions need an owner and a retest date."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  },
  {
    "slug": "hr-shared-inbox-response-classification",
    "title": "Classifying HR Shared Inbox Responses",
    "summary": "A reproducible method for categorizing employee questions, sensitivity, ownership, and response status without judging individuals.",
    "cluster": "People operations research",
    "publishedAt": "2026-10-22",
    "finding": "Shared inbox classification is useful when the request type, sensitivity flag, owner, and closure evidence are defined and applied consistently.",
    "thumbnail": "/thumbnails/october-22/hr-shared-inbox-response-classification.webp",
    "methodology": "Define the inbox population for a declared period. Record the channel, query date, filters, and count. Exclude spam and test messages only under a written rule. Build a small request taxonomy such as payroll, benefits, leave, records, policy, onboarding, and employee relations. Add a separate sensitivity flag for protected or urgent topics. For a stratified sample, record the subject, request type, sensitivity, assigned owner, first response, and closure state. Preserve the original wording. Test reviewer agreement on the taxonomy. If two reviewers disagree, revise the definitions and examples before expanding the sample. Classify misroutes, missing responses, and sensitive requests that lacked an owner. Do not treat a closed thread as proof that the employee question was answered. Report counts by category and owner group with the sample limits. The review informs queue design, not individual performance.",
    "sections": [
      {
        "heading": "Scope and population",
        "paragraphs": [
          "Define the inbox population for a declared period. Record the channel, query date, filters, and count. Exclude spam and test messages only under a written rule.",
          "Build a small request taxonomy such as payroll, benefits, leave, records, policy, onboarding, and employee relations. Add a separate sensitivity flag for protected or urgent topics."
        ]
      },
      {
        "heading": "Evidence and review method",
        "paragraphs": [
          "For a stratified sample, record the subject, request type, sensitivity, assigned owner, first response, and closure state. Preserve the original wording.",
          "Test reviewer agreement on the taxonomy. If two reviewers disagree, revise the definitions and examples before expanding the sample."
        ]
      },
      {
        "heading": "Findings and limitations",
        "paragraphs": [
          "Classify misroutes, missing responses, and sensitive requests that lacked an owner. Do not treat a closed thread as proof that the employee question was answered.",
          "Report counts by category and owner group with the sample limits. The review informs queue design, not individual performance.",
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved. Corrective actions need an owner and a retest date."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  },
  {
    "slug": "leave-request-handoff-evidence-quality",
    "title": "Reviewing Leave Request Handoff Evidence",
    "summary": "A method for examining whether leave requests reach the right owner with the information needed for an eligibility decision.",
    "cluster": "People operations research",
    "publishedAt": "2026-10-22",
    "finding": "Leave handoff quality depends on a declared request date, document set, eligibility question, owner, and acknowledgment, not on the speed of a general response.",
    "thumbnail": "/thumbnails/october-22/leave-request-handoff-evidence-quality.webp",
    "methodology": "Define the leave request population by type and period. Record the intake channel, employee group, and exclusions. Specify the evidence expected at handoff: request date, leave type, dates requested, employee notice, documentation received, and the eligibility question. Sample requests that were approved, denied, withdrawn, and still open. Include requests with missing documents and late notice. Trace each request to the owner who could decide eligibility. Record the acknowledgment time and any missing information returned to the employee. Classify handoff gaps by cause: missing document, wrong owner, unclear question, privacy issue, or system limitation. Do not assess the medical merits. Report the sample and the limits. The review tests process evidence, not whether a leave should have been granted.",
    "sections": [
      {
        "heading": "Scope and population",
        "paragraphs": [
          "Define the leave request population by type and period. Record the intake channel, employee group, and exclusions.",
          "Specify the evidence expected at handoff: request date, leave type, dates requested, employee notice, documentation received, and the eligibility question."
        ]
      },
      {
        "heading": "Evidence and review method",
        "paragraphs": [
          "Sample requests that were approved, denied, withdrawn, and still open. Include requests with missing documents and late notice.",
          "Trace each request to the owner who could decide eligibility. Record the acknowledgment time and any missing information returned to the employee."
        ]
      },
      {
        "heading": "Findings and limitations",
        "paragraphs": [
          "Classify handoff gaps by cause: missing document, wrong owner, unclear question, privacy issue, or system limitation. Do not assess the medical merits.",
          "Report the sample and the limits. The review tests process evidence, not whether a leave should have been granted.",
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved. Corrective actions need an owner and a retest date."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  },
  {
    "slug": "offboarding-access-removal-review",
    "title": "Reviewing Offboarding Access Removal",
    "summary": "A method for comparing separation records with system access and confirming removal evidence.",
    "cluster": "HR records research",
    "publishedAt": "2026-10-22",
    "finding": "Offboarding access review is meaningful only when the separation date, system inventory, removal request, completion evidence, and exception owner are linked.",
    "thumbnail": "/thumbnails/october-22/offboarding-access-removal-review.webp",
    "methodology": "Define the separation population for a declared period and the systems in scope. Record the HR source, IT source, query date, and exclusions. For each separation, record the last day, manager confirmation, access removal request, executor, completion time, and evidence. Sample voluntary, involuntary, and contractor separations. Include rehires and transfers so the access history is not oversimplified. Compare the separation record with active accounts and shared resources. A submitted ticket is a request, not proof of removal. Report exceptions by system and cause: delayed notice, missing ticket, incomplete removal, shared account, or unverifiable evidence. Do not conclude that access is fully removed from a sample. State the scope, limits, and remediation owners.",
    "sections": [
      {
        "heading": "Scope and population",
        "paragraphs": [
          "Define the separation population for a declared period and the systems in scope. Record the HR source, IT source, query date, and exclusions.",
          "For each separation, record the last day, manager confirmation, access removal request, executor, completion time, and evidence."
        ]
      },
      {
        "heading": "Evidence and review method",
        "paragraphs": [
          "Sample voluntary, involuntary, and contractor separations. Include rehires and transfers so the access history is not oversimplified.",
          "Compare the separation record with active accounts and shared resources. A submitted ticket is a request, not proof of removal."
        ]
      },
      {
        "heading": "Findings and limitations",
        "paragraphs": [
          "Report exceptions by system and cause: delayed notice, missing ticket, incomplete removal, shared account, or unverifiable evidence.",
          "Do not conclude that access is fully removed from a sample. State the scope, limits, and remediation owners.",
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved. Corrective actions need an owner and a retest date."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  },
  {
    "slug": "hr-data-retention-boundary-review",
    "title": "Reviewing HR Data Retention Boundaries",
    "summary": "A privacy-conscious method for mapping employee record classes, retention rules, access, and deletion evidence.",
    "cluster": "HR records research",
    "publishedAt": "2026-10-22",
    "finding": "HR retention review is useful when each record class has a stated rule, system owner, access purpose, retention trigger, and deletion evidence.",
    "thumbnail": "/thumbnails/october-22/hr-data-retention-boundary-review.webp",
    "methodology": "Define the record classes in scope: hiring, onboarding, payroll, benefits, leave, performance, discipline, and separation. Record the system and owner for each. Map shadow stores such as shared drives, inboxes, local exports, and vendor systems. A record can leave the official system through a copy or attachment. Compare the stated retention rule with the actual record. Record the trigger event, retention period, deletion method, and evidence. Review access by role and purpose. Retained records should not remain available to people who no longer need them. Sample records that should have been deleted and records under a legal hold or approved extension. Do not delete records during the review. Report gaps by class and system with an owner and remediation date. The review does not provide a legal conclusion.",
    "sections": [
      {
        "heading": "Scope and population",
        "paragraphs": [
          "Define the record classes in scope: hiring, onboarding, payroll, benefits, leave, performance, discipline, and separation. Record the system and owner for each.",
          "Map shadow stores such as shared drives, inboxes, local exports, and vendor systems. A record can leave the official system through a copy or attachment."
        ]
      },
      {
        "heading": "Evidence and review method",
        "paragraphs": [
          "Compare the stated retention rule with the actual record. Record the trigger event, retention period, deletion method, and evidence.",
          "Review access by role and purpose. Retained records should not remain available to people who no longer need them."
        ]
      },
      {
        "heading": "Findings and limitations",
        "paragraphs": [
          "Sample records that should have been deleted and records under a legal hold or approved extension. Do not delete records during the review.",
          "Report gaps by class and system with an owner and remediation date. The review does not provide a legal conclusion.",
          "The review describes the sampled records, not the whole population. A closed status is not proof that the underlying question was resolved. Corrective actions need an owner and a retest date."
        ]
      }
    ],
    "sources": [
      {
        "label": "Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "Records Management Policy and Guidance",
        "url": "https://www.archives.gov/records-mgmt/policy"
      }
    ]
  }
];
