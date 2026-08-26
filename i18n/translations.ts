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
        },
        dataScreen: {
            objectives: 'OBJETIVOS',
            completed: 'CONCLUÍDO',
            acessTerminal: 'ACESSAR TERMINAL',
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
        },
        dataScreen: {
            objectives: 'OBJECTIVES',
            completed: 'COMPLETED',
            acessTerminal: 'ACESS TERMINAL',
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
