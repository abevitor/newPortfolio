import React, { useMemo, useState } from 'react';
import {
    Code2,
    Server,
    Database,
    Cloud,
    Terminal,
    ShieldCheck,
    GitBranch,
    Github,
    Send,
    Atom,
    Palette,
    Braces,
    Package,
    ChevronRight
} from 'lucide-react';

import { ITEMS } from '../../data';
import { InvSubTab, InventoryItem } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface InventoryScreenProps {
    activeSubTab: InvSubTab;
}

const InventoryScreen: React.FC<InventoryScreenProps> = ({
    activeSubTab
}) => {
    const { language } = useLanguage();

    const [selectedId, setSelectedId] = useState<string>(
        ITEMS.find((item) => item.category === activeSubTab)?.id ?? ITEMS[0]?.id ?? ''
    );

    const filteredItems = useMemo(() => {
        return ITEMS.filter(
            (item) => item.category === activeSubTab
        );
    }, [activeSubTab]);

    React.useEffect(() => {
        const firstItem = filteredItems[0];

        if (firstItem) {
            setSelectedId(firstItem.id);
        }
    }, [activeSubTab, filteredItems]);

    const selectedItem: InventoryItem | undefined =
        filteredItems.find((item) => item.id === selectedId) ??
        filteredItems[0];

    const categoryLabels: Record<InvSubTab, string> = {
        WEAPONS: language === 'pt' ? 'WEAPONS' : 'WEAPONS',
        APPAREL: language === 'pt' ? 'APPAREL' : 'APPAREL',
        AID: language === 'pt' ? 'AID' : 'AID',
        MISC: language === 'pt' ? 'MISC' : 'MISC'
    };

    const getIcon = (iconName: string) => {
        const icons: Record<string, React.ReactNode> = {
            Code2: <Code2 size={18} />,
            Server: <Server size={18} />,
            Database: <Database size={18} />,
            Cloud: <Cloud size={18} />,
            Terminal: <Terminal size={18} />,
            ShieldCheck: <ShieldCheck size={18} />,
            GitBranch: <GitBranch size={18} />,
            Github: <Github size={18} />,
            Send: <Send size={18} />,
            Atom: <Atom size={18} />,
            Palette: <Palette size={18} />,
            Braces: <Braces size={18} />
        };

        return icons[iconName] ?? <Package size={18} />;
    };

    const getLevelLabel = (level: number) => {
        if (level >= 85) {
            return language === 'pt'
                ? 'MASTERED'
                : 'MASTERED';
        }

        if (level >= 65) {
            return language === 'pt'
                ? 'ADVANCED'
                : 'ADVANCED';
        }

        if (level >= 45) {
            return language === 'pt'
                ? 'INTERMEDIATE'
                : 'INTERMEDIATE';
        }

        return language === 'pt'
            ? 'LEARNING'
            : 'LEARNING';
    };

    const renderBar = (value: number, width = 28) => {
        const filled = Math.round((value / 100) * width);
        const empty = width - filled;

        return (
            <span className="tracking-[-2px]">
                {'█'.repeat(filled)}
                <span className="opacity-25">
                    {'█'.repeat(empty)}
                </span>
            </span>
        );
    };

    if (!selectedItem) {
        return (
            <div className="h-full flex items-center justify-center text-pip">
                NO ITEMS FOUND
            </div>
        );
    }

    const name = selectedItem.name[language];
    const type = selectedItem.type[language];
    const description =
        selectedItem.description[language];

    const projects =
        selectedItem.projects?.[language] ?? [];

    const abilities =
        selectedItem.abilities?.[language] ?? [];

    const status =
        selectedItem.status[language];

    return (
        <div className="h-full flex flex-col text-pip overflow-hidden">

            {/* HEADER */}
            <div className="flex justify-between items-end border-b border-pip/30 pb-2 mb-3 shrink-0">
                <div>
                    <div className="text-xs opacity-50">
                        PIP-BOY 3000
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold tracking-wider">
                        INVENTORY
                    </h1>
                </div>

                <div className="text-right">
                    <div className="text-xs opacity-50">
                        CATEGORY
                    </div>

                    <div className="font-bold">
                        {categoryLabels[activeSubTab]}
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.6fr)] gap-4 flex-1 min-h-0">

                {/* ITEM LIST */}
                <section className="border border-pip/30 bg-black/20 min-h-0 flex flex-col">

                    <div className="px-3 py-2 border-b border-pip/20 text-xs opacity-60 shrink-0">
                        {language === 'pt'
                            ? 'TECHNOLOGIES'
                            : 'TECHNOLOGIES'}
                    </div>

                    <div className="overflow-y-auto flex-1 p-2 custom-scrollbar">

                        {filteredItems.map((item, index) => {
                            const active =
                                item.id === selectedItem.id;

                            const itemName =
                                item.name[language];

                            return (
                                <button
                                    key={item.id}
                                    onClick={() =>
                                        setSelectedId(item.id)
                                    }
                                    className={`w-full text-left flex items-center gap-3 px-3 py-3 mb-1 transition-all group ${
                                        active
                                            ? 'bg-pip text-black'
                                            : 'hover:bg-pip/10 text-pip'
                                    }`}
                                >

                                    <span className="w-5 shrink-0">
                                        {active ? (
                                            <ChevronRight size={18} />
                                        ) : (
                                            <span className="opacity-40">
                                                {index + 1}
                                            </span>
                                        )}
                                    </span>

                                    <span
                                        className={`shrink-0 ${
                                            active
                                                ? 'text-black'
                                                : 'text-pip'
                                        }`}
                                    >
                                        {getIcon(
                                            item.iconName
                                        )}
                                    </span>

                                    <span className="flex-1 min-w-0">

                                        <span className="block font-bold uppercase truncate">
                                            {itemName}
                                        </span>

                                        <span
                                            className={`block text-xs ${
                                                active
                                                    ? 'text-black/60'
                                                    : 'opacity-40'
                                            }`}
                                        >
                                            LVL {item.level}
                                        </span>

                                    </span>

                                </button>
                            );
                        })}

                    </div>
                </section>

                {/* DETAIL */}
                <section className="border border-pip/30 p-4 overflow-y-auto custom-scrollbar">

                    {/* TITLE */}
                    <div className="flex justify-between items-start gap-4">

                        <div className="flex gap-3 items-start">

                            <div className="w-12 h-12 border border-pip/40 flex items-center justify-center shrink-0">

                                {selectedItem.logoUrl ? (
                                    <img
                                        src={selectedItem.logoUrl}
                                        alt={name}
                                        className="w-9 h-9 object-contain"
                                    />
                                ) : (
                                    getIcon(
                                        selectedItem.iconName
                                    )
                                )}

                            </div>

                            <div>

                                <div className="text-xs opacity-50 uppercase">
                                    {type}
                                </div>

                                <h2 className="text-2xl sm:text-3xl font-bold uppercase">
                                    {name}
                                </h2>

                            </div>

                        </div>

                        <div className="text-right shrink-0">

                            <div className="text-xs opacity-50">
                                LEVEL
                            </div>

                            <div className="text-2xl font-bold">
                                {selectedItem.level}
                            </div>

                        </div>

                    </div>

                    {/* LEVEL BAR */}
                    <div className="mt-5">

                        <div className="flex justify-between text-xs mb-1 opacity-70">
                            <span>
                                EXPERIENCE
                            </span>

                            <span>
                                {selectedItem.level}%
                            </span>
                        </div>

                        <div className="text-lg leading-none overflow-hidden whitespace-nowrap">
                            {renderBar(
                                selectedItem.level,
                                36
                            )}
                        </div>

                    </div>

                    {/* STATUS */}
                    <div className="mt-5 border-y border-pip/20 py-3 flex justify-between items-center">

                        <span className="text-sm opacity-60">
                            STATUS
                        </span>

                        <span className="font-bold">
                            {getLevelLabel(
                                selectedItem.level
                            )}
                        </span>

                    </div>

                    {/* DESCRIPTION */}
                    <div className="mt-5">

                        <h3 className="text-xs font-bold opacity-60 mb-2">
                            {language === 'pt'
                                ? 'DESCRIPTION'
                                : 'DESCRIPTION'}
                        </h3>

                        <p className="text-sm sm:text-base leading-relaxed opacity-90">
                            {description}
                        </p>

                    </div>

                    {/* ABILITIES */}
                    {abilities.length > 0 && (
                        <div className="mt-6">

                            <h3 className="text-xs font-bold opacity-60 mb-2">
                                ABILITIES
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                                {abilities.map(
                                    (ability) => (
                                        <div
                                            key={ability}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            <span className="text-pip">
                                                ✓
                                            </span>

                                            <span>
                                                {ability}
                                            </span>
                                        </div>
                                    )
                                )}

                            </div>

                        </div>
                    )}

                    {/* PROJECTS */}
                    {projects.length > 0 && (
                        <div className="mt-6">

                            <h3 className="text-xs font-bold opacity-60 mb-2">
                                PROJECTS
                            </h3>

                            <div className="space-y-1">

                                {projects.map(
                                    (project) => (
                                        <div
                                            key={project}
                                            className="text-sm flex items-center gap-2"
                                        >
                                            <span>
                                                &gt;
                                            </span>

                                            <span>
                                                {project}
                                            </span>
                                        </div>
                                    )
                                )}

                            </div>

                        </div>
                    )}

                    {/* FOOTER */}
                    <div className="mt-8 pt-3 border-t border-pip/20 text-[10px] uppercase opacity-40 flex justify-between">

                        <span>
                            {selectedItem.id}
                        </span>

                        <span>
                            {selectedItem.category}
                        </span>

                    </div>

                </section>

            </div>

        </div>
    );
};

export default InventoryScreen;