export interface LinkItem {
  title: string;
  body: string;
  href?: string;
}

export interface ServiceInfo {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  signs: string[];
  factors: string[];
  questions: LinkItem[];
}

export interface PageSection {
  kind: 'cards' | 'steps' | 'prose' | 'list' | 'faqs' | 'notice';
  heading: string;
  intro?: string;
  body?: string;
  items?: LinkItem[];
}

export interface ContentPage {
  eyebrow: string;
  title: string;
  lead: string;
  sections: PageSection[];
}

export const services: ServiceInfo[] = [
  {
    slug: 'anxiety',
    title: 'Anxiety & Stress',
    tagline: 'Calm the worry cycle',
    summary: 'Support for persistent worry, tension, panic-like experiences, avoidance, and feeling constantly on edge.',
    description: 'Anxiety can affect concentration, sleep, relationships, and the freedom to do everyday things. A clinician can help make sense of what is happening without reducing you to a label.',
    signs: ['Worry that feels difficult to control', 'Restlessness or feeling on edge', 'Racing heart, sweating, or shortness of breath', 'Difficulty concentrating', 'Avoiding situations that trigger fear', 'Irritability or muscle tension'],
    factors: ['Ongoing life pressure', 'Uncertainty or major change', 'Past frightening experiences', 'Sleep disruption', 'Health or relationship concerns', 'Individual biological vulnerability'],
    questions: [
      { title: 'Is occasional anxiety normal?', body: 'Yes. Anxiety is a common response to uncertainty. Support may help when it persists, feels hard to manage, or interferes with everyday life.' },
      { title: 'Does everyone need medication?', body: 'No. Options depend on the person and are discussed with a qualified clinician after an individual assessment.' }
    ]
  },
  {
    slug: 'depression',
    title: 'Depression & Low Mood',
    tagline: 'Make the next step feel possible',
    summary: 'Information and support for persistent low mood, reduced interest, low energy, hopelessness, or meaningful changes in daily functioning.',
    description: 'Low mood can make familiar routines feel unusually difficult. A compassionate conversation can help you explore what has changed and what kind of support may fit.',
    signs: ['Low mood that stays for much of the day', 'Less interest in activities or people', 'Changes in sleep, appetite, or energy', 'Difficulty concentrating or making decisions', 'Feeling worthless, guilty, or hopeless', 'Everyday responsibilities becoming harder'],
    factors: ['Life events or prolonged stress', 'Physical health and sleep', 'Isolation or relationship strain', 'Past experiences', 'Family history and biology', 'Several factors at the same time'],
    questions: [
      { title: 'When should I seek support?', body: 'Consider speaking with a professional when low mood persists, feels overwhelming, or starts affecting daily life.' },
      { title: 'Can support be different for each person?', body: 'Yes. A clinician can discuss options in light of your circumstances, preferences, and health history.' }
    ]
  },
  {
    slug: 'sleep',
    title: 'Sleep Problems',
    tagline: 'Build a healthier relationship with rest',
    summary: 'Support for difficulty falling asleep, staying asleep, waking too early, or feeling unrefreshed despite time in bed.',
    description: 'Sleep and wellbeing influence one another. Understanding the pattern around rest can help a clinician discuss practical and appropriate next steps.',
    signs: ['Taking a long time to fall asleep', 'Waking often or waking earlier than planned', 'Feeling unrefreshed after sleep', 'Worry about sleep affecting the next day', 'Daytime tiredness or reduced concentration', 'A changing sleep routine'],
    factors: ['Stress or changing routines', 'Physical health or medication effects', 'Environmental disruption', 'Irregular sleep timing', 'Mood and anxiety concerns', 'Other sleep-related conditions'],
    questions: [
      { title: 'Is one poor night a sleep problem?', body: 'Occasional changes are common. Ongoing sleep difficulty or effects on daily life may be worth discussing with a clinician.' },
      { title: 'Should I change medication on my own?', body: 'No. Discuss medication concerns with a qualified professional before making changes.' }
    ]
  },
  {
    slug: 'stress',
    title: 'Stress & Burnout',
    tagline: 'Recover without running on empty',
    summary: 'Support for pressure affecting energy, mood, sleep, relationships, or the ability to cope at work, study, or home.',
    description: 'Long stretches of pressure can make recovery feel out of reach. Support can help identify what is draining you and which changes are realistic now.',
    signs: ['Feeling exhausted even after rest', 'Growing distance from work or responsibilities', 'Irritability or reduced patience', 'Difficulty switching off', 'Changes in sleep or concentration', 'Feeling less effective than usual'],
    factors: ['Sustained workload or caregiving', 'Limited control or unclear expectations', 'Not enough recovery time', 'Financial or family pressures', 'Health and sleep changes', 'Several demands overlapping'],
    questions: [
      { title: 'Is burnout a personal failure?', body: 'No. Burnout can develop in response to prolonged demands and limited recovery. It deserves thoughtful attention.' },
      { title: 'Do I need to make a major life change?', body: 'Not necessarily. A clinician can help explore small, practical changes alongside wider options.' }
    ]
  },
  {
    slug: 'relationships',
    title: 'Relationship & Family Support',
    tagline: 'Create space for better conversations',
    summary: 'Support for couples, families, and individuals navigating conflict, distance, trust concerns, transitions, or repeated communication patterns.',
    description: 'Relationships can become difficult during change or when the same conversations keep ending in the same place. Support can make room for listening and clearer boundaries.',
    signs: ['Conversations often turn into conflict', 'Feeling distant or unheard', 'Trust has been affected', 'A family or life transition feels difficult', 'The same pattern keeps repeating', 'Uncertainty about boundaries or next steps'],
    factors: ['Changing roles or expectations', 'Stress outside the relationship', 'Different communication styles', 'Past hurt or unresolved conflict', 'Health, work, or family changes', 'Needs that are hard to express'],
    questions: [
      { title: 'Do both people need to attend?', body: 'It depends on the concern and the type of support. A clinician can discuss suitable options first.' },
      { title: 'Can I seek help on my own?', body: 'Yes. Individual support can help you understand your needs and possible next steps.' }
    ]
  },
  {
    slug: 'general',
    title: 'General Consultation',
    tagline: 'Start here when you are not sure',
    summary: 'A broad starting point when something feels wrong, several concerns overlap, or you want help deciding what kind of support may fit.',
    description: 'You do not need to arrive with a diagnosis or the perfect words. A first conversation can begin with what has been feeling difficult lately.',
    signs: ['Several concerns feel connected', 'You are unsure what kind of help to seek', 'Changes are affecting day-to-day life', 'You want a space to talk things through', 'You have questions about available care', 'You would like help choosing a next step'],
    factors: ['There is rarely one single explanation', 'Experiences can change over time', 'Physical and emotional health can interact', 'Support needs differ from person to person', 'Your preferences matter in care', 'It is okay to begin with uncertainty'],
    questions: [
      { title: 'Do I need to know what is wrong first?', body: 'No. You can begin by describing what you have noticed and what you would like help with.' },
      { title: 'What happens in a first conversation?', body: 'The clinician listens, asks relevant questions, and discusses appropriate next steps with you.' }
    ]
  }
];

