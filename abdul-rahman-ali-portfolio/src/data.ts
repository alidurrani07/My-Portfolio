import { Project, Service, Experience, ProcessStep, Skill, TimelineItem, Testimonial, FAQItem, StatItem } from './types';
import abdulRealPortrait from './assets/images/Ali.jpeg';

// Use the available local portrait asset for the portfolio hero section.
export const LEO_PORTRAIT_URL = abdulRealPortrait;
export const PROJECT_SAAS_URL = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&h=600&q=80'; // 3D/Gaming theme

export const PERSONAL_INFO = {
  name: 'Abdul Rahman Ali',
  title: 'Game Developer',
  role: 'Software Engineer & Unity Game Developer',
  tagline: 'Building immersive 3D experiences, advanced gameplay mechanics, and interactive virtual worlds.',
  bio: 'A passionate and motivated Game Developer with a Bachelor of Science in Software Engineering from COMSATS University Islamabad, Abbottabad Campus. Skilled in Unity game development using C#, with hands-on experience in designing gameplay systems, AI mechanics, and responsive player controls.',
  subBio: 'Currently expanding my expertise by learning Unreal Engine, shader programming, and custom physics pipelines. Seeking entry-level opportunities to contribute creativity and technical engineering to a professional game development team.',
  location: 'Abbottabad, Pakistan',
  languages: ['Pashto (Native)', 'Urdu (Native)', 'English (Professional)', 'Arabic (Basic)'],
  experienceYears: '1 Year',
  email: 'abdulrahmandurrani786@gmail.com',
  github: 'https://github.com/alidurrani07',
  linkedin: 'https://linkedin.com/in/abdul-rahman-ali-b4835a243/',
  instagram: 'https://instagram.com',
};

export const TRUSTED_COMPANIES = [
  { name: 'Unity', logoType: 'unity' },
  { name: 'Unreal Engine', logoType: 'unreal' },
  { name: 'GitHub', logoType: 'github' },
  { name: 'VS Code', logoType: 'vscode' },
  { name: 'Blender', logoType: 'blender' }
];

export const STATS: StatItem[] = [
  { id: 'exp', value: 1, label: 'Year Experience', suffix: '+' },
  { id: 'projects', value: 2, label: 'Game Projects Built', suffix: '' },
  { id: 'code', value: 500, label: 'Coding Hours', suffix: '+' },
  { id: 'playtest', value: 10, label: 'Satisfied Clients', suffix: '+' }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Shadow Reclaim 3D',
    category: 'Game',
    description: 'A fully playable third-person shooter (TPS) game prototype developed in Unity. Features responsive player locomotion, shooting mechanics, and pathfinding-based enemy AI.',
    tech: ['Unity 3D', 'C#', 'AI Pathfinding', 'Git'],
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=800&h=600&q=80',
    liveUrl: '#',
    githubUrl: 'https://github.com/alidurrani07'
  },
  {
    id: 'proj-2',
    title: 'Quantum Grid: Run',
    category: 'Game',
    description: 'A polished 3D endless runner gameplay prototype in Unity with modular procedural tile spawning, neon cyber-aesthetics, and highly optimized object pooling patterns.',
    tech: ['Unity 3D', 'C# Scripting', 'Custom Shaders', 'Blender'],
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&h=600&q=80',
    liveUrl: '#',
    githubUrl: 'https://github.com/alidurrani07'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Gameplay Programming',
    description: 'Writing clean, modular, and optimized C# scripts to handle player mechanics, third-person/first-person movement, camera states, and complex controls.',
    iconName: 'Terminal'
  },
  {
    id: 'srv-2',
    title: 'Game Design & Prototyping',
    description: 'Creating interactive prototypes, establishing game loops, designing player feedback systems, and laying out intuitive greybox levels to test mechanics early.',
    iconName: 'Palette'
  },
  {
    id: 'srv-3',
    title: 'Smart Enemy AI',
    description: 'Implementing custom Finite State Machines (FSMs), AI navigation mesh, sensory detection, and behavior trees for smart and challenging enemy behaviors.',
    iconName: 'Code'
  },
  {
    id: 'srv-4',
    title: 'Performance & Architecture',
    description: 'Following software engineering best practices, applying design patterns (e.g., Object Pooling), and profiling resource usage to maintain smooth frame rates.',
    iconName: 'Smartphone'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Mechanics Design & GDD',
    description: 'Outlining game mechanics, writing Game Design Documents (GDD), establishing player goals, and drafting clear gameplay flows.'
  },
  {
    step: '02',
    title: 'Rapid Prototyping',
    description: 'Scripting core mechanics using Unity/C#, designing greybox testing layouts, and iterating player controls for optimal game feel.'
  },
  {
    step: '03',
    title: 'System Integration & Playtesting',
    description: 'Integrating UI menus, standardizing audio triggers, building combat mechanics, profiling performance, and completing extensive playtesting.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Game Programmer (FYP)',
    company: 'Shadow Reclaim 3D Project Team',
    duration: '2025 - 2026',
    responsibilities: [
      'Engineered player movement, camera rigs, weapons combat systems, and health logic in Unity.',
      'Developed intelligent enemy AI pathfinding and shooting states using Unity AI navigation.',
      'Configured responsive gameplay canvas layouts, menus, and visual/audio event triggers.',
      'Managed repository version control, task distributions, and iterative project branch merges on GitHub.'
    ],
    tech: ['Unity', 'C#', 'NavMesh', 'GitHub', 'Blender'],
    logoText: 'SR'
  },
  {
    id: 'exp-2',
    role: 'Independent Game Creator',
    company: 'Self-Directed Learning & Exploration',
    duration: '2023 - Present',
    responsibilities: [
      'Designed and coded multiple responsive game templates including 2D platformer physics and endless runners.',
      'Created custom 3D low-poly models, textures, and interactive environments using Blender.',
      'Studied and applied clean software design patterns like Object Pooling, Singletons, and Observer patterns.'
    ],
    tech: ['Unity', 'C#', 'Blender', 'VS Code', 'Git'],
    logoText: 'IG'
  }
];

