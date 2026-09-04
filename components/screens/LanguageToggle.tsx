import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
    onClick={toggleLanguage}
    className="
        flex items-center gap-2
        border border-pip/50
        bg-pip/5
        px-3 py-1
        text-pip
        font-mono text-xs
        uppercase
        tracking-widest
        transition-all duration-200
        hover:bg-pip/10
        hover:border-pip
        hover:shadow-[0_0_10px_rgba(65,255,0,0.2)]
        shrink-0
    "
>
    <span className="opacity-50">LANG:</span>
    <span className="font-bold">
        {language === 'pt' ? 'PT' : 'EN'}
    </span>
    <span className="opacity-40">↕</span>
</button>
    );
};

export default LanguageToggle;