export const assessments = [
  { slug: 'anxiety', title: 'Anxiety & Stress Check-in', category: 'Anxiety', time: 'About 2 minutes', body: 'Reflect on worry, tension, and how these experiences affect everyday life.' },
  { slug: 'depression', title: 'Low Mood Check-in', category: 'Mood', time: 'About 2 minutes', body: 'Reflect on mood, interest, energy, and everyday activities.' },
  { slug: 'sleep', title: 'Sleep Check-in', category: 'Sleep', time: 'About 2 minutes', body: 'Reflect on sleep patterns, rest, and daytime effects.' },
  { slug: 'stress', title: 'Stress & Burnout Check-in', category: 'Stress', time: 'About 2 minutes', body: 'Reflect on demands, energy, and opportunities to recover.' },
  { slug: 'relationships', title: 'Relationship Check-in', category: 'Relationships', time: 'About 2 minutes', body: 'Reflect on communication, connection, and relationship patterns.' },
  { slug: 'general', title: 'General Wellbeing Check-in', category: 'General', time: 'About 2 minutes', body: 'Reflect on changes in wellbeing and possible next steps.' }
];

export const careSteps = [
  { title: 'Explore Antara', body: 'Read about services, therapies, and self-checks without creating a public-site account.' },
  { title: 'Choose a next step', body: 'Try an optional reflection check-in, or review patient login, formal assessment, and appointment options.' },
  { title: 'Continue to HealthPlix', body: 'HealthPlix manages patient identity, consent, formal assessments, appointments, payments, prescriptions, and records.' },
  { title: 'Meet the care team', body: 'Your clinician reviews the appropriate information and discusses an individual plan.' },
  { title: 'Continue follow-up', body: 'Appointments and care records remain connected through the established patient application.' }
];