export const RESUME_TIMELINE: TimelineItem[] = [
  {
    id: 'res-1',
    year: '2022 - 2026',
    title: 'Bachelor of Science in Software Engineering (BSE)',
    institution: 'COMSATS University Islamabad, Abbottabad Campus',
    achievements: [
      'Studied core software engineering principles, Object-Oriented Programming, Data Structures, and Software Architecture.',
      'Developed and delivered a fully functioning 3D Third-Person Shooter game (Shadow Reclaim 3D) for the Final Year Project.'
    ]
  },
  {
    id: 'res-2',
    year: '2020 - 2022',
    title: 'Intermediate in Computer Science (ICS)',
    institution: 'Army Public College Abbottabad',
    achievements: [
      'Graduated with honors, focusing on Mathematics, Physics, and Computer Science.',
      'Formed solid programming foundations using C++ and algorithmic designs.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Sajjad Ahmed',
    role: 'FYP Supervisor & Professor',
    company: 'COMSATS University Islamabad',
    review: 'Abdul Rahman demonstrated an outstanding grasp of Unity gameplay programming and modular C# scripting during his final year project. He possesses a strong software engineering foundation and a real passion for interactive systems.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    companyLogo: 'Google'
  },
  {
    id: 'test-2',
    name: 'Ali Raza',
    role: 'FYP Team Collaborator',
    company: 'Shadow Reclaim 3D',
    review: 'Working alongside Abdul Rahman was brilliant. His proficiency in code organization, Git workflow management, and solving complex physics bugs kept our development process moving fast and smoothly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    companyLogo: 'Stripe'
  },
  {
    id: 'test-3',
    name: 'Zainab Bibi',
    role: 'Game Artist / Student Colleague',
    company: 'COMSATS Abbottabad',
    review: 'Abdul Rahman is a developer who truly respects creative vision. He integrated 3D assets, animations, and UI art with great attention to detail, making the visual gameplay feel highly satisfying and polished.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    companyLogo: 'Vercel'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is your primary game development toolset?',
    answer: 'My primary game engine is Unity with C# scripting. I am also currently expanding my skill set by learning Unreal Engine 5 to master AAA-standard blueprint scripting and high-fidelity rendering pipelines.'
  },
  {
    id: 'faq-2',
    question: 'Are you open to relocation or remote work?',
    answer: 'Yes, absolutely! I am currently based in Abbottabad, Pakistan, but I am fully open to relocating for on-site positions globally, or collaborating seamlessly in professional remote development team environments.'
  },
  {
    id: 'faq-3',
    question: 'Can you describe your final year project "Shadow Reclaim 3D"?',
    answer: 'It is a third-person shooter game developed in Unity. I authored the core systems including character locomotion with dynamic camera states, raycast-based shooting mechanics, health managers, and AI enemies that use pathfinding meshes to seek, patrol, and engage players.'
  },
  {
    id: 'faq-4',
    question: 'Which programming languages do you work with?',
    answer: 'My primary and strongest programming language is C# for Unity engine code. I am also highly proficient in C and C++ (especially for low-level systems and engine-level engineering), and have solid experience writing helper scripts in Python.'
  },
  {
    id: 'faq-5',
    question: 'How can studios get in touch with you?',
    answer: 'You can scroll down and fill out the secure contact form on this website to describe your job vacancy or project requirements, or email me directly at abdulrahmandurrani786@gmail.com. I typically respond within 24 hours!'
  }
];

export const SKILLS: Skill[] = [
  // Game Development
  { name: 'Unity Engine', percentage: 90, category: 'Game Development' },
  { name: 'C# Programming', percentage: 92, category: 'Game Development' },
  { name: 'Unreal Engine', percentage: 50, category: 'Game Development' },
  { name: 'Blender 3D Modelling', percentage: 70, category: 'Game Development' },

  // Programming
  { name: 'C / C++', percentage: 80, category: 'Backend' },
  { name: 'Python', percentage: 75, category: 'Backend' },
  
  // Tools & Collaboration
  { name: 'Git & GitHub', percentage: 88, category: 'Cloud' },
  { name: 'VS Code & VS Studio', percentage: 95, category: 'Database' },
  
  // Software Engineering Core
  { name: 'OOP & Data Structures', percentage: 88, category: 'Frontend' },
  { name: 'Software Architecture', percentage: 82, category: 'Frontend' },
  { name: 'Team Collaboration', percentage: 95, category: 'Design' }
];
