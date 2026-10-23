import type { BlogPost } from './types';

export const october22BlogPosts: BlogPost[] = [
  {
    "slug": "hr-shared-inbox-triage",
    "title": "Triage the HR Shared Inbox",
    "description": "A practical queue design for employee questions, sensitive requests, ownership, and response expectations.",
    "category": "People operations",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/hr-shared-inbox-triage.webp",
    "sections": [
      {
        "heading": "Set the shared inbox triage scope",
        "paragraphs": [
          "Triage the HR Shared Inbox starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a sensitive employee question can wait behind routine requests or reach the wrong owner. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the sender, employee identifier, request category, received time, sensitivity flag, assigned owner, response, and closure state. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The HR leader or specialist named for that topic confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can classify the request, check the approved guidance, prepare a response, and route exceptions. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about eligibility, accommodation, discipline, compensation, and employment outcomes remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review age by category, first response, misroutes, and requests held for missing information. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a leave question arrives with a medical attachment and a manager copied on the message. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one request category with a known owner and an approved answer library. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for shared inbox triage?",
        "a": "Decisions about eligibility, accommodation, discipline, compensation, and employment outcomes and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the sender, employee identifier, request category, received time, sensitivity flag, assigned owner, response, and closure state."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that age by category, first response, misroutes, and requests held for missing information are visible and reproducible."
      }
    ],
    "internalService": "/services/people-operations-reporting",
    "internalSibling": "/blog/employee-document-request-tracking",
    "source": {
      "label": "U.S. Department of Labor",
      "url": "https://www.dol.gov/general/topic/workhours"
    }
  },
  {
    "slug": "employee-document-request-tracking",
    "title": "Track Employee Document Requests",
    "description": "A record for requesting, receiving, reviewing, and storing employee documents without losing the thread.",
    "category": "HR records",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/employee-document-request-tracking.webp",
    "sections": [
      {
        "heading": "Set the employee document requests scope",
        "paragraphs": [
          "Track Employee Document Requests starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a missing or outdated document can delay onboarding, benefits, or a compliance review. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the employee, document type, request date, due date, received date, reviewer, storage location, and open exception. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The HR records owner confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can send the approved request, check that the document is complete, and route it for review. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about whether a document is acceptable, whether an exception applies, and how a sensitive record is handled remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review requests by age, missing documents, rejected documents, and time to review. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a new hire uploads an expired identification document during the first week. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one document type for one onboarding cohort. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for employee document requests?",
        "a": "Decisions about whether a document is acceptable, whether an exception applies, and how a sensitive record is handled and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the employee, document type, request date, due date, received date, reviewer, storage location, and open exception."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that requests by age, missing documents, rejected documents, and time to review are visible and reproducible."
      }
    ],
    "internalService": "/services/employee-records",
    "internalSibling": "/blog/benefits-enrollment-evidence-handoff",
    "source": {
      "label": "U.S. Citizenship and Immigration Services",
      "url": "https://www.uscis.gov/i-9-central"
    }
  },
  {
    "slug": "benefits-enrollment-evidence-handoff",
    "title": "Hand Off Benefits Enrollment Evidence",
    "description": "A controlled handoff for enrollment forms, eligibility questions, elections, and confirmation records.",
    "category": "HR records",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/benefits-enrollment-evidence-handoff.webp",
    "sections": [
      {
        "heading": "Set the benefits enrollment handoffs scope",
        "paragraphs": [
          "Hand Off Benefits Enrollment Evidence starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that an election can be recorded without the supporting evidence or the correct effective date. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the employee, plan, election, effective date, dependent information, supporting record, reviewer, and confirmation. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The benefits administrator or HR leader confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can collect approved forms, check completeness, and route eligibility questions. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about eligibility, plan interpretation, late enrollment, and exception approval remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review open enrollments, missing evidence, corrections, and confirmation timeliness. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, an employee elects coverage for a dependent but the supporting document is missing. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one plan and one enrollment window. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for benefits enrollment handoffs?",
        "a": "Decisions about eligibility, plan interpretation, late enrollment, and exception approval and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the employee, plan, election, effective date, dependent information, supporting record, reviewer, and confirmation."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that open enrollments, missing evidence, corrections, and confirmation timeliness are visible and reproducible."
      }
    ],
    "internalService": "/services/employee-records",
    "internalSibling": "/blog/leave-request-intake-routing",
    "source": {
      "label": "U.S. Department of Labor Employee Benefits Security Administration",
      "url": "https://www.dol.gov/agencies/ebsa"
    }
  },
  {
    "slug": "leave-request-intake-routing",
    "title": "Route Leave Requests to the Right Owner",
    "description": "An intake workflow for leave questions, documentation, eligibility routing, and employee communication.",
    "category": "People operations",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/leave-request-intake-routing.webp",
    "sections": [
      {
        "heading": "Set the leave request intake scope",
        "paragraphs": [
          "Route Leave Requests to the Right Owner starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a routine question can be mistaken for an approved leave or a medical determination. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the employee, request date, leave type, dates requested, documentation received, eligibility question, owner, and status. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The leave administrator or HR leader confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can acknowledge the request, collect approved information, and route eligibility or medical questions. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about eligibility, medical certification, accommodation, and approval or denial remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review time to acknowledgment, missing documentation, routing accuracy, and open questions. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, an employee asks about leave for a family member and attaches a medical note. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one leave type and one employee group. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for leave request intake?",
        "a": "Decisions about eligibility, medical certification, accommodation, and approval or denial and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the employee, request date, leave type, dates requested, documentation received, eligibility question, owner, and status."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that time to acknowledgment, missing documentation, routing accuracy, and open questions are visible and reproducible."
      }
    ],
    "internalService": "/services/employee-records",
    "internalSibling": "/blog/employee-document-request-tracking",
    "source": {
      "label": "U.S. Department of Labor Family and Medical Leave Act",
      "url": "https://www.dol.gov/agencies/whd/fmla"
    }
  },
  {
    "slug": "performance-review-cycle-tracking",
    "title": "Track the Performance Review Cycle",
    "description": "A coordination record for review deadlines, manager completion, calibration, and employee conversations.",
    "category": "People operations",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/performance-review-cycle-tracking.webp",
    "sections": [
      {
        "heading": "Set the performance review cycle tracking scope",
        "paragraphs": [
          "Track the Performance Review Cycle starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a missed review or calibration step can leave an employee without a completed conversation. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the employee, manager, review period, self-review status, manager review status, calibration status, conversation date, and exception. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The HR or people operations leader confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can send approved reminders, track completion, and route questions about the process. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about ratings, compensation, performance outcomes, and employee action remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review completion by stage, overdue items, calibration exceptions, and conversation confirmation. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a manager submits a review but the calibration session is not scheduled. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one department and one review cycle. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for performance review cycle tracking?",
        "a": "Decisions about ratings, compensation, performance outcomes, and employee action and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the employee, manager, review period, self-review status, manager review status, calibration status, conversation date, and exception."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that completion by stage, overdue items, calibration exceptions, and conversation confirmation are visible and reproducible."
      }
    ],
    "internalService": "/services/people-operations-reporting",
    "internalSibling": "/blog/training-completion-records",
    "source": {
      "label": "Society for Human Resource Management",
      "url": "https://www.shrm.org/topics-tools/topics/performance-management"
    }
  },
  {
    "slug": "handbook-acknowledgment-tracking",
    "title": "Track Handbook Acknowledgments",
    "description": "A repeatable process for distributing policy updates, collecting acknowledgments, and following up with employees.",
    "category": "HR records",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/handbook-acknowledgment-tracking.webp",
    "sections": [
      {
        "heading": "Set the handbook acknowledgment tracking scope",
        "paragraphs": [
          "Track Handbook Acknowledgments starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a policy update can be treated as communicated when an employee has not acknowledged it. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the policy version, distribution date, audience, acknowledgment date, method, employee status, and follow-up owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The HR policy owner confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can distribute the approved version, track acknowledgments, and send approved reminders. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about policy content, exceptions, and consequences of non-acknowledgment remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review acknowledgment rate, overdue employees, delivery failures, and version coverage. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a remote employee misses the policy email because the address is outdated. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one policy update and one employee group. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for handbook acknowledgment tracking?",
        "a": "Decisions about policy content, exceptions, and consequences of non-acknowledgment and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the policy version, distribution date, audience, acknowledgment date, method, employee status, and follow-up owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that acknowledgment rate, overdue employees, delivery failures, and version coverage are visible and reproducible."
      }
    ],
    "internalService": "/services/policy-acknowledgments",
    "internalSibling": "/blog/hr-shared-inbox-triage",
    "source": {
      "label": "Society for Human Resource Management",
      "url": "https://www.shrm.org/topics-tools/topics/policies"
    }
  },
  {
    "slug": "background-check-status-coordination",
    "title": "Coordinate Background Check Status",
    "description": "A status workflow for screening requests, candidate communication, vendor follow-up, and confidential results.",
    "category": "HR records",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/background-check-status-coordination.webp",
    "sections": [
      {
        "heading": "Set the background check coordination scope",
        "paragraphs": [
          "Coordinate Background Check Status starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a status update can expose confidential results or imply a hiring decision that has not been made. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the candidate, screening package, request date, vendor reference, status, reviewer, and decision owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The HR or talent leader authorized to review the result confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can track the vendor status, send approved reminders, and route result questions. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about suitability, adverse action, and any candidate-specific exception remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review open screenings, vendor delays, incomplete packages, and time to owner review. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a vendor returns a pending result while the hiring manager asks for a start date. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one role family and one screening package. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for background check coordination?",
        "a": "Decisions about suitability, adverse action, and any candidate-specific exception and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the candidate, screening package, request date, vendor reference, status, reviewer, and decision owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that open screenings, vendor delays, incomplete packages, and time to owner review are visible and reproducible."
      }
    ],
    "internalService": "/services/employee-records",
    "internalSibling": "/blog/onboarding-welcome-communication",
    "source": {
      "label": "U.S. Equal Employment Opportunity Commission",
      "url": "https://www.eeoc.gov/background-checks"
    }
  },
  {
    "slug": "training-completion-records",
    "title": "Keep Training Completion Records Reviewable",
    "description": "A record for assigned training, due dates, completion evidence, exceptions, and manager follow-up.",
    "category": "HR records",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/training-completion-records.webp",
    "sections": [
      {
        "heading": "Set the training completion records scope",
        "paragraphs": [
          "Keep Training Completion Records Reviewable starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a completion report can show a status without the evidence needed to confirm the learning requirement. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the employee, course, assignment date, due date, completion date, score or acknowledgment, source system, and exception. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The training or HR operations owner confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can assign approved courses, track completion, and route access or content questions. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about whether a course satisfies a requirement, extensions, and consequences remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review completion by course, overdue assignments, exceptions, and source reconciliation. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, an employee completes a course in a different learning system than the one on record. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one required course and one team. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for training completion records?",
        "a": "Decisions about whether a course satisfies a requirement, extensions, and consequences and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the employee, course, assignment date, due date, completion date, score or acknowledgment, source system, and exception."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that completion by course, overdue assignments, exceptions, and source reconciliation are visible and reproducible."
      }
    ],
    "internalService": "/services/training-administration",
    "internalSibling": "/blog/performance-review-cycle-tracking",
    "source": {
      "label": "U.S. Department of Labor Occupational Safety and Health Administration",
      "url": "https://www.osha.gov/training"
    }
  },
  {
    "slug": "offboarding-access-checklist",
    "title": "Build an Offboarding Access Checklist",
    "description": "A coordinated checklist for last-day tasks, access removal, equipment, records, and final communication.",
    "category": "HR records",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/offboarding-access-checklist.webp",
    "sections": [
      {
        "heading": "Set the offboarding access scope",
        "paragraphs": [
          "Build an Offboarding Access Checklist starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a departing employee can retain access to systems or data after the last day. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the employee, last day, manager, systems, access removal request, completion evidence, equipment status, and record handoff. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The HR operations and IT owners confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can track the checklist, send approved reminders, and route exceptions. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about access exceptions, final pay, and employment separation details remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review checklist completion, overdue removals, equipment returns, and confirmation evidence. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a manager delays the last-day confirmation while the employee still has shared-drive access. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one department and one separation type. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for offboarding access?",
        "a": "Decisions about access exceptions, final pay, and employment separation details and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the employee, last day, manager, systems, access removal request, completion evidence, equipment status, and record handoff."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that checklist completion, overdue removals, equipment returns, and confirmation evidence are visible and reproducible."
      }
    ],
    "internalService": "/services/employee-records",
    "internalSibling": "/blog/hr-reporting-request-queue",
    "source": {
      "label": "CISA Identity and Access Management Guidance",
      "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators"
    }
  },
  {
    "slug": "hr-reporting-request-queue",
    "title": "Design an HR Reporting Request Queue",
    "description": "A request workflow for headcount, turnover, leave, and compliance reports with clear definitions and owners.",
    "category": "People operations",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/hr-reporting-request-queue.webp",
    "sections": [
      {
        "heading": "Set the HR reporting requests scope",
        "paragraphs": [
          "Design an HR Reporting Request Queue starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a report can be produced from an unclear population or definition and become misleading. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the requester, purpose, population, fields, period, definitions, source, owner, approval, and delivery date. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The HR analytics or people operations owner confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can clarify the request, assemble approved data, and prepare a draft view. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about metric definitions, sensitive reporting, and interpretation remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review request age, clarification cycles, rework, and delivery completeness. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a leader asks for turnover by department without specifying whether voluntary and involuntary exits are included. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one recurring report and one audience. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for HR reporting requests?",
        "a": "Decisions about metric definitions, sensitive reporting, and interpretation and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the requester, purpose, population, fields, period, definitions, source, owner, approval, and delivery date."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that request age, clarification cycles, rework, and delivery completeness are visible and reproducible."
      }
    ],
    "internalService": "/services/people-operations-reporting",
    "internalSibling": "/blog/offboarding-access-checklist",
    "source": {
      "label": "U.S. Bureau of Labor Statistics",
      "url": "https://www.bls.gov/"
    }
  },
  {
    "slug": "employee-relations-meeting-scheduling",
    "title": "Schedule Employee Relations Meetings Safely",
    "description": "A scheduling boundary for sensitive conversations, privacy, preparation, and follow-up ownership.",
    "category": "People operations",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/employee-relations-meeting-scheduling.webp",
    "sections": [
      {
        "heading": "Set the employee relations meeting scheduling scope",
        "paragraphs": [
          "Schedule Employee Relations Meetings Safely starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a sensitive conversation can be scheduled without privacy or the right participants. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the request, participants, purpose, confidentiality level, location or channel, preparation materials, and owner. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The employee relations or HR leader confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can coordinate availability, send approved invitations, and protect the meeting details. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about who participates, what is disclosed, and what action follows remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review scheduling time, privacy exceptions, reschedules, and follow-up ownership. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a manager requests a meeting about a complaint and copies the whole team. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one meeting type with a named HR owner. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for employee relations meeting scheduling?",
        "a": "Decisions about who participates, what is disclosed, and what action follows and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the request, participants, purpose, confidentiality level, location or channel, preparation materials, and owner."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that scheduling time, privacy exceptions, reschedules, and follow-up ownership are visible and reproducible."
      }
    ],
    "internalService": "/services/people-operations-reporting",
    "internalSibling": "/blog/leave-request-intake-routing",
    "source": {
      "label": "U.S. Equal Employment Opportunity Commission",
      "url": "https://www.eeoc.gov/"
    }
  },
  {
    "slug": "onboarding-welcome-communication",
    "title": "Coordinate Onboarding Welcome Communication",
    "description": "A first-week communication plan that stays accurate, timely, and consistent with the approved onboarding record.",
    "category": "Employee onboarding",
    "publishedAt": "2026-10-22",
    "readTime": "7 min read",
    "thumbnail": "/thumbnails/october-22/onboarding-welcome-communication.webp",
    "sections": [
      {
        "heading": "Set the onboarding welcome communication scope",
        "paragraphs": [
          "Coordinate Onboarding Welcome Communication starts with a written operating boundary. Name the employee group, the request or event that enters the queue, the approved source, the owner, and the evidence that proves the work moved forward. Without those fields, the team cannot tell a routine request from an exception.",
          "The main risk is that a welcome message can promise a start time, access, or benefit that is not confirmed. A clear intake rule keeps that risk visible before a status is changed or a message is sent. Record the source and timestamp rather than relying on a later summary."
        ]
      },
      {
        "heading": "Define the evidence record",
        "paragraphs": [
          "A usable record includes the employee, start date, manager, work location, equipment status, access status, welcome template, and sender. Keep the source link beside the record so another reviewer can reconstruct what was known and when. Missing evidence should stay marked as missing rather than being inferred from a later action.",
          "The onboarding or HR operations owner confirms the decision or exception. The administrative role can organize the record and route the question, but it should not fill a gap with an assumption or convert an unverified detail into a completed status."
        ]
      },
      {
        "heading": "Separate preparation from judgment",
        "paragraphs": [
          "An administrative specialist can send approved messages, confirm the first-day details, and route access questions. That work should follow an approved checklist and stay inside the documented scope. A request that falls outside the scope is an escalation, not a reason to improvise.",
          "Decisions about start date changes, role details, and any employment condition remain with the authorized owner. Use three labels in the queue: proceed under the written rule, pause for missing evidence, and escalate for a decision. Apply them to real examples so the boundary is easy to recognize."
        ]
      },
      {
        "heading": "Run the review cadence",
        "paragraphs": [
          "Review welcome timeliness, bounced messages, missing first-day details, and new-hire questions. Sort the queue by age, owner, and exception reason, and confirm that every open item has a next action. A count without a denominator or definition is easy to misread.",
          "For example, a new hire receives a welcome email before the laptop and account are ready. The review should show what evidence was available, what question remained, and who owned the next step. Use the pattern to fix the intake or the source, not to rank individual employees."
        ]
      },
      {
        "heading": "Pilot one controlled workflow",
        "paragraphs": [
          "Start with one onboarding cohort and one template. Write the checklist, test it on a small batch, and review the exceptions with the owner. Keep the volume steady until the evidence and escalation path work in practice.",
          "Expand only after the first workflow produces a reviewable record and a predictable review rhythm. A narrow pilot reveals whether the problem is access, ownership, or an unclear rule before the queue grows."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner for onboarding welcome communication?",
        "a": "Decisions about start date changes, role details, and any employment condition and any exception outside the written rule stay with the authorized owner."
      },
      {
        "q": "What should the administrative role record?",
        "a": "The approved action, source evidence, current status, exception, and next owner, including the employee, start date, manager, work location, equipment status, access status, welcome template, and sender."
      },
      {
        "q": "How should the workflow be tested?",
        "a": "Review a small sample against the checklist and confirm that welcome timeliness, bounced messages, missing first-day details, and new-hire questions are visible and reproducible."
      }
    ],
    "internalService": "/services/employee-onboarding-support",
    "internalSibling": "/blog/background-check-status-coordination",
    "source": {
      "label": "Society for Human Resource Management",
      "url": "https://www.shrm.org/topics-tools/topics/onboarding"
    }
  }
];
