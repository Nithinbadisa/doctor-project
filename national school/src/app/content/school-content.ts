export interface SchoolHighlight {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const schoolProfile = {
  name: 'National School',
  locality: 'Vidyadharpuram',
  city: 'Vijayawada',
  state: 'Andhra Pradesh',
  mapSearchUrl: 'https://www.google.com/maps/search/?api=1&query=National+School+Vidyadharpuram+Vijayawada'
};

export const learningPrinciples: SchoolHighlight[] = [
  {
    eyebrow: 'Strong foundations',
    title: 'Build confidence step by step',
    description: 'A real classroom moment at National School.',
    image: '/images/classroom.jpg',
    imageAlt: 'Students and a teacher in a National School classroom'
  },
  {
    eyebrow: 'Curiosity in action',
    title: 'Care for the place you learn',
    description: 'Students take part in a tree-planting activity at school.',
    image: '/images/tree-planting.jpg',
    imageAlt: 'National School students holding young plants'
  },
  {
    eyebrow: 'Care and belonging',
    title: 'A warm welcome to school',
    description: 'A handmade welcome display greets students and families.',
    image: '/images/welcome-display.jpg',
    imageAlt: 'Colourful handmade welcome display at National School'
  }
];

export const schoolLife: SchoolHighlight[] = [
  {
    eyebrow: 'Celebrate',
    title: 'Share a moment with classmates',
    description: 'Students gather for a classroom celebration.',
    image: '/images/school-celebration.jpg',
    imageAlt: 'National School students gathered for a classroom birthday celebration'
  },
  {
    eyebrow: 'Care',
    title: 'Grow something together',
    description: 'Students take part in a tree-planting activity.',
    image: '/images/tree-planting.jpg',
    imageAlt: 'Students holding plants during a school activity'
  },
  {
    eyebrow: 'Learn',
    title: 'Every day begins in the classroom',
    description: 'Students and teacher together during a classroom lesson.',
    image: '/images/classroom.jpg',
    imageAlt: 'A teacher with students in a National School classroom'
  }
];

export const admissionsSteps = [
  { number: '01', title: 'Start a conversation', description: 'Ask the school about current admissions and the classes that may be available.' },
  { number: '02', title: 'Share what you need', description: 'Discuss your child’s learning stage and any questions your family has.' },
  { number: '03', title: 'Confirm the next steps', description: 'The school office can guide you on visits, documents, timelines, and fees.' }
];

export interface InformationSection {
  title: string;
  body: string;
  points?: string[];
}

export interface InformationPage {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: InformationSection[];
}

export const informationPages: Record<string, InformationPage> = {
  about: {
    eyebrow: 'About National School',
    title: 'A school community in Vijayawada',
    introduction: 'National School is in Vidyadharpuram, Vijayawada. This is the starting point for families looking to learn about the school, its approach, and the next steps for admission.',
    sections: [
      { title: 'Learning and growing', body: 'A supportive school experience gives students a strong foundation, encourages questions, and helps them take increasing ownership of their learning.' },
      { title: 'A partnership with families', body: 'Choosing a school is a family decision. Conversations about a child’s stage, interests, and needs help families understand whether a school is the right fit.' },
      { title: 'Get to know the school', body: 'For verified information about the school’s history, leadership, curriculum, facilities, and daily routines, contact or visit the school directly.' }
    ]
  },
  academics: {
    eyebrow: 'Learning at National School',
    title: 'Strong foundations for what comes next',
    introduction: 'Every learner benefits from clear teaching, regular practice, thoughtful feedback, and the chance to connect classroom ideas with the world around them.',
    sections: [
      { title: 'Build the essentials', body: 'Reading, writing, numeracy, communication, and problem-solving help students participate confidently across subjects.' },
      { title: 'Learn by connecting ideas', body: 'Questions, discussion, and practical examples can help learners understand why new ideas matter, not only what to remember.' },
      { title: 'Ask about the academic programme', body: 'Please confirm the board, class levels, teaching languages, assessment pattern, and academic calendar with the school before making a decision.' }
    ]
  },
  studentLife: {
    eyebrow: 'Student life',
    title: 'Growing beyond the classroom',
    introduction: 'School is also a place to build friendships, practise independence, discover interests, and learn how to contribute to a community.',
    sections: [
      { title: 'Curiosity and creativity', body: 'Making, reading, asking questions, and sharing ideas give students different ways to engage with what they learn.' },
      { title: 'Movement and teamwork', body: 'Play and physical activity can help children practise cooperation, confidence, and care for one another.' },
      { title: 'A day that fits your child', body: 'Ask the school about its current clubs, activities, sports, wellbeing support, transport, and daily timetable.' }
    ]
  },
  admissions: {
    eyebrow: 'Admissions',
    title: 'Find the right next step for your family',
    introduction: 'Admission availability and requirements can change by class and school year. Contact the school to get current, accurate guidance before preparing documents or making plans.',
    sections: [
      { title: 'Ask about availability', body: 'Check whether applications are being accepted for the class and year you are considering.' },
      { title: 'Understand the requirements', body: 'Confirm age criteria, documents, application steps, assessment or meeting requirements, and any applicable fees directly with the school.' },
      { title: 'Plan a visit', body: 'A conversation or visit can help you understand the environment and ask questions that matter to your child and family.' }
    ]
  },
  contact: {
    eyebrow: 'Contact and location',
    title: 'Visit National School',
    introduction: 'National School is located in Vidyadharpuram, Vijayawada, Andhra Pradesh. Use the map search to find the school and confirm the exact route before travelling.',
    sections: [
      { title: 'School location', body: 'Vidyadharpuram, Vijayawada, Andhra Pradesh.' },
      { title: 'Before you visit', body: 'Please confirm office hours and the correct campus entrance with the school. A verified phone number, email address, and full street address can be added when provided.' }
    ]
  }
};
