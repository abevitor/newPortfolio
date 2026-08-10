
import { Skill, Perk, Quest, InventoryItem, ProjectItem, Achievement } from './types';

export const SKILLS: Skill[] = [
  {
    id: 'java',
    name: 'Java',
    level: 9,
    description: "Linguagem orientada a objetos conhecida por sua robustez e portabilidade. Amplamente utilizada no desenvolvimento de aplicações e sistemas backend.",
    iconName: 'Code',
    logoUrl: 'images/226777.png'
  },
  {
    id: 'python',
    name: 'Python',
    level: 8,
    description: "Linguagem versátil e conhecida pela simplicidade e legibilidade. Muito utilizada em automação, análise de dados e desenvolvimento de aplicações.",
    iconName: 'Code',
    logoUrl: 'images/python-removebg-preview.png'
  },
  {
    id: 'aws',
    name: 'AWS',
    level: 9,
    description: "Plataforma de computação em nuvem com diversos serviços para infraestrutura e aplicações. Permite criar soluções escaláveis, seguras e flexíveis.",
    iconName: 'Plataform',
    logoUrl: 'images/aws.png'
  },
  {
    id: 'mySQL',
    name: 'mySQL',
    level: 8,
    description: "Sistema de gerenciamento de banco de dados relacional conhecido por desempenho e confiabilidade. Utilizado para armazenar e organizar dados de aplicações.",
    iconName: 'database',
    logoUrl: 'images/sql-removebg-preview (1).png'
  },
  {
    id: 'Springboot',
    name: 'Springboot',
    level: 7,
    description: "Framework Java para desenvolvimento de aplicações robustas e escaláveis. Facilita a criação de APIs REST e sistemas backend.",
    iconName: 'code',
    logoUrl: 'images/icons8-spring-boot-80.png'
  },
  {
    id: 'html',
    name: 'html',
    level: 6,
    description: "Linguagem de marcação essencial para estruturar páginas web. Define a organização e o conteúdo das interfaces digitais.",
    iconName: 'code',
    logoUrl: 'images/icons8-html-100.png'
  },
  {
    id: 'TailWind',
    name: 'TailWind',
    level: 7,
    description: "Framework CSS baseado em classes utilitárias para criação de interfaces modernas e responsivas. Facilita a estilização e permite desenvolver layouts de forma rápida e consistente.",
    iconName: 'code',
    logoUrl: 'images/css-icon-lg.png'
  }
];

