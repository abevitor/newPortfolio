import { Perk, Quest, InventoryItem, ProjectItem, Achievement } from './types';

export const PERKS: Perk[] = [
  {
    id: 'enlish',
    name: { pt: 'Proficiência na língua inglesa', eng: 'enlish Proficiency' },
    rank: 3,
    maxRank: 5,
    description: {
      pt: "Leitura técnica e comunicação em nível avançado, com fluência em desenvolvimento.",
      eng: "Advanced-level technical reading and communication, with fluency in development."
    },
    iconName: 'MessageCircleMore',
  },
  {
    id: 'self-learning',
    name: { pt: 'Aprendizado Contínuo', eng: 'Continuous Learning' },
    rank: 4,
    maxRank: 5,
    description: {
      pt: "Facilidade em absorver novas tecnologias e frameworks de forma autodidata.",
      eng: "Quick to pick up new technologies and frameworks through self-study."
    },
    iconName: 'Glasses',
  },
  {
    id: 'teamwork',
    name: { pt: 'Trabalho em equipe', eng: 'Teamwork' },
    rank: 3,
    maxRank: 5,
    description: {
      pt: "Experiência colaborando em projetos de grupo.",
      eng: "Experience collaborating on group projects."
    },
    iconName: 'Handshake',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p-financeiro',
    title: { pt: 'Sistema financeiro', en: 'Financial System' },
    tech: ['Java', 'Springboot', 'MySQL', 'HTML', 'CSS'],
    description: {
      pt: "Sistema full stack de controle financeiro pessoal.",
      en: "Full stack personal finance management system."
    },
    link: 'https://github.com/abevitor/financeiro'
  },
  {
    id: 'p-java',
    title: { pt: 'Exercícios Java', en: 'Java Exercises' },
    tech: ['Java'],
    description: {
      pt: "Exercícios Java.",
      en: "Java exercises."
    },
    link: 'https://github.com/abevitor/JavaSAWS'
  },
  {
    id: 'p-gerenciador-de-tarefas',
    title: { pt: 'Gerenciador de Tarefas', en: 'Task Manager' },
    tech: ['Java', 'Springboot', 'MySQL', 'CSS', 'HTML'],
    description: {
      pt: "Gerenciador de Tarefas pessoal.",
      en: "Personal task manager."
    },
    link: 'https://github.com/abevitor/ToDoAPIRest'
  },
  {
    id: 'p-sudoku',
    title: { pt: 'Sudoku music player', en: 'Sudoku Music Player' },
    tech: ['Java'],
    description: {
      pt: "Sudoku que toca música.",
      en: "Sudoku that plays music."
    },
    link: 'https://github.com/abevitor/sudoku'
  },
  {
    id: 'p-login',
    title: { pt: 'Projeto Login', en: 'Login Project' },
    tech: ['Java', 'Springboot', 'CSS', 'HTML'],
    description: {
      pt: "Projeto Login.",
      en: "Login project."
    },
    link: 'https://github.com/abevitor/ApploginGit'
  },
  {
    id: 'p-crud',
    title: { pt: 'Projeto CRUD', en: 'CRUD Project' },
    tech: ['Java', 'Springboot', 'CSS', 'HTML'],
    description: {
      pt: "Projeto CRUD.",
      en: "CRUD project."
    },
    link: 'https://github.com/abevitor/JDBC_DIO'
  },
  {
    id: 'p-Docker',
    title: { pt: 'Projeto Docker', en: 'Docker Project' },
    tech: ['Java', 'Docker'],
    description: {
      pt: "Projeto Docker.",
      en: "Docker project."
    },
    link: 'https://github.com/abevitor/Docker_java'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'Bootcamp-DIO',
    title: { pt: 'Conclusão BootCamp DIO JAVA', en: 'DIO Java Bootcamp Completion' },
    event: { pt: 'BootCamp DIO', en: 'DIO Bootcamp' },
    date: {pt: '13.08.2025', en: '08.13.2025'},
    description: {
      pt: "Finalização do BootCamp com carga horária de 71 horas.",
      en: "Completion of the Bootcamp with a workload of 71 hours."
    },
    pdfUrl: `${import.meta.env.BASE_URL}components/certificados/Bootcamp completo.pdf`
  },
  {
    id: 'certificado-fiap',
    title: { pt: 'Certificado FIAP JAVA', en: 'FIAP Java Certificate' },
    event: { pt: 'Cursos FIAP', en: 'FIAP Courses' },
    date: {pt: '19.05.2025', en: '05.19.2025'},
    description: {
      pt: "Finalização do curso de Java da FIAP com carga horária de 60 horas.",
      en: "Completion of the FIAP Java course with a workload of 60 hours."
    },
    pdfUrl: `${import.meta.env.BASE_URL}components/certificados/fiap.pdf`
  },
  {
    id: 'Cyberseguranca-CISCO',
    title: { pt: 'Certificado CyberSegurança básica pela CISCO', en: 'CISCO Basic Cybersecurity Certificate' },
    event: { pt: 'Cisco Academy', en: 'Cisco Academy' },
    date: {pt: '2025', en: '2025'},
    description: {
      pt: "Finalização do curso de Introdução a CyberSegurança pela CISCO.",
      en: "Completion of the Introduction to Cybersecurity course by CISCO."
    },
    pdfUrl: `${import.meta.env.BASE_URL}components/certificados/I2CSUpdate20250220-28-paz4p2.pdf`
  },
  {
    id: 'AWS-DIO',
    title: { pt: 'Fundamentos de Cloud com AWS', en: 'AWS Cloud Fundamentals' },
    event: { pt: 'Cursos DIO', en: 'DIO Courses' },
    date: {pt: '24.07.2026', en:  '07.24.2026'},
    description: {
      pt: "Finalização do curso de fundamentos de Cloud com AWS pela DIO com carga horária de 48 horas.",
      en: "Completion of the AWS Cloud Fundamentals course by DIO with a workload of 48 hours."
    },
    pdfUrl: `${import.meta.env.BASE_URL}components/certificados/AWS_FINAL.pdf`
  },
  {
    id: 'artigo-IA',
    title: { pt: 'IA como ferramenta de insegurança', en: 'AI as a Tool of Insecurity' },
    event: { pt: 'FATECLOG', en: 'FATECLOG' },
    date: {pt:'2026', en:'2026'},
    description: {
      pt: "Investiga como a Inteligência Artificial transforma a segurança privada via PLN: benefícios como automação, agilidade na análise de dados e apoio à decisão, e limites como ironia, contexto cultural, vieses e impacto no mercado de trabalho — com foco no uso ético de PLNs e IAs.",
      en: "Investigates how Artificial Intelligence transforms private security through NLP: benefits like automation, faster data analysis and decision support, and limitations like irony, cultural context, bias and job market impact — with a focus on the ethical use of NLPs and AI."
    }
  }
];

