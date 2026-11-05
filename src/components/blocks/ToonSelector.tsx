import { useEffect, useRef, useState } from "react";
import Input from "../customs/Input";
import ToonButton from "../ToonButton";
import type { Toon, ToonCategory, ToonRarity } from "../../types/toons";
import ShinyButton from "../customs/ShinyButton";
import ICONS from "../../constants/icons";

const SortOptions = {
    name: "Name",
    rarity: "Rarity",
    category: "Event",
    health: "Health",
    skillCheck: "Skill Check",
    moveSpeed: "Movement Speed",
    stamina: "Stamina",
    stealth: "Stealth",
    extSpeed: "Extraction Speed",
};

type SortKey = keyof typeof SortOptions;
type SortDir = "asc" | "desc";

const SORT_GROUPS: { 
    entry: SortKey[],
    title?: string,
}[] = [
    { 
        entry: ["name", "rarity", "category"],
    },
    {
        entry: ["health", "skillCheck", "moveSpeed", "stamina", "stealth", "extSpeed"],
        title: "Stats",
    },
];

const RARITY_PRIORITY: Record<ToonRarity, number> = {
    normal: 0,
    main: 1,
};

const CATEGORY_PRIORITY: Record<ToonCategory, number> = {
    none: 0,
    easter: 1,
    halloween: 2,
    holiday: 3,
};

function normalizeString(str: string): string {
    return str.toLowerCase().trim();
}

export type ToonSelectorProps = {
    className?: string;
    toons: Toon[];
    selectedSlug?: string;
    onSelect: (slug: string) => void;
    toonButtonSize?: string;
};

export default function ToonSelector({ className, toons, selectedSlug, onSelect, toonButtonSize = undefined }: ToonSelectorProps) {
    const [inputSearch, setInputSearch] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    const [sort, setSort] = useState<SortKey>("name");
    const [sortDir, setSortDir] = useState<SortDir>("asc");
    const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timemout = setTimeout(() => {
            setSearch(normalizeString(inputSearch));
        }, 250);

        return () => clearTimeout(timemout);
    }, [inputSearch]);

    useEffect(() => {
        if (!isSortOpen) return;

        const handleClick = (e: MouseEvent) => {
            if (!sortRef.current?.contains(e.target as Node)) setIsSortOpen(false);
        };

        document.addEventListener("mousedown", handleClick);

        return () => document.removeEventListener("mousedown", handleClick);
    }, [isSortOpen]);

    const filteredToons = search !== "" 
        ? toons.filter((toon) => normalizeString(toon.name).includes(search))
        : toons;

    const dir = sortDir === "asc" ? 1 : -1;
    const sortedToons = [...filteredToons].sort((a, b) => {
        const sortFallback = (result: number) => {
            return result * dir || a.name.localeCompare(b.name);
        };

        switch (sort) {
            case "name":
                return a.name.localeCompare(b.name) * dir;
            case "rarity":
                return sortFallback(
                    (RARITY_PRIORITY[a.rarity] - RARITY_PRIORITY[b.rarity])
                );
            case "category":
                return sortFallback(
                    (CATEGORY_PRIORITY[a.category] - CATEGORY_PRIORITY[b.category])
                );
            case "health":
                return sortFallback(a.stats[0] - b.stats[0]);
            case "skillCheck":
                return sortFallback(a.stats[1] - b.stats[1]);
            case "moveSpeed":
                return sortFallback(a.stats[2] - b.stats[2]);
            case "stamina":
                return sortFallback(a.stats[3] - b.stats[3]);
            case "stealth":
                return sortFallback(a.stats[4] - b.stats[4]);
            case "extSpeed":
                return sortFallback(a.stats[5] - b.stats[5]);
        }
    });
    
    const resultsCount = sortedToons.length;

    return (
        <div className={`${className ?? ""} relative w-full`}>
            <div className="flex h-10 mx-1.5 gap-1">
                <Input
                    type="search"
                    placeholder="Search Toons..."
                    icon="magnifier"
                    className="w-full min-w-0 flex-1"
                    onValueChange={(value) => setInputSearch(value)}
                />
                <div
                    className="w-0.5 bg-black/60 rounded-full translate-y-0.5 scale-y-80"
                />
                <div className="flex gap-1">
                    <div ref={sortRef} className="relative">
                        <ShinyButton 
                            className="flex shrink-0 justify-center items-center w-16 h-full"
                            onClick={() => setIsSortOpen((prev) => !prev)}
                        >
                            <ICONS.filter.node color="white" />
                        </ShinyButton>

                        {isSortOpen && (
                            <ul className="absolute right-0 flex flex-col gap-2 top-full mt-2 z-10 w-max min-w-32 rounded-lg bg-black/95 p-1 font-fredoka text-white">
                                {SORT_GROUPS.map((group, index) => (
                                    <li key={index}>
                                        {group.title && <p className="px-1 text-white/50">{group.title}</p>}
                                        <ul className="flex flex-col gap-1">
                                            {group.entry.map(entry => (
                                                <li key={entry}>
                                                    <button
                                                        onClick={() => {
                                                            setSort(entry);
                                                            setIsSortOpen(false);
                                                        }}
                                                        className="w-full text-left px-3 py-1.5 rounded font-fredoka text-white hover:bg-white/10"
                                                        style={{
                                                            background: `${entry === sort ? "#ffffff30" : ""}`,
                                                        }}
                                                    >
                                                        {SortOptions[entry]}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <ShinyButton 
                        className="flex shrink-0 justify-center items-center w-12"
                        onClick={() => setSortDir((prev) => prev === "asc" ? "desc" : "asc")}
                    >
                        <ICONS.sort.node
                            color="white"
                            style={{
                                transform: `scale(1, ${sortDir === "asc" ? "":"-"}1.2)`,
                            }}
                        />
                    </ShinyButton>
                </div>
            </div>

            {resultsCount === 0 ? (
                <div className="flex flex-col items-center p-8 gap-4">
                    <p className="font-fredoka text-white text-2xl text-stroke text-center">
                        Sorry, but your Toon is in another show!
                    </p>
                    <img
                        src="/vee.webp"
                        className="h-64"
                        alt="Vee Render"
                    />
                </div>
            ) : (
                <div>
                    <div className="flex items-center gap-2 mt-1 mx-2 font-fredoka text-[#aaa] tracking-wide">
                        <p>Ordering by: {SortOptions[sort]}</p>
                        {search !== "" && (
                            <>
                                <div className="w-1 h-1 rounded-full bg-[#aaa] mt-0.5"/>
                                <p>Results: {resultsCount} toon{resultsCount > 1 ? "s" : ""}</p>
                            </>
                        )}
                    </div>
                    <ul 
                        className="absolute inset-0 overflow-y-auto grid content-start justify-center gap-2 p-1 scrollbar-thumb-black/80 top-17.5"
                        style={{
                            
                            gridTemplateColumns: `repeat(auto-fit, ${toonButtonSize ?? "136px"})`,
                        }}
                    >
                        {sortedToons.map(item => (
                            <li key={item.slug}>
                                <ToonButton
                                    buttonProps={{
                                        onClick: () => {
                                            if (item.slug == selectedSlug) return;
                                            onSelect(item.slug);
                                        },
                                        active: selectedSlug == item.slug,
                                    }}
                                    toon={item}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
