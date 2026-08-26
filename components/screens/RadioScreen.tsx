import React from 'react';
import { Github, Linkedin, Radio, Signal } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const ORBIT_RADIUS = 130; // Radius in pixels

const ORBITAL_CONTACTS = [
  { 
    id: 'linkedin', 
    name: 'LINKEDIN', 
    icon: Linkedin, 
    link: 'https://www.linkedin.com/in/abevitor/',
    angle: 0, // Top
  },
  { 
    id: 'github', 
    name: 'GITHUB', 
    icon: Github, 
    link: 'https://github.com/abevitor',
    angle: 180, // Right
  }
  
];

const RadioScreen: React.FC = () => {
    const { t } = useLanguage();
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-[30rem] h-[30rem] border border-pip/20 rounded-full animate-[spin_60s_linear_infinite] border-dashed"></div>
        </div>

        {/* Header */}
        <div className="absolute top-2 sm:top-6 w-full text-center z-30">
             <div className="inline-block border-b-2 border-pip pb-1 px-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-[0.3em] uppercase text-pip drop-shadow-[0_0_2px_rgba(65,255,0,0.7)]">
                    Pip-Boy Radio
                </h2>
                <div className="text-xs tracking-widest text-pip opacity-70">{t.radioScreen.signalFound}</div>
             </div>
        </div>

        {/* Main Orbit Area */}
        <div className="relative flex items-center justify-center w-full h-[60vh]">
            
            {/* The Ring */}
            <div 
                className="absolute rounded-full border border-pip/60 shadow-[0_0_4px_rgba(65,255,0,0.4)]"
                style={{ 
                    width: `${ORBIT_RADIUS * 2}px`, 
                    height: `${ORBIT_RADIUS * 2}px` 
                }}
            ></div>

            {/* Center Hub: Live Feed Visual */}
            <div className="absolute z-10 flex flex-col items-center justify-center text-pip animate-pulse-fast select-none pointer-events-none">
                <Radio size={56} strokeWidth={1.5} className="drop-shadow-[0_0_3px_rgba(65,255,0,0.7)]" />
                <span className="mt-3 text-xs font-bold tracking-[0.3em] uppercase opacity-80 drop-shadow-md">
                    {t.radioScreen.liveFeed}
                </span>
            </div>

            {/* Orbiting Items */}
            {ORBITAL_CONTACTS.map((contact) => {
                // Determine CSS variables for positioning
                const rad = (contact.angle * Math.PI) / 180;
                // Calculate offset from center
                const x = Math.cos(rad) * ORBIT_RADIUS;
                const y = Math.sin(rad) * ORBIT_RADIUS;

                return (
                    <a 
                        key={contact.id}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute flex flex-col items-center justify-center group text-pip outline-none hover:scale-110 transition-transform duration-200"
                        style={{
                            
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                        }}
                    >
                        {}
                        <div className="bg-black p-3 rounded-full border border-transparent group-hover:border-pip/50 transition-all z-20">
                            <contact.icon size={32} strokeWidth={1.5} className="fill-black/50" />
                        </div>
                        
                        {/* Label - Positioned absolutely below icon */}
                        <div className="absolute top-full mt-2 text-xs font-bold tracking-widest uppercase bg-black px-1 text-pip opacity-90 group-hover:opacity-100 border border-pip/0 group-hover:border-pip/30 rounded transition-all whitespace-nowrap z-30">
                            {contact.name}
                        </div>
                    </a>
                );
            })}
        </div>

        {/* Footer Frequency Viz */}
        <div className="absolute bottom-4 sm:bottom-8 w-full px-8 flex flex-col items-center text-pip opacity-80">
            <div className="flex items-end gap-1 h-8 sm:h-12 w-full max-w-md justify-center overflow-hidden mask-linear">
                 {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="w-2 bg-pip/80" 
                        style={{ 
                            height: `${Math.random() * 80 + 20}%`, 
                            animation: `pulse 0.5s infinite ${Math.random()}s`
                        }}
                    ></div>
                 ))}
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm font-mono tracking-widest">
                <Signal size={16} className="animate-pulse" />
                <span>{t.radioScreen.tuning}TUNING: 67.5 MHz</span>
            </div>
        </div>
    </div>
  );
};

export default RadioScreen;