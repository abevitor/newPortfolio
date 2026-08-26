import React, { createContext, useContext, useState} from 'react';
import {translations, language, Translations} from './translations';

interface LanguageContextType {
    language : language;
    toggleLanguage: () => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode}> = ({children}) => {
    const [language, setLanguage] = useState<language>('pt');

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
    };

    const value: LanguageContextType = {
        language,
        toggleLanguage,
        t: translations[language],
    };

    return(
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if(!context) {
        throw new Error('useLanguage precisa estar dentro de um LanguageProvider');
    }
    return context;
}