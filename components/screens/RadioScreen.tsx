import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Radio, Signal, Mail, Send, CheckCircle, XCircle, X } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const ORBIT_RADIUS = 130; // Radius in pixels

// Converts an angle (degrees) into x/y offset from the orbit center
const getOrbitOffset = (angleDeg: number, radius: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
};

const ORBITAL_CONTACTS = [
  { 
    id: 'linkedin', 
    name: 'LINKEDIN', 
    icon: Linkedin, 
    link: 'https://www.linkedin.com/in/abevitor/',
    angle: -90, // Top
  },
  { 
    id: 'github', 
    name: 'GITHUB', 
    icon: Github, 
    link: 'https://github.com/abevitor',
    angle: 30, // Bottom-right
  }
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_ID_AQUI'; // <- troque pelo seu endpoint

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const { t, language } = useLanguage();
  const [isClosing, setIsClosing] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 250);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => setStatus('idle'), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm ${
        isClosing ? 'animate-backdrop-out' : 'animate-backdrop-in'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-md bg-pip-bg border-2 border-pip shadow-[0_0_30px_rgba(65,255,0,0.3)] flex flex-col ${
          isClosing ? 'animate-modal-out' : 'animate-modal-in'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-pip px-4 py-2 shrink-0">
          <div className="flex items-center gap-2 text-pip font-mono uppercase tracking-widest">
            <Radio size={18} />
            <span className="text-sm sm:text-base">{t.contactForm.title}</span>
          </div>
          <button
            onClick={handleClose}
            className="text-pip hover:bg-pip hover:text-black p-1 transition-colors"
            aria-label={language === 'pt' ? 'Fechar' : 'Close'}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3 font-mono">
          {/* Honeypot anti-spam field — invisible to humans, bots tend to fill it */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: 'absolute', left: '-9999px' }}
            aria-hidden="true"
          />

          <input
            type="text"
            name="name"
            placeholder={t.contactForm.name}
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className="w-full bg-black border border-pip/50 px-3 py-2 text-sm uppercase text-pip placeholder:text-pip/40 focus:outline-none focus:border-pip focus:shadow-[0_0_8px_rgba(65,255,0,0.3)] transition-all disabled:opacity-50"
          />
          <input
            type="email"
            name="email"
            placeholder={t.contactForm.email}
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className="w-full bg-black border border-pip/50 px-3 py-2 text-sm uppercase text-pip placeholder:text-pip/40 focus:outline-none focus:border-pip focus:shadow-[0_0_8px_rgba(65,255,0,0.3)] transition-all disabled:opacity-50"
          />
          <textarea
            name="message"
            placeholder={t.contactForm.message}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            rows={4}
            className="w-full bg-black border border-pip/50 px-3 py-2 text-sm uppercase text-pip placeholder:text-pip/40 focus:outline-none focus:border-pip focus:shadow-[0_0_8px_rgba(65,255,0,0.3)] transition-all resize-none disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 bg-pip text-black py-2 font-bold uppercase tracking-widest hover:bg-pip-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' && <>{t.contactForm.sending}</>}
            {status === 'success' && <><CheckCircle size={16} /> {t.contactForm.success}</>}
            {status === 'error' && <><XCircle size={16} /> {t.contactForm.error}</>}
            {status === 'idle' && <><Send size={16} /> {t.contactForm.send}</>}
          </button>
        </form>
      </div>
    </div>
  );
};

const RadioScreen: React.FC = () => {
  const { t } = useLanguage();
  const [showContactModal, setShowContactModal] = useState(false);
  const mailOffset = getOrbitOffset(150, ORBIT_RADIUS); // Bottom-left

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

            {/* Orbiting Items (external links) */}
            {ORBITAL_CONTACTS.map((contact) => {
                const { x, y } = getOrbitOffset(contact.angle, ORBIT_RADIUS);

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
                        <div className="bg-black p-3 rounded-full border border-transparent group-hover:border-pip/50 transition-all z-20">
                            <contact.icon size={32} strokeWidth={1.5} className="fill-black/50" />
                        </div>
                        <div className="absolute top-full mt-2 text-xs font-bold tracking-widest uppercase bg-black px-1 text-pip opacity-90 group-hover:opacity-100 border border-pip/0 group-hover:border-pip/30 rounded transition-all whitespace-nowrap z-30">
                            {contact.name}
                        </div>
                    </a>
                );
            })}

            {/* Orbiting Item: Contact (opens modal instead of navigating) */}
            <button
                onClick={() => setShowContactModal(true)}
                className="absolute flex flex-col items-center justify-center group text-pip outline-none hover:scale-110 transition-transform duration-200"
                style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${mailOffset.x}px, ${mailOffset.y}px)`
                }}
            >
                <div className="bg-black p-3 rounded-full border border-transparent group-hover:border-pip/50 transition-all z-20">
                    <Mail size={32} strokeWidth={1.5} />
                </div>
                <div className="absolute top-full mt-2 text-xs font-bold tracking-widest uppercase bg-black px-1 text-pip opacity-90 group-hover:opacity-100 border border-pip/0 group-hover:border-pip/30 rounded transition-all whitespace-nowrap z-30">
                    EMAIL
                </div>
            </button>
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
                <span>{t.radioScreen.tuning}: 67.5 MHz</span>
            </div>
        </div>

        {showContactModal && (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )}
    </div>
  );
};

export default RadioScreen;