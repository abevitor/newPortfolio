
export interface Skill {
  id: string;
  name: string;
  level: number;
  description: string;
  iconName: string; // Fallback lucide icon
  logoUrl?: string; // External logo URL
}

export interface Perk {
  id: string;
  name: string;
  rank: number;
  maxRank: number;
  description: string;
  iconName: string;
  issuer?: string;
  link?: string;
}

export interface QuestStep {
  text: string;
  completed: boolean;
}

export interface Quest {
  title: { pt: string; en: string };
  summary: { pt: string; en: string };
  description: { pt: string; en: string };
  steps: { text: { pt: string; en: string }; completed: boolean }[];
  date: string; // datas/números podem continuar como string simples
  status: 'active' | 'completed';
  id: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tech: string[];
  description: string;
  link?: string;
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  date: string;
  description: string;
  pdfUrl?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  damage: number;
  weight: number;
  value: number;
  description: string;
  tags: string[];
}

// Navigation Types
export type MainTab = 'STAT' | 'DATA' | 'MAP' | 'RADIO';
export type StatSubTab = 'STATUS' | 'SPECIAL' | 'PERKS';
export type DataSubTab = 'QUESTS' | 'PROJECTS' | 'ACHIEVEMENTS'; 
export type InvSubTab = 'WEAPONS' | 'APPAREL' | 'AID' | 'MISC';