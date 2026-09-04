import { Skill, Perk, Quest, InventoryItem, ProjectItem, Achievement } from './types';

export const SKILLS: Skill[] = [
  {
    id: 'java',
    name: { pt: 'Java', eng: 'Java' },
    level: 9,
    description: {
      pt: "Linguagem orientada a objetos conhecida por sua robustez e portabilidade. Amplamente utilizada no desenvolvimento de aplicações e sistemas backend.",
      eng: "Object-oriented language known for its robustness and portability. Widely used in application and backend systems development."
    },
    iconName: 'Code',
    logoUrl: 'images/226777.png'
  },
  {
    id: 'python',
    name: { pt: 'Python', eng: 'Python' },
    level: 8,
    description: {
      pt: "Linguagem versátil e conhecida pela simplicidade e legibilidade. Muito utilizada em automação, análise de dados e desenvolvimento de aplicações.",
      eng: "Versatile language known for its simplicity and readability. Widely used in automation, data analysis and application development."
    },
    iconName: 'Code',
    logoUrl: 'images/python-removebg-preview.png'
  },
  {
    id: 'aws',
    name: { pt: 'AWS', eng: 'AWS' },
    level: 9,
    description: {
      pt: "Plataforma de computação em nuvem com diversos serviços para infraestrutura e aplicações. Permite criar soluções escaláveis, seguras e flexíveis.",
      eng: "Cloud computing platform with a wide range of infrastructure and application services. Enables scalable, secure and flexible solutions."
    },
    iconName: 'Plataform',
    logoUrl: 'images/aws.png'
  },
  {
    id: 'mySQL',
    name: { pt: 'mySQL', eng: 'mySQL' },
    level: 8,
    description: {
      pt: "Sistema de gerenciamento de banco de dados relacional conhecido por desempenho e confiabilidade. Utilizado para armazenar e organizar dados de aplicações.",
      eng: "Relational database management system known for performance and reliability. Used to store and organize application data."
    },
    iconName: 'database',
    logoUrl: 'images/sql-removebg-preview (1).png'
  },
  {
    id: 'Springboot',
    name: { pt: 'Springboot', eng: 'Springboot' },
    level: 7,
    description: {
      pt: "Framework Java para desenvolvimento de aplicações robustas e escaláveis. Facilita a criação de APIs REST e sistemas backend.",
      eng: "Java framework for building robust, scalable applications. Simplifies the creation of REST APIs and backend systems."
    },
    iconName: 'code',
    logoUrl: 'images/icons8-spring-boot-80.png'
  },
  {
    id: 'html',
    name: { pt: 'html', eng: 'html' },
    level: 6,
    description: {
      pt: "Linguagem de marcação essencial para estruturar páginas web. Define a organização e o conteúdo das interfaces digitais.",
      eng: "Essential markup language for structuring web pages. Defines the organization and content of digital interfaces."
    },
    iconName: 'code',
    logoUrl: 'images/icons8-html-100.png'
  },
  {
    id: 'TailWind',
    name: { pt: 'TailWind', eng: 'TailWind' },
    level: 7,
    description: {
      pt: "Framework CSS baseado em classes utilitárias para criação de interfaces modernas e responsivas. Facilita a estilização e permite desenvolver layouts de forma rápida e consistente.",
      eng: "Utility-class-based CSS framework for building modern, responsive interfaces. Simplifies styling and enables fast, consistent layout development."
    },
    iconName: 'code',
    logoUrl: 'images/icons8-tailwind-css-96.png'
  },
  {
    id: 'react',
    name: { pt: 'React', eng: 'React' },
    level: 3,    
    description: {
       pt: "Biblioteca JavaScript para criação de interfaces de usuário interativas e componentizadas. Facilita o desenvolvimento de aplicações modernas, reutilizáveis e dinâmicas.",
       eng: "JavaScript library for building interactive and component-based user interfaces. Simplifies the development of modern, reusable, and dynamic applications."
},
    iconName: 'code',
    logoUrl: 'images/react_icon_130845-removebg-preview.png'
  }
];

export const PERKS: Perk[] = [
  {
    id: 'English',
    name: { pt: 'Proficiência na língua inglesa', eng: 'English Proficiency' },
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
    pdfUrl: 'components/certificados/Bootcamp completo.pdf'
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
    pdfUrl: 'components/certificados/fiap.pdf'
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
    pdfUrl: 'components/certificados/I2CSUpdate20250220-28-paz4p2.pdf'
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
    pdfUrl: 'components/certificados/AWS_FINAL.pdf'
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
      pt: "Formação superior em ADS, com foco em desenvolvimento back-end em Java, programação orientada a objetos e boas práticas de engenharia de software.",
      en: "Bachelor's degree in Systems Analysis and Development, focused on Java back-end development, object-oriented programming and software engineering best practices."
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
        text: { pt: 'Engenharia de Software', en: 'Software Engineering' },
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