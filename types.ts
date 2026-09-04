
export interface Skill {
  id: string;
  name: {pt: string; eng: string};
  level: number;
  description: {pt: string; eng: string};
  iconName: string; 
  logoUrl?: string; 
}

export interface Perk {
  id: string;
  name: {pt: string; eng: string}
  rank: number;
  maxRank: number;
  description: {pt: string; eng: string}
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
  title: {pt: string; en: string};
  tech: string[];
  description: {pt: string; en: string};
  link?: string;
  image?: string;
}

export interface Achievement {
  id: string;
  title: {pt: string; en: string};
  event: {pt: string; en: string};
  date: string;
  description: {pt: string; en:string};
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