export const PERKS: Perk[] = [
  {
    id: 'c-equitable',
    name: 'Equitable Elevation III',
    rank: 1,
    maxRank: 1,
    description: "Honorable Achievement Certificate recognizing dedication to equitable growth and elevation.",
    iconName: 'Award',
    issuer: 'Certopus',
    link: 'https://certopus.com/c/e32b60aec59244308869ed954e16d267'
  },
  {
    id: 'c-javascript',
    name: 'JavaScript (Basic)',
    rank: 1,
    maxRank: 1,
    description: "Certified competency in JavaScript language fundamentals, including functions, events, and error handling.",
    iconName: 'Code',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/559db4261ad4'
  },
  {
    id: 'c-react',
    name: 'React (Basic)',
    rank: 1,
    maxRank: 1,
    description: "Certified competency in React framework fundamentals, covering components, props, state, and lifecycle.",
    iconName: 'Atom',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/847db34c7fbe'
  },
  {
    id: 'p-fullstack',
    name: 'Full Stack Savant',
    rank: 3,
    maxRank: 3,
    description: "You are as comfortable in the DB as you are in CSS. +25% efficiency when working solo on projects.",
    iconName: 'Layers'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p-financeiro',
    title: 'Sistema financeiro',
    tech: ['Java', 'Springboot', 'MySQL', 'HTML', 'CSS'], 
    description: "Sistema full stack de controle financeiro pessoal.",
    link: 'https://github.com/abevitor/financeiro'
  },
  {
    id: 'p-java',
    title: 'Exercicios Java',
    tech: ['Java'],
    description: "Exercicios Java.",
    link: 'https://github.com/abevitor/JavaSAWS'
  },
  {
    id: 'p-gerenciador-de-tarefas',
    title: 'Gerenciador de Tarefas',
    tech: ['Java', 'Springboot', 'MySQL', 'CSS', 'HTML'],
    description: "Gerenciador de Tarefas pessoal.",
    link: 'https://github.com/abevitor/ToDoAPIRest'
  },
  {
    id: 'p-sudoku',
    title: 'Sudoku music player',
    tech: ['Java'],
    description: "Sudoku que toca música.",
    link: 'https://github.com/abevitor/sudoku'
  },  
  {
    id: 'p-login',
    title: 'Projeto Login',
    tech: ['Java', 'Springboot', 'CSS', 'HTML'],
    description: "Projeto Login.",
    link: 'https://github.com/abevitor/ApploginGit'
  },
   {
    id: 'p-crud',
    title: 'Projeto CRUD',
    tech: ['Java', 'Springboot', 'CSS', 'HTML'],
    description: "Projeto CRUD.",
    link: 'https://github.com/abevitor/JDBC_DIO'
  },
  
  {
    id: 'p-Docker',
    title: 'Projeto Docker',
    tech: ['Java', 'Docker'],
    description: "Projeto Docker.",
    link: 'https://github.com/abevitor/Docker_java'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a-hackcal',
    title: 'Grand Prize Winner',
    event: 'HackCal 2024',
    rank: '1st Place',
    date: '2024.02.15',
    description: "Awarded top honors for 'NeuroLink', a brain-computer interface simulator. Competed against 50+ teams."
  },
  {
    id: 'a-bearhack',
    title: 'Best UI/UX Design',
    event: 'BearHack 2023',
    rank: 'Special Category',
    date: '2023.11.10',
    description: "Recognized for exceptional interface design and user experience flow on 'Wasteland Map', a resource tracking app."
  },
  {
    id: 'a-calhacks',
    title: 'Competition Finalist',
    event: 'CalHacks 10.0',
    rank: 'Top 10',
    date: '2023.10.28',
    description: "Reached the finals with 'Pip-Boy-Web', an early prototype of this portfolio system."
  }
];

export const QUESTS: Quest[] = [
  {
    id: 'q-nexsoft',
    title: 'Android Developer',
    summary: 'PT Paramadaksa Teknologi Nusantara',
    description: "Contract role at nexSOFT. Responsible for analyzing FSDs and implementing Android solutions using Java. Coordinate with QC/QA for seamless testing and release preparation.",
    date: 'Jan 2024 - Present',
    status: 'active',
    steps: [
      { text: 'Analyze FSDs & Tech Solutions', completed: true },
      { text: 'Implement Change Requests (Java)', completed: true },
      { text: 'Coordinate w/ QA Teams', completed: true },
      { text: 'Release Prep & Regression Testing', completed: true }
    ]
  },
  {
    id: 'q-rumahsehat',
    title: 'Business System Dev',
    summary: 'Rumah Sehat',
    description: "Full-stack development for internal business systems. Managed requirements, design, and coding for sales, purchasing, and inventory modules.",
    date: 'Jul 2020 - Jan 2024',
    status: 'completed',
    steps: [
      { text: 'System Design (React, Node, Postgres)', completed: true },
      { text: 'Requirement Gathering & Analysis', completed: true },
      { text: 'Stock Reconciliation', completed: true },
      { text: 'Automate Weekly Invoicing (50+)', completed: true }
    ]
  },
  {
    id: 'q-matana',
    title: 'Information Systems',
    summary: 'Matana University',
    description: "Bachelor's degree in Management Information Systems. Graduated with a 3.85 GPA.",
    date: '2018 - 2022',
    status: 'completed',
    steps: [
      { text: 'Enterprise Resource Planning (ERP)', completed: true },
      { text: 'Relational Databases', completed: true },
      { text: 'Final Grade: 3.85', completed: true }
    ]
  }
];

export const ITEMS: InventoryItem[] = [
  {
    id: 'i-keyboard',
    name: 'Mech Keyboard',
    damage: 15,
    weight: 2,
    value: 150,
    description: "A rugged mechanical input device. Clicky switches cause +5 annoyance to nearby stealth units.",
    tags: ['Hardware', 'Input']
  },
  {
    id: 'i-coffee',
    name: 'Nuka-Caffeine',
    damage: 0,
    weight: 0.5,
    value: 20,
    description: "A glowing bottle of high-octane coffee. Restores 50 AP but reduces hydration.",
    tags: ['Aid', 'Consumable']
  }
];
