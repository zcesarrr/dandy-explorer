import { useEffect, useRef, useState } from "react";
import Input from "../customs/Input";
import ToonButton from "../ToonButton";
import type { Toon, ToonRarity } from "../../types/toons";
import ShinyButton from "../customs/ShinyButton";
import ICONS from "../../constants/icons";

type SortOption = "name" | "rarity";
type SortDir = "asc" | "desc";

const SORT_OPTIONS: { value: SortOption, label: string }[] = [
    { value: "name", label: "Name" },
    { value: "rarity", label: "Rarity" },
];

const RARITY_PRIORITY: Record<ToonRarity, number> = {
    normal: 0,
    main: 1,
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

    const [sort, setSort] = useState<SortOption>("name");
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

    const sortedToons = [...filteredToons].sort((a, b) => {
        switch (sort) {
            case "name":
                return a.name.localeCompare(b.name);
            case "rarity":
                const rarityDifference = RARITY_PRIORITY[a.rarity] - RARITY_PRIORITY[b.rarity];
                return rarityDifference || a.name.localeCompare(b.name);
        }
    });
    if (sortDir == "desc") sortedToons.reverse();
    
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
                            <ul className="absolute right-0 flex flex-col gap-1 top-full mt-2 z-10 w-max min-w-32 rounded-lg bg-black/90 p-1">
                                {SORT_OPTIONS.map(item => (
                                    <li key={item.value}>
                                        <button
                                            onClick={() => {
                                                setSort(item.value);
                                                setIsSortOpen(false);
                                            }}
                                            className="w-full text-left px-3 py-1.5 rounded font-fredoka text-white hover:bg-white/10"
                                            style={{
                                                background: `${item.value === sort ? "#ffffff30" : ""}`,
                                            }}
                                        >
                                            {item.label}
                                        </button>
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
                                scale: sortDir === "asc" ? "1.2" : "-1.2",
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
                    {search !== "" && (
                        <p className="mt-1 mx-2 font-fredoka text-[#aaa]">Results: {resultsCount} toon{resultsCount > 1 ? "s" : ""}</p>
                    )}
                    <ul 
                        className="absolute inset-0 overflow-y-auto grid content-start justify-center gap-2 p-1 scrollbar-thumb-black/80"
                        style={{
                            top: `${search !== "" ? "70px" : "50px"}`,
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
