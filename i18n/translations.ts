export const translations = {
    pt: {
        nav: {
            stat: 'STAT',
            data: 'DATA',
            map: 'MAP',
            radio: 'RADIO',

        },
        statusView: {
            role: 'ENGENHEIRO DE SOFTWARE',
            description: "Especializado em desenvolvimento backend e na criação de soluções eficientes com Java e Spring Boot. Atualmente, estou expandindo meus conhecimentos em Inteligência Artificial e LLMs, transformando aprendizado em projetos práticos e buscando construir aplicações úteis, escaláveis e bem estruturadas.",
},
mapScreen: {
  positionLocked: 'Posição Travada',
  localMapData: 'Dados do Mapa Local',
  currentLocation: '[LOCALIZAÇÃO ATUAL]',
  locations: {
    saoPaulo: 'São Paulo',
    carapicuiba: 'Carapicuíba',
    brazil: 'Brasil',
    southAmerica: 'América do Sul',
    earth: 'Terra (Terceiro Planeta, Sistema Solar)',
    solarSystem: 'Sistema Solar',
    localCloud: 'Nuvem Interestelar Local',
    orionArm: 'Braço de Órion, Via Láctea',
    localGroup: 'Grupo Local',
    laniakea: 'Superaglomerado de Laniakea',
    cosmicWeb: 'Teia Cósmica',
    observableUniverse: 'Universo Observável',
  },
        },
        dataScreen: {
            objectives: 'OBJETIVOS',
            completed: 'CONCLUÍDO',
            accessTerminal: 'ACESSAR TERMINAL',
            linkUnavailable: 'LINK INDISPONÍVEL',
            featuredProject: 'PROJETO EM DESTAQUE',
            visualizarPdf: 'Visualizar PDF',
            baixarPdf: 'Baixar PDF',
            carregandoPdf: 'Carregando PDF...',
            erroPdf: 'Erro ao carregar o PDF',
            anterior: 'Anterior',
            proxima: 'Próxima',
        },
        perksView: {
            issuer: 'Emissor',
            acessarCertificado: 'Acessar Certificado',
        },
        radioScreen: {
            signalFound: 'SINAL ENCONTRADO',
            liveFeed: 'AO VIVO',
            tuning: 'SINTONIA',
        },
        contactForm: {
            title: 'Transmitir Mensagem',
            name: 'NOME',
            email: 'EMAIL',
            message: 'MENSAGEM',
            sending: 'Enviando...',
            sucess: 'Enviado!',
            error: 'Erro, tente novamente',
            send: 'Enviar',
        },
    },

    en: {
        nav: {
            stat: 'STAT',
            data: 'DATA',
            map: 'MAP',
            radio: 'RADIO',

        },
        statusView: {
            role: 'SOFTWARE ENGINEER',
            description: "Specialized in backend development and building efficient solutions with Java and Spring Boot. I'm currently expanding my knowledge of Artificial Intelligence and LLMs, turning what I learn into practical projects and aiming to build useful, scalable, well-structured applications.",
        },
        mapScreen: {
  positionLocked: 'Position Locked',
  localMapData: 'Local Map Data',
  currentLocation: '[CURRENT LOCATION]',
  locations: {
    saoPaulo: 'São Paulo',
    carapicuiba: 'Carapicuíba',
    brazil: 'Brazil',
    southAmerica: 'South America',
    earth: 'Earth (Third Planet, Sol System)',
    solarSystem: 'Solar System',
    localCloud: 'Local Interstellar Cloud',
    orionArm: 'Orion Arm, Milky Way Galaxy',
    localGroup: 'Local Group',
    laniakea: 'Laniakea Supercluster',
    cosmicWeb: 'Cosmic Web',
    observableUniverse: 'Observable Universe',
  },
},

        dataScreen: {
            objectives: 'OBJECTIVES',
            completed: 'COMPLETED',
            accessTerminal: 'ACESS TERMINAL',
            linkUnavailable: 'LINK UNAVAILABLE',
            featuredProject: 'FEATURED PROJECT',
            visualizarPdf: 'View PDF',
            baixarPdf: 'Download PDF',
            carregandoPdf: 'Loading PDF...',
            erroPdf: 'Error Loading PDF',
            anterior: 'Previous',
            proxima: 'Next',
        },
        perksView: {
            issuer: 'Issuer',
            acessarCertificado: 'View Certificate',
        },
        radioScreen: {
            signalFound: 'SIGNAL FOUND',
            liveFeed: 'LIVE FEED',
            tuning: 'TUNING',
        },
        contactForm: {
            title: 'Transmite Message',
            name: 'NAME',
            email: 'EMAIL',
            message: 'MESSAGE',
            sending: 'Sending...',
            sucess: 'Sent!',
            error: 'Error, try again',
            send: 'Send',
        },
    },
};

export type language = 'pt' | 'en';
export type Translations = typeof translations['pt'];