export const QUESTS: Quest[] = [
  {
    id: 'q-fatec-monitor',
    title: { pt: 'Monitor Sala ADA', en: 'ADA Lab Monitor' },
    summary: { pt: 'FATEC - Carapicuíba', en: 'FATEC - Carapicuíba' },
    description: {
      pt: "Suporte técnico e infraestrutura de TI, atendendo usuários e mantendo os equipamentos do laboratório em funcionamento.",
      en: "Technical support and IT infrastructure, assisting users and keeping lab equipment running smoothly."
    },
    date: 'Ago 2025 - Dez 2025',
    status: 'completed',
    steps: [
      {
        text: {
          pt: 'Suporte técnico a usuários e manutenção de equipamentos',
          en: 'User technical support and equipment maintenance'
        },
        completed: true
      },
      {
        text: {
          pt: 'Diagnóstico de falhas e substituição de componentes',
          en: 'Fault diagnosis and component replacement'
        },
        completed: true
      },
      {
        text: {
          pt: 'Formatação, instalação e configuração de SO e softwares',
          en: 'OS and software formatting, installation and configuration'
        },
        completed: true
      },
      {
        text: {
          pt: 'Montagem e manutenção de redes (crimpagem RJ45, keystones)',
          en: 'Network setup and maintenance (RJ45 crimping, keystones)'
        },
        completed: true
      },
      {
        text: {
          pt: 'Criação de mídias bootáveis com Ventoy',
          en: 'Creation of bootable media with Ventoy'
        },
        completed: true
      }
    ]
  },
  {
    id: 'q-fateclog',
    title: { pt: 'Artigo Acadêmico - FATECLOG', en: 'Academic Paper - FATECLOG' },
    summary: { pt: 'XVI FATECLOG 2025', en: 'XVI FATECLOG 2025' },
    description: {
      pt: "Investiga como a Inteligência Artificial transforma a segurança privada via PLN: benefícios como automação e agilidade na análise de dados, e limites como vieses e impacto no mercado de trabalho, com foco no uso ético de IAs.",
      en: "Investigates how Artificial Intelligence transforms private security through NLP: benefits like automation and faster data analysis, and limitations like bias and job market impact, with a focus on the ethical use of AI."
    },
    date: '2025',
    status: 'completed',
    steps: [
      {
        text: {
          pt: 'Pesquisa e revisão bibliográfica sobre IA e PLN',
          en: 'Research and literature review on AI and NLP'
        },
        completed: true
      },
      {
        text: {
          pt: 'Redação do artigo científico',
          en: 'Writing of the scientific paper'
        },
        completed: true
      },
      {
        text: {
          pt: 'Apresentação no XVI FATECLOG',
          en: 'Presentation at XVI FATECLOG'
        },
        completed: true
      },
      {
        text: {
          pt: 'Nota máxima na avaliação',
          en: 'Highest grade in the evaluation'
        },
        completed: true
      }
    ]
  },
  {
    id: 'q-fatec-ads',
    title: { pt: 'Análise e Desenvolvimento de Sistemas', en: 'Systems Analysis and Development' },
    summary: { pt: 'FATEC - Carapicuíba', en: 'FATEC - Carapicuíba' },
    description: {
      pt: "Formação superior em ADS, com foco em desenvolvimento back-end em Java, programação orientada a objetos e boas práticas de enenharia de software.",
      en: "Bachelor's degree in Systems Analysis and Development, focused on Java back-end development, object-oriented programming and software enineering best practices."
    },
    date: '2023 - 2027',
    status: 'active',
    steps: [
      {
        text: { pt: 'Programação Orientada a Objetos', en: 'Object-Oriented Programming' },
        completed: true
      },
      {
        text: { pt: 'APIs REST e Spring Boot', en: 'REST APIs and Spring Boot' },
        completed: true
      },
      {
        text: { pt: 'Sistemas Operacionais', en: 'Operating Systems' },
        completed: true
      },
      {
        text: { pt: 'enenharia de Software', en: 'Software enineering' },
        completed: true
      },
      {
        text: { pt: 'Lógica de Programação', en: 'Programming Logic' },
        completed: true
      },
      {
        text: { pt: 'Banco de Dados (MySQL)', en: 'Databases (MySQL)' },
        completed: true
      },
      {
        text: { pt: 'Conclusão prevista para 2027', en: 'Expected graduation in 2027' },
        completed: false
      }
    ]
  }
];

