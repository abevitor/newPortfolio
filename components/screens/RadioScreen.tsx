import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Radio, Signal } from 'lucide-react';
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
type FormStatus = 'idle' | 'sending' | 'sucess' | 'error';

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

    
}