const contentPages: Record<string, ContentPage> = {
  services: {
    eyebrow: 'Clinically guided support',
    title: 'Find the support that fits',
    lead: 'Explore concerns and care options without creating an account. Personal details and appointments stay in the secure care system.',
    sections: [{ kind: 'cards', heading: 'Care for what life is asking of you', intro: 'Start with the concern closest to your experience. You do not need to have the perfect words.', items: services.map((service) => ({ title: service.title, body: `${service.tagline}. ${service.summary}`, href: `/services/${service.slug}` })) }]
  },
  therapies: {
    eyebrow: 'Ways of working together',
    title: 'Different approaches, one individual plan',
    lead: 'Therapy suitability is decided with a qualified professional. These introductions help explain approaches you may hear about during care.',
    sections: [{ kind: 'cards', heading: 'Approaches a clinician may discuss', items: [
      { title: 'Cognitive Behavioural Therapy', body: 'A structured approach exploring connections between thoughts, feelings, and actions.' },
      { title: 'Acceptance and Commitment Therapy', body: 'An approach focused on psychological flexibility, values, and meaningful action.' },
      { title: 'Dialectical Behaviour Therapy', body: 'Skills-based support for emotional regulation, distress tolerance, and relationships.' },
      { title: 'Trauma-Informed Support', body: 'Care that prioritizes safety, choice, pacing, and the impact of past experiences.' },
      { title: 'Couples and Family Therapy', body: 'Structured support for communication, conflict, transitions, and shared patterns.' },
      { title: 'Client-Centred Therapy', body: 'A collaborative approach grounded in empathy, respect, and your own goals.' }
    ] }]
  },
  assessments: {
    eyebrow: 'Preliminary self-checks',
    title: 'Understand the option before you begin',
    lead: 'These optional reflection check-ins help you organize your thoughts. They are not validated clinical assessments and do not diagnose a condition.',
    sections: [
      { kind: 'notice', heading: 'A check-in is not a diagnosis', body: 'These reflection questions are not clinically validated screening tools and do not replace an evaluation by a qualified professional. Answers stay in your current page session and are not saved or sent from this website.' },
      { kind: 'cards', heading: 'Choose a topic to explore', items: assessments.map((item) => ({ title: item.title, body: `${item.body} ${item.time}.`, href: `/assessments/${item.slug}` })) },
      { kind: 'prose', heading: 'Want to discuss your check-in?', body: 'You can use the total as a starting point when speaking with Dr. Kartheek. It is not a severity score or clinical recommendation. Verified contact and booking details will be added when available.' }
    ]
  },
  resources: {
    eyebrow: 'Guides and reading',
    title: 'Understand what you are experiencing',
    lead: 'Educational content can help you prepare for a conversation. It cannot diagnose a condition or replace professional care.',
    sections: [{ kind: 'cards', heading: 'Explore common concerns', items: [
      { title: 'Understanding persistent worry', body: 'Learn when ordinary worry may deserve more support.', href: '/services/anxiety' },
      { title: 'Low mood and loss of interest', body: 'Understand common signs and possible care pathways.', href: '/services/depression' },
      { title: 'When stress becomes burnout', body: 'Recognize patterns of overload, exhaustion, and reduced coping.', href: '/services/stress' },
      { title: 'Building healthier sleep', body: 'Explore why sleep difficulties can persist and how support may help.', href: '/services/sleep' }
    ] }]
  },
  howItWorks: {
    eyebrow: 'A clear path to care',
    title: 'Clear information here. Secure care there.',
    lead: 'Antara helps you understand your options. HealthPlix handles patient and health information.',
    sections: [
      { kind: 'steps', heading: 'A simple journey from understanding to care', items: careSteps },
      { kind: 'notice', heading: 'Keep formal care information secure', body: 'Reflection check-in answers are not saved or sent from this site. Formal assessment answers, diagnoses, prescriptions, payment information, patient IDs, and health records remain in HealthPlix.' }
    ]
  },
  about: {
    eyebrow: 'About Antara',
    title: 'Clinician-led information, connected care',
    lead: 'Antara helps people understand available support before continuing to the HealthPlix patient application.',
    sections: [
      { kind: 'prose', heading: 'An approach built on listening', body: 'A first conversation is a chance to talk about what brought you here and consider a next step together. It is not an interrogation, and you do not need to arrive with a diagnosis.' },
      { kind: 'notice', heading: 'Doctor credentials and clinic details', body: 'Dr. Kartheek Kutnani is a Neuro Psychotherapist. Qualifications, registrations, clinic details, and care availability will be published after verification by the clinic.' },
      { kind: 'cards', heading: 'What a first session can include', items: [
        { title: 'A conversation', body: 'Share what feels important in your own words and at a pace that works for you.' },
        { title: 'Understanding your needs', body: 'The clinician may ask about your experience, history, safety, and goals.' },
        { title: 'A considered next step', body: 'Discuss an individualized care approach and follow-up options.' }
      ] }
    ]
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Contact Dr. Kartheek Kutnani',
    lead: 'Questions before booking? Contact details will be added once verified. Please do not share assessment answers or medical records through ordinary contact channels.',
    sections: [
      { kind: 'notice', heading: 'Contact details are being confirmed', body: 'Verified phone, WhatsApp, clinic address, opening hours, and booking link for Dr. Kartheek Kutnani will appear here before launch.' },
      { kind: 'prose', heading: 'Book securely', body: 'Appointments are managed in HealthPlix. The booking link will be connected once the clinic provides its approved destination.' }
    ]
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'What to expect from Antara and HealthPlix',
    lead: 'A few clear answers about privacy, care, and where to go next.',
    sections: [{ kind: 'faqs', heading: 'Common questions', items: [
      { title: 'What information can I read without logging in?', body: 'You can explore public service, therapy, and self-check information without creating an account.' },
      { title: 'Where do assessments happen?', body: 'Optional reflection check-ins run in your current browser session and are not saved or sent. Formal clinical assessments, answers, and results are handled in HealthPlix.' },
      { title: 'Where do I book an appointment?', body: 'Appointments are managed securely through HealthPlix. The approved booking link will be added here.' },
      { title: 'Does Antara store medical records?', body: 'No. Login, appointments, payments, prescriptions, and health records remain in HealthPlix.' },
      { title: 'Is a self-check a diagnosis?', body: 'No. Self-checks are preliminary and do not replace an evaluation by a qualified clinician.' },
      { title: 'What should I do in a crisis?', body: 'Antara is not an emergency service. Call India emergency response at 112 or Tele-MANAS at 14416 for mental-health support.' }
    ] }]
  },
  crisis: {
    eyebrow: 'Immediate support',
    title: 'Use real-time help now',
    lead: 'Antara and routine HealthPlix booking are not emergency services. If you or someone else may be in immediate danger, do not wait for an online response.',
    sections: [
      { kind: 'cards', heading: 'Immediate help in India', items: [
        { title: 'Emergency response', body: 'Call India’s national emergency response number for immediate danger.', href: 'tel:112' },
        { title: 'Tele-MANAS', body: 'Government of India tele-mental-health support.', href: 'tel:14416' }
      ] },
      { kind: 'notice', heading: 'If you can, stay with someone you trust', body: 'If there is immediate danger, contact emergency services now. Crisis-resource availability should be reviewed by the clinical owner before launch.' }
    ]
  },
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    lead: 'How the public Antara website and HealthPlix remain separate. This draft requires legal review before publication.',
    sections: [
      { kind: 'prose', heading: 'Public-site data boundary', body: 'Antara offers optional, non-validated reflection questions and a simple frequency total in the current page session. Answers are not saved or sent from this website. Antara does not provide patient registration or clinical assessment; formal clinical assessments are handled in HealthPlix.' },
      { kind: 'prose', heading: 'HealthPlix', body: 'When you choose patient login, an assessment, or appointment booking, you continue to HealthPlix. Information entered there is governed by the applicable HealthPlix and clinic privacy notices.' },
      { kind: 'prose', heading: 'Public website operations', body: 'The website may process basic technical information required to deliver pages and protect the service. Sensitive-health advertising audiences and assessment-response tracking are not part of this design.' },
      { kind: 'prose', heading: 'Your choices', body: 'You may browse services and educational information without creating an Antara account. Any analytics or cookies must follow an approved consent configuration.' },
      { kind: 'notice', heading: 'Legal review required', body: 'Privacy contact, policy owner, retention details, jurisdictions, and review date must be supplied and approved before launch.' }
    ]
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of use',
    lead: 'Terms for using Antara as a public information website. This draft requires legal review before publication.',
    sections: [
      { kind: 'prose', heading: 'The service', body: 'Antara provides general information about mental-wellbeing services and therapies, plus optional non-diagnostic reflection check-ins. It does not provide treatment by itself.' },
      { kind: 'prose', heading: 'HealthPlix services', body: 'Patient login, consent, formal assessments, appointments, payments, prescriptions, and health records are provided through HealthPlix and are subject to applicable terms.' },
      { kind: 'prose', heading: 'No patient account', body: 'Antara does not create public-site patient accounts or save reflection check-in answers or totals.' },
      { kind: 'prose', heading: 'Acceptable use and changes', body: 'Do not interfere with the website, attempt unauthorized access, or misuse its content or external links. The final terms and review date require legal approval.' }
    ]
  },
  disclaimer: {
    eyebrow: 'Clinical information',
    title: 'Medical disclaimer',
    lead: 'Important limits of the information provided on Antara. This copy requires clinical and legal approval before publication.',
    sections: [
      { kind: 'prose', heading: 'Information, not diagnosis', body: 'Service descriptions and self-check introductions are educational. They do not diagnose a condition or replace an evaluation by a qualified clinician.' },
      { kind: 'prose', heading: 'Assessments', body: 'Antara reflection check-ins are not validated screening tools and their totals are not severity ratings. Formal assessments in HealthPlix should be clinically approved and interpreted through the HealthPlix care workflow.' },
      { kind: 'prose', heading: 'Treatment decisions', body: 'Medication, treatment, or crisis decisions should not be based solely on public website content. Consult an appropriately qualified professional.' },
      { kind: 'notice', heading: 'Not for emergencies', body: 'Antara is not monitored as an emergency service. If there is immediate danger, use emergency services now.' }
    ]
  },
  accessibility: {
    eyebrow: 'Accessibility',
    title: 'Access should not depend on how you browse',
    lead: 'Antara aims to make public information usable across devices, input methods, and assistive technologies.',
    sections: [
      { kind: 'list', heading: 'What we support', items: [
        { title: 'Keyboard navigation', body: 'Navigate interactive controls without a mouse.' },
        { title: 'Visible focus', body: 'A clear focus indicator shows which link or control is active.' },
        { title: 'Readable content', body: 'Semantic headings, meaningful labels, and responsive text support comprehension.' },
        { title: 'Reduced motion', body: 'Motion-sensitive preferences are respected.' }
      ] },
      { kind: 'notice', heading: 'Report an accessibility problem', body: 'A verified accessibility contact and audit date will be published before launch. Please do not include medical information in an accessibility report.' }
    ]
  },
  notFound: {
    eyebrow: '404',
    title: 'We could not find that page',
    lead: 'The address may have changed. You can return to the Antara homepage or browse services.',
    sections: [{ kind: 'cards', heading: 'Continue exploring', items: [
      { title: 'Antara home', body: 'Start again from the homepage.', href: '/' },
      { title: 'Services', body: 'Explore support options.', href: '/services' }
    ] }]
  }
};

export function getPage(key: string): ContentPage | undefined {
  return contentPages[key];
}