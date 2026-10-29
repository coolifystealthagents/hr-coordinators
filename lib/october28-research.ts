import type { ResearchPost } from './types';

export const october28ResearchPosts: ResearchPost[] = [
  {
    "slug": "hrcoordinators-interview-scheduling-lag-study-2026-10-28",
    "title": "Measuring interview scheduling lag from request to confirmation",
    "summary": "A bounded protocol for measuring the interval between an approved interview request and candidate confirmation.",
    "cluster": "Recruiting Coordination",
    "publishedAt": "2026-10-28",
    "finding": "A scheduling lag measure is useful when it separates recruiter approval, panel availability, candidate response, and final confirmation rather than reporting one elapsed time [Source: SHRM recruiting guidance].",
    "thumbnail": "/daily28/hrcoordinators/hrcoordinators-interview-scheduling-lag-study-2026-10-28.webp",
    "sections": [
      {
        "heading": "Define the four timestamps",
        "paragraphs": [
          "Record the approved request time, the first panel availability request, the candidate availability request, and the confirmed event time. Use one time zone and state the business-hours rule [Source: SHRM recruiting guidance].",
          "A single request-to-confirmation number hides the step that caused the delay. The four timestamps show whether the lag sits with the recruiter, the panel, the candidate, or the coordinator."
        ]
      },
      {
        "heading": "Classify the interview and the exception",
        "paragraphs": [
          "Record the interview stage, the panel size, the time zone spread, and any accommodation. A complex panel should not be compared directly with a single interviewer [Source: BLS administrative support outlook].",
          "Separate a reschedule from a first booking. A reschedule has a different cause and should be reported separately."
        ]
      },
      {
        "heading": "Sample and report",
        "paragraphs": [
          "Select a fixed period and include every approved request in scope. Report the count, median, range, and the number of reschedules. State the sample and the stage mix [Source: U.S. Department of Labor workplace guidance].",
          "The measure describes the reviewed scheduling queue and does not establish an industry standard."
        ]
      },
      {
        "heading": "Use the result to test one control",
        "paragraphs": [
          "If the delay is at panel availability, test a request that includes the role and preparation time. If the delay is at candidate response, test a clearer message and a single scheduling link.",
          "Keep the measure in place long enough to compare. One fast week is a case, not proof of improvement."
        ]
      }
    ],
    "sources": [
      {
        "label": "SHRM recruiting guidance",
        "url": "https://www.shrm.org/topics-tools/"
      },
      {
        "label": "BLS administrative support outlook",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/"
      },
      {
        "label": "U.S. Department of Labor workplace guidance",
        "url": "https://www.dol.gov/agencies/whd"
      }
    ]
  },
  {
    "slug": "hrcoordinators-onboarding-document-completeness-2026-10-28",
    "title": "Auditing onboarding document completeness",
    "summary": "A protocol for testing whether first-day onboarding packets contain the required documents, evidence, and access approvals.",
    "cluster": "Onboarding",
    "publishedAt": "2026-10-28",
    "finding": "An onboarding completeness audit should test the required document, the signature or verification, the review owner, and the first-day dependency rather than only counting uploaded files [Source: U.S. Department of Labor workplace guidance].",
    "thumbnail": "/daily28/hrcoordinators/hrcoordinators-onboarding-document-completeness-2026-10-28.webp",
    "sections": [
      {
        "heading": "Select the sample and the standard",
        "paragraphs": [
          "Include one smooth onboarding, one late packet, and one packet with an exception. Use the same required-document list for each file [Source: U.S. Department of Labor workplace guidance].",
          "Record the start date and the date the packet was checked. A packet checked after the first day does not prove first-day readiness."
        ]
      },
      {
        "heading": "Test evidence, not file count",
        "paragraphs": [
          "For each required item, record whether the document is present, signed or verified, reviewed, and linked to the access or payroll task [Source: SHRM onboarding guidance].",
          "An uploaded identity document without a reviewer is not complete. A signed policy acknowledgment for an old version is not complete."
        ]
      },
      {
        "heading": "Record the dependency and the owner",
        "paragraphs": [
          "For each missing or incomplete item, record the dependency, the owner, and the first-day consequence. A missing access approval is different from a missing welcome form [Source: NIST Cybersecurity Framework].",
          "Do not score the packet complete because the manager said it was fine. The evidence should show the item and the review."
        ]
      },
      {
        "heading": "Report with limits",
        "paragraphs": [
          "Report the number of packets reviewed, the missing items by type, and the number that affected first-day access. State the sample and the roles [Source: SHRM onboarding guidance].",
          "A small sample can be dominated by one unusual role. The result is local evidence, not an industry completion rate."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor workplace guidance",
        "url": "https://www.dol.gov/agencies/whd"
      },
      {
        "label": "SHRM onboarding guidance",
        "url": "https://www.shrm.org/topics-tools/"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  },
  {
    "slug": "hrcoordinators-policy-acknowledgment-aging-2026-10-28",
    "title": "Measuring policy acknowledgment aging by audience",
    "summary": "A protocol for tracking acknowledgment by policy version, audience group, reminder, and exception owner.",
    "cluster": "Policy Administration",
    "publishedAt": "2026-10-28",
    "finding": "A policy acknowledgment measure should start at the effective date or assignment date, show the audience denominator, and report the oldest unacknowledged group rather than one company percentage [Source: SHRM policy guidance].",
    "thumbnail": "/daily28/hrcoordinators/hrcoordinators-policy-acknowledgment-aging-2026-10-28.webp",
    "sections": [
      {
        "heading": "Define the version and audience",
        "paragraphs": [
          "Record the policy, version, effective date, and audience. Confirm the audience list against the current roster before reporting a rate [Source: SHRM policy guidance].",
          "An outdated roster can make completion look better or worse. The denominator is part of the evidence."
        ]
      },
      {
        "heading": "Record the reminder and the exception",
        "paragraphs": [
          "For each unacknowledged person, record the assignment date, the reminder dates, the reason, and the owner. Do not remove an exception without the policy owner's decision [Source: U.S. Department of Labor workplace guidance].",
          "An opened email is not an acknowledgment. The record should show an affirmative action and the policy version."
        ]
      },
      {
        "heading": "Report by group and age",
        "paragraphs": [
          "Report completion and the oldest open item by role or location. Include the number of exceptions and the reminder count [Source: SHRM policy guidance].",
          "A high overall rate can hide a small group with no acknowledgments. The group view is the useful control."
        ]
      },
      {
        "heading": "Use the result to improve delivery",
        "paragraphs": [
          "If one group is consistently late, review the delivery channel and the timing. If one policy version has more exceptions, review the acknowledgment instruction.",
          "The measure describes the reviewed audience and does not prove legal compliance."
        ]
      }
    ],
    "sources": [
      {
        "label": "SHRM policy guidance",
        "url": "https://www.shrm.org/topics-tools/"
      },
      {
        "label": "U.S. Department of Labor workplace guidance",
        "url": "https://www.dol.gov/agencies/whd"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  },
  {
    "slug": "hrcoordinators-training-completion-evidence-2026-10-28",
    "title": "Testing training completion evidence",
    "summary": "A protocol for checking whether a completion record matches the assigned course, version, assessment, and due date.",
    "cluster": "Training Administration",
    "publishedAt": "2026-10-28",
    "finding": "A training completion review should match the person, course version, assignment, due date, assessment or acknowledgment, and reviewer rather than relying on an opened-module report [Source: SHRM learning guidance].",
    "thumbnail": "/daily28/hrcoordinators/hrcoordinators-training-completion-evidence-2026-10-28.webp",
    "sections": [
      {
        "heading": "Define the assignment",
        "paragraphs": [
          "Record the course, version, required audience, assignment date, due date, and the assessment or acknowledgment rule [Source: SHRM learning guidance].",
          "A new version may require a new completion. Do not count an old completion for a new assignment without the policy owner's decision."
        ]
      },
      {
        "heading": "Test the evidence",
        "paragraphs": [
          "For each sampled person, check the completion date, the assessment result, the acknowledgment, and the reviewer. An opened module is not completion [Source: U.S. Department of Labor workplace guidance].",
          "If the course has no assessment, record the attendance or acknowledgment evidence that the policy requires."
        ]
      },
      {
        "heading": "Report overdue by owner",
        "paragraphs": [
          "Group overdue items by manager and course. Record the exception reason and the approval owner [Source: SHRM learning guidance].",
          "A completion percentage without the denominator and the exception count is difficult to act on."
        ]
      },
      {
        "heading": "Use the result to improve the assignment",
        "paragraphs": [
          "If overdue items cluster in one course, review the assignment audience and the due date. If evidence is missing after completion, review the system handoff.",
          "The result describes the reviewed training ledger and does not establish an industry benchmark."
        ]
      }
    ],
    "sources": [
      {
        "label": "SHRM learning guidance",
        "url": "https://www.shrm.org/topics-tools/"
      },
      {
        "label": "U.S. Department of Labor workplace guidance",
        "url": "https://www.dol.gov/agencies/whd"
      },
      {
        "label": "BLS administrative support outlook",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/"
      }
    ]
  },
  {
    "slug": "hrcoordinators-employee-record-audit-2026-10-28",
    "title": "A fixed-sample employee record audit",
    "summary": "A protocol for testing record type, access, retention rule, legal hold, review date, and disposal evidence.",
    "cluster": "Employee Records",
    "publishedAt": "2026-10-28",
    "finding": "An employee record audit should test the record type, owner, approved location, access, retention rule, legal hold status, and review date rather than only confirming that a file exists [Source: U.S. Department of Labor workplace guidance].",
    "thumbnail": "/daily28/hrcoordinators/hrcoordinators-employee-record-audit-2026-10-28.webp",
    "sections": [
      {
        "heading": "Select the sample by record group",
        "paragraphs": [
          "Include one onboarding record, one payroll or benefits record, one leave record, and one separation record. Record the sample rule and the roles [Source: U.S. Department of Labor workplace guidance].",
          "A sample of only active files will not test retention or disposal. Include one record approaching its review date."
        ]
      },
      {
        "heading": "Check access and location",
        "paragraphs": [
          "Record the approved location, the access group, the owner, and the last access review. A record in a personal drive is not a controlled record [Source: NIST Cybersecurity Framework].",
          "A legal hold or investigation changes the disposal path. Record the hold status and the legal owner."
        ]
      },
      {
        "heading": "Test the retention rule",
        "paragraphs": [
          "For each record, record the applicable rule, the review date, and the disposal evidence. Do not assume one rule applies to every record type [Source: SHRM records guidance].",
          "A record that passed its date without a review is an open item. It is not automatically disposable."
        ]
      },
      {
        "heading": "Report findings by cause",
        "paragraphs": [
          "Classify findings as missing owner, wrong location, access gap, rule gap, hold gap, or review date gap. Use the cause to decide whether the fix belongs to the template or the process [Source: SHRM records guidance].",
          "The audit is a local control, not a legal conclusion. Legal and compliance owners decide the applicable rule."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Labor workplace guidance",
        "url": "https://www.dol.gov/agencies/whd"
      },
      {
        "label": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "SHRM records guidance",
        "url": "https://www.shrm.org/topics-tools/"
      }
    ]
  }
];
