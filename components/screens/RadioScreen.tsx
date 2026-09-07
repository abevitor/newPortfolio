import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Radio, Signal, X } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const ORBIT_RADIUS = 130;

const getOrbitOffset = (angleDeg: number, radius: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius};

};

const ORBITAL_CONTACTS = [
    {
        id: 'linkedin',
        name: 'LINKEDIN',
        icon: Linkedin,
        link: 'https://www.linkedin.com/in/abevitor/',
        angle: -90,
    },
    {
        id: 'github',
        name: 'GITHUB',
        icon: Github,
        link: 'https://github.com/abevitor',
        angle: 30,
    }
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_ID_AQUI';
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface ContactModalProps  {
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose}) => {
    const {t, language } = useLanguage();
    const [isClosing, setIsClosing] = useState(false);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});

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
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {'Accept': 'application/json', 'Content=-Type': 'application/json'},
                body: JSON. stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({name: '', email: '', message: ''});

            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error')
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
        
}

