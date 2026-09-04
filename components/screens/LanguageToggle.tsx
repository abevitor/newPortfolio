import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="
                group
                flex items-center gap-3
                border-2 border-pip/60
                bg-pip/5
                px-5 py-2
                text-pip
                font-mono text-sm
                uppercase
                tracking-widest
                transition-all duration-200
                hover:bg-pip/15
                hover:border-pip
                hover:shadow-[0_0_15px_rgba(65,255,0,0.25)]
                shrink-0
            "
            title="Change language"
        >
            <Languages
                size={18}
                className="opacity-70 group-hover:opacity-100"
            />

            <span className="opacity-50">
                LANG:
            </span>

            <span className="font-bold">
                {language === 'pt' ? 'PT' : 'EN'}
            </span>

            <span className="opacity-40 group-hover:opacity-100">
                ↕
            </span>
        </button>
    );
};

export default LanguageToggle;