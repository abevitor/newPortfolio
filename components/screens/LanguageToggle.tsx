import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const LanguageToggle: React.FC = () => {
    const {language, toggleLanguage} = useLanguage();
  
    return (
        <button
          onClick={toggleLanguage}
          className="border border-pip text-pip px-2 py-1 text-xs font-mono -uppercase hover:bg-pip hover:text-black transition-colors shrink-0"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
    );
};

export default LanguageToggle;