export const ITEMS: InventoryItem[] = [
  // =========================================================
  // WEAPONS
  // =========================================================

  {
    id: 'java',
    category: 'WEAPONS',

    name: {
      pt: 'Java',
      en: 'Java'
    },

    type: {
      pt: 'Linguagem de Programação',
      en: 'Programming Language'
    },

    level: 90,

    description: {
      pt: 'Principal linguagem utilizada no desenvolvimento backend. Utilizada na criação de APIs REST, aplicações orientadas a objetos e sistemas robustos.',

      en: 'Main language used for backend development. Used to build REST APIs, object-oriented applications and robust systems.'
    },

    iconName: 'Code2',

    logoUrl: `${import.meta.env.BASE_URL}images/226777.png`,

    projects: {
      pt: [
        'Sudoku',
        'Exercícios Java',
        
      ],

      en: [
        'Sudoku',
        'Java Exersices'
      ]
    },

    abilities: {
      pt: [
        'Programação Orientada a Objetos',
        'APIs REST',
        'Collections',
        'Stream API',
        'Tratamento de Exceções'
      ],

      en: [
        'Object-Oriented Programming',
        'REST APIs',
        'Collections',
        'Stream API',
        'Exception Handling'
      ]
    },

    status: {
      pt: 'MASTERED',
      en: 'MASTERED'
    }
  },

  {
    id: 'spring-boot',
    category: 'WEAPONS',

    name: {
      pt: 'Spring Boot',
      en: 'Spring Boot'
    },

    type: {
      pt: 'Framework Backend',
      en: 'Backend Framework'
    },

    level: 80,

    description: {
      pt: 'Framework utilizado para desenvolvimento de aplicações backend e APIs REST em Java, com recursos para segurança, persistência e organização da aplicação.',

      en: 'Framework used to develop Java backend applications and REST APIs, with features for security, persistence and application organization.'
    },

    iconName: 'Server',

    logoUrl: `${import.meta.env.BASE_URL}images/icons8-spring-boot-80.png`,

    projects: {
      pt: [
        'ToDo API',
        'Financeiro',
        'Projeto Login'
      ],

      en: [
        'ToDo API',
        'Finances',
        'Login Project'
      ]
    },

    abilities: {
      pt: [
        'Spring Data JPA',
        'Spring Security',
        'JWT',
        'APIs REST',
        'Injeção de Dependência'
      ],

      en: [
        'Spring Data JPA',
        'Spring Security',
        'JWT',
        'REST APIs',
        'Dependency Injection'
      ]
    },

    status: {
      pt: 'MASTERED',
      en: 'MASTERED'
    }
  },

  {
    id: 'python',
    category: 'WEAPONS',

    name: {
      pt: 'Python',
      en: 'Python'
    },

    type: {
      pt: 'Linguagem de Programação',
      en: 'Programming Language'
    },

    level: 50,

    description: {
      pt: 'Linguagem utilizada para automação, desenvolvimento de aplicações e experimentação com Inteligência Artificial.',

      en: 'Language used for automation, application development and experimentation with Artificial Intelligence.'
    },

    iconName: 'Code2',

    logoUrl: `${import.meta.env.BASE_URL}images/python-removebg-preview.png`,

    projects: {
      pt: [
        'Experimentos com IA'
      ],

      en: [
        'AI experiments'
      ]
    },

    abilities: {
      pt: [
        'Automação',
        'Programação',
        'Integração com APIs'
      ],

      en: [
        'Automation',
        'Programming',
        'API integration'
      ]
    },

    status: {
      pt: 'ADVANCED',
      en: 'ADVANCED'
    }
  },

  {
    id: 'typescript',
    category: 'WEAPONS',

    name: {
      pt: 'TypeScript',
      en: 'TypeScript'
    },

    type: {
      pt: 'Linguagem de Programação',
      en: 'Programming Language'
    },

    level: 10,

    description: {
      pt: 'Superset do JavaScript utilizado neste próprio projeto para adicionar tipagem estática e maior segurança ao desenvolvimento.',

      en: 'JavaScript superset used in this project to provide static typing and safer development.'
    },

    iconName: 'Braces',

    projects: {
      pt: [
        'Pip-Boy Portfolio'
      ],

      en: [
        'Pip-Boy Portfolio'
      ]
    },

    abilities: {
      pt: [
        'Tipagem estática',
        'Interfaces',
        'Generics'
      ],

      en: [
        'Static typing',
        'Interfaces',
        'Generics'
      ]
    },

    status: {
      pt: 'ADVANCED',
      en: 'ADVANCED'
    }
  },

  // =========================================================
  // APPAREL
  // =========================================================

  {
    id: 'react',
    category: 'APPAREL',

    name: {
      pt: 'React',
      en: 'React'
    },

    type: {
      pt: 'Biblioteca Frontend',
      en: 'Frontend Library'
    },

    level: 20,

    description: {
      pt: 'Biblioteca utilizada para construção de interfaces componentizadas e interativas.',

      en: 'Library used to build component-based and interactive user interfaces.'
    },

    iconName: 'Atom',

    logoUrl: `${import.meta.env.BASE_URL}images/react_icon_130845-removebg-preview.png`,

    projects: {
      pt: [
        'Pip-Boy Portfolio'
      ],

      en: [
        'Pip-Boy Portfolio'
      ]
    },

    abilities: {
      pt: [
        'Componentes',
        'Hooks',
        'State Management'
      ],

      en: [
        'Components',
        'Hooks',
        'State Management'
      ]
    },

    status: {
      pt: 'LEARNING',
      en: 'LEARNING'
    }
  },

  {
    id: 'html',
    category: 'APPAREL',

    name: {
      pt: 'HTML',
      en: 'HTML'
    },

    type: {
      pt: 'Linguagem de Marcação',
      en: 'Markup Language'
    },

    level: 60,

    description: {
      pt: 'Tecnologia utilizada para estruturar páginas e aplicações web.',

      en: 'Technology used to structure web pages and web applications.'
    },

    iconName: 'Code2',

    logoUrl: `${import.meta.env.BASE_URL}images/icons8-html-100.png`,

    projects: {
      pt: [
        'Projetos Web',
        'Portfólio'
      ],

      en: [
        'Web Projects',
        'Portfolio'
      ]
    },

    abilities: {
      pt: [
        'Estrutura semântica',
        'Formulários',
        'Acessibilidade'
      ],

      en: [
        'Semantic structure',
        'Forms',
        'Accessibility'
      ]
    },

    status: {
      pt: 'ADVANCED',
      en: 'ADVANCED'
    }
  },

  {
    id: 'tailwind',
    category: 'APPAREL',

    name: {
      pt: 'Tailwind CSS',
      en: 'Tailwind CSS'
    },

    type: {
      pt: 'Framework CSS',
      en: 'CSS Framework'
    },

    level: 70,

    description: {
      pt: 'Framework baseado em classes utilitárias utilizado para construir interfaces modernas e responsivas.',

      en: 'Utility-class-based CSS framework used to build modern and responsive interfaces.'
    },

    iconName: 'Palette',

    logoUrl: `${import.meta.env.BASE_URL}images/icons8-tailwind-css-96.png`,

    projects: {
      pt: [
        'Pip-Boy Portfolio'
      ],

      en: [
        'Pip-Boy Portfolio'
      ]
    },

    abilities: {
      pt: [
        'Design Responsivo',
        'Utility Classes',
        'Dark Themes'
      ],

      en: [
        'Responsive Design',
        'Utility Classes',
        'Dark Themes'
      ]
    },

    status: {
      pt: 'ADVANCED',
      en: 'ADVANCED'
    }
  },

  // =========================================================
  // AID
  // =========================================================

  {
    id: 'git',
    category: 'AID',

    name: {
      pt: 'Git',
      en: 'Git'
    },

    type: {
      pt: 'Controle de Versão',
      en: 'Version Control'
    },

    level: 45,

    description: {
      pt: 'Sistema de controle de versão utilizado para acompanhar alterações, organizar branches e manter o histórico dos projetos.',

      en: 'Version control system used to track changes, organize branches and maintain project history.'
    },

    iconName: 'GitBranch',

    projects: {
      pt: [
        'Projetos acadêmicos',
        'Projetos pessoais'
      ],

      en: [
        'Academic projects',
        'Personal projects'
      ]
    },

    abilities: {
      pt: [
        'Commits',
        'Branches',
        'Merge',
        'GitHub'
      ],

      en: [
        'Commits',
        'Branches',
        'Merge',
        'GitHub'
      ]
    },

    status: {
      pt: 'ADVANCED',
      en: 'ADVANCED'
    }
  },

  {
    id: 'github',
    category: 'AID',

    name: {
      pt: 'GitHub',
      en: 'GitHub'
    },

    type: {
      pt: 'Plataforma de Desenvolvimento',
      en: 'Development Platform'
    },

    level: 60,

    description: {
      pt: 'Plataforma utilizada para hospedagem dos projetos, versionamento e colaboração.',

      en: 'Platform used for project hosting, version control and collaboration.'
    },

    iconName: 'Github',

    projects: {
      pt: [
        'Pip-Boy Portfolio',
        'Projetos Java'
      ],

      en: [
        'Pip-Boy Portfolio',
        'Java Projects'
      ]
    },

    abilities: {
      pt: [
        'Repositories',
        'Pull Requests',
        'Versionamento'
      ],

      en: [
        'Repositories',
        'Pull Requests',
        'Version Control'
      ]
    },

    status: {
      pt: 'ADVANCED',
      en: 'ADVANCED'
    }
  },

  {
    id: 'mysql',
    category: 'AID',

    name: {
      pt: 'MySQL',
      en: 'MySQL'
    },

    type: {
      pt: 'Banco de Dados',
      en: 'Database'
    },

    level: 40,

    description: {
      pt: 'Sistema de gerenciamento de banco de dados relacional utilizado em aplicações backend.',

      en: 'Relational database management system used in backend applications.'
    },

    iconName: 'Database',

    logoUrl: `${import.meta.env.BASE_URL}images/sql-removebg-preview (1).png`,

    projects: {
      pt: [
        'ToDo API',
        'Financeiro'
      ],

      en: [
        'ToDo API',
        'Financeiro'
      ]
    },

    abilities: {
      pt: [
        'SQL',
        'CRUD',
        'Relacionamentos',
        'Normalização'
      ],

      en: [
        'SQL',
        'CRUD',
        'Relationships',
        'Normalization'
      ]
    },

    status: {
      pt: 'ADVANCED',
      en: 'ADVANCED'
    }
  },

  {
    id: 'postman',
    category: 'AID',

    name: {
      pt: 'Postman',
      en: 'Postman'
    },

    type: {
      pt: 'API Platform',
      en: 'API Platform'
    },

    level: 30,

    description: {
      pt: 'Ferramenta utilizada para testar, documentar e validar APIs REST.',

      en: 'Tool used to test, document and validate REST APIs.'
    },

    iconName: 'Send',

    projects: {
      pt: [
        'ToDo API',
        'Financeiro'
      ],

      en: [
        'ToDo API',
        'Financeiro'
      ]
    },

    abilities: {
      pt: [
        'Requisições HTTP',
        'Testes de API',
        'Headers',
        'JSON'
      ],

      en: [
        'HTTP Requests',
        'API Testing',
        'Headers',
        'JSON'
      ]
    },

    status: {
      pt: 'ADVANCED',
      en: 'ADVANCED'
    }
  },

  // =========================================================
  // MISC
  // =========================================================

  {
    id: 'aws',
    category: 'MISC',

    name: {
      pt: 'AWS',
      en: 'AWS'
    },

    type: {
      pt: 'Cloud Computing',
      en: 'Cloud Computing'
    },

    level: 30,

    description: {
      pt: 'Conhecimentos teóricos em computação em nuvem, incluindo serviços como EC2, S3, RDS, IAM e VPC.',

      en: 'Theoretical knowledge of cloud computing, including services such as EC2, S3, RDS, IAM and VPC.'
    },

    iconName: 'Cloud',

    logoUrl: `${import.meta.env.BASE_URL}images/aws.png`,

    projects: {
      pt: [
        'Estudos de Cloud Computing'
      ],

      en: [
        'Cloud Computing Studies'
      ]
    },

    abilities: {
      pt: [
        'EC2',
        'S3',
        'RDS',
        'IAM',
        'VPC'
      ],

      en: [
        'EC2',
        'S3',
        'RDS',
        'IAM',
        'VPC'
      ]
    },

    status: {
      pt: 'LEARNING',
      en: 'LEARNING'
    }
  },

  {
    id: 'linux',
    category: 'MISC',

    name: {
      pt: 'Linux',
      en: 'Linux'
    },

    type: {
      pt: 'Sistema Operacional',
      en: 'Operating System'
    },

    level: 35,

    description: {
      pt: 'Conhecimentos de administração e utilização de sistemas Linux, incluindo terminal, arquivos, permissões e processos.',

      en: 'Knowledge of Linux administration and usage, including terminal, files, permissions and processes.'
    },

    iconName: 'Terminal',

    projects: {
      pt: [
        'Estudos de Sistemas Operacionais'
      ],

      en: [
        'Operating Systems Studies'
      ]
    },

    abilities: {
      pt: [
        'Terminal',
        'Permissões',
        'Processos',
        'Sistema de Arquivos'
      ],

      en: [
        'Terminal',
        'Permissions',
        'Processes',
        'File System'
      ]
    },

    status: {
      pt: 'LEARNING',
      en: 'LEARNING'
    }
  },

  {
    id: 'cybersecurity',
    category: 'MISC',

    name: {
      pt: 'Cybersecurity',
      en: 'Cybersecurity'
    },

    type: {
      pt: 'Segurança da Informação',
      en: 'Information Security'
    },

    level: 50,

    description: {
      pt: 'Conhecimentos fundamentais de segurança da informação, autenticação, proteção de sistemas e conceitos de segurança em aplicações.',

      en: 'Fundamental knowledge of information security, authentication, system protection and application security concepts.'
    },

    iconName: 'ShieldCheck',

    projects: {
      pt: [
        'Estudos de Cibersegurança'
      ],

      en: [
        'Cybersecurity Studies'
      ]
    },

    abilities: {
      pt: [
        'Autenticação',
        'JWT',
        'Boas práticas de segurança',
       
      ],

      en: [
        'Authentication',
        'JWT',
        'Security best practices',
        'Networking concepts'
      ]
    },

    status: {
      pt: 'LEARNING',
      en: 'LEARNING'
    }
  }
];