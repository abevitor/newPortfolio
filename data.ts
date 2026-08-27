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
    logoUrl: 'images/icons8-tailwind-css-96.png'
  }
];

export const PERKS: Perk[] = [
  {
    id: 'English',
    name: 'Proficiência na lingua inglesa',
    rank: 3,
    maxRank: 5,
    description: "Leitura técnica e comunicação em nível avançado, com fluência em desenvolvimento.",
    iconName: 'MessageCircleMore',
  },
   {
    id: 'self-learning',
    name: 'Aprendizado Contínuo',
    rank: 4,
    maxRank: 5,
    description: "Facilidade em absorver novas tecnologias e frameworks de forma autodidata.",
    iconName: 'Glasses',
  },
   {
    id: 'teamwork',
    name: 'Trabalho em equipe',
    rank: 3,
    maxRank: 5,
    description: "Experiência colaborando em projetos de grupo.",
    iconName: 'Handshake',
  },
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
    id: 'Bootcamp-DIO',
    title: 'Conclusão BootCamp DIO JAVA',
    event: 'BootCamp DIO',
    date: '13.08.2025',
    description: "Finalização do BootCamp com carga horária de 71 horas.",
    pdfUrl: 'components/certificados/Bootcamp completo.pdf'
  },
  {
    id: 'certificado-fiap',
    title: 'Certificado FIAP JAVA',
    event: 'Cursos FIAP',
    date: '19.05.2025',
    description: "Finalização do curso de Java da FIAP com carga horária de 60 horas.",
    pdfUrl:'components/certificados/fiap.pdf'
  },
  {
    id: 'Cyberseguranca-CISCO',
    title: 'Certificado CyberSegurança básica pela CISCO',
    event: 'Cisco Academy',
    date: '2025',
    description: "Finalização do curso de Introdução a CyberSegurança pela CISCO.",
    pdfUrl:'components/certificados/I2CSUpdate20250220-28-paz4p2.pdf'
  },
  {
    id: 'AWS-DIO',
    title: 'Fundamentos de Cloud com AWS',
    event:'Cursos DIO',
    date:'24.07.2026',
    description:'Finalização do curso de fundamentos de Cloud com AWS pela DIO com carga horária de 48 horas.',
    pdfUrl: 'components/certificados/AWS_FINAL.pdf'
  },
  {
    id: 'artigo-IA',
    title: 'IA como ferramenta de insegurança',
    event:'FATECLOG',
    date:'2026',
    description:'Investiga como a Inteligência Artificial transforma a segurança privada via PLN: benefícios como automação, agilidade na análise de dados e apoio à decisão, e limites como ironia, contexto cultural, vieses e impacto no mercado de trabalho — com foco no uso ético de PLNs e IAs.'
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