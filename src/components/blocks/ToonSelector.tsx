import { useEffect, useRef, useState } from "react";
import Input from "../customs/Input";
import ToonButton from "../ToonButton";
import type { Toon } from "../../types/toons";
import ShinyButton from "../customs/ShinyButton";
import ICONS from "../../constants/icons";
import { sortLabel, type SortKey } from "../../utils/toonsFiltering";
import { useToonListParams } from "../../hooks/useToonListParams";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";

const SORT_GROUPS: { 
    title?: string,
    entries: SortKey[],
}[] = [
    { 
        entries: ["name", "rarity", "category"],
    },
    {
        title: "Stats",
        entries: ["health", "skillCheck", "moveSpeed", "stamina", "stealth", "extSpeed"],
    },
];

export type ToonSelectorProps = {
    className?: string;
    toons: Toon[];
    getHrefToonButton: (slug: string) => string;
    toonButtonSize?: string;
};

export default function ToonSelector({ className, toons, getHrefToonButton, toonButtonSize = undefined }: ToonSelectorProps) {
    const { search, sortKey, sortDir, setSearch, setSortKey, setSortDir, getParams } = useToonListParams();

    const [searchInput, setSearchInput] = useState<string>(search);
    const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

    const sortRef = useRef<HTMLDivElement>(null);
    const listRef = useScrollRestoration<HTMLUListElement>("toon-selector");

    useEffect(() => {
        if (!isSortOpen) return;

        const handleClick = (e: MouseEvent) => {
            if (!sortRef.current?.contains(e.target as Node)) setIsSortOpen(false);
        };

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsSortOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isSortOpen]);

    const resultsCount = toons.length;

    return (
        <div className={`${className ?? ""} relative w-full`}>
            <div className="flex h-10 mx-1.5 gap-1">
                <Input
                    ariaLabel="Search Toons"
                    type="search"
                    placeholder="Search Toons..."
                    icon="magnifier"
                    className="w-full min-w-0 flex-1"
                    value={searchInput.slice(0, 20)}
                    maxLength={20}
                    onChange={(value) => {
                        setSearchInput(value);
                        setSearch(value);
                    }}
                />
                <div
                    className="w-0.5 bg-black/60 rounded-full translate-y-0.5 scale-y-80"
                />
                <div className="flex gap-1">
                    <div ref={sortRef} className="relative">
                        <ShinyButton 
                            ariaLabel="Toggle sort options menu"
                            ariaExpanded={isSortOpen}
                            ariaControls="sortMenu"
                            className="flex shrink-0 justify-center items-center w-16 h-full"
                            onClick={() => setIsSortOpen((prev) => !prev)}
                        >
                            <ICONS.filter color="white" />
                        </ShinyButton>
                        <ul 
                            hidden={!isSortOpen}
                            id="sortMenu"
                            className="absolute right-0 flex flex-col gap-2 top-full mt-2 z-10 w-max min-w-32 rounded-lg bg-black/95 p-1 font-fredoka text-white"
                        >
                            {SORT_GROUPS.map((group, index) => (
                                <li key={index}>
                                    {group.title && <p className="px-1 text-white/50">{group.title}</p>}
                                    <ul className="flex flex-col gap-1">
                                        {group.entries.map(key => (
                                            <li key={key}>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSortKey(key);
                                                        setIsSortOpen(false);
                                                    }}
                                                    className="w-full text-left px-3 py-1.5 rounded font-fredoka text-white hover:bg-white/10 hover:cursor-pointer"
                                                    style={{
                                                        background: key === sortKey ? "#ffffff30" : "",
                                                        cursor: key === sortKey ? "default" : "",
                                                    }}
                                                >
                                                    {sortLabel(key)}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ShinyButton 
                        className="flex shrink-0 justify-center items-center w-12"
                        ariaLabel="Switch sort direction"
                        onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
                    >
                        <ICONS.sort
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
                        width={256}
                        alt="Vee Render"
                        loading="lazy"
                    />
                </div>
            ) : (
                <div>
                    <div className="flex items-center gap-2 mt-1 mx-2 font-fredoka text-[#aaa] tracking-wide max-xs:text-sm">
                        <p>Ordering by: {sortLabel(sortKey)}</p>
                        {search.trim() !== "" && (
                            <>
                                <div className="w-1 h-1 rounded-full bg-[#aaa] mt-0.5"/>
                                <p>Results: {resultsCount} toon{resultsCount > 1 ? "s" : ""}</p>
                            </>
                        )}
                    </div>
                    <ul
                        ref={listRef}
                        className="absolute inset-0 overflow-y-auto grid content-start justify-center gap-x-2 gap-y-3 p-1 scrollbar-thumb-black/80 top-17.5"
                        style={{
                            gridTemplateColumns: `repeat(auto-fit, ${toonButtonSize ?? "136px"})`,
                        }}
                    >
                        {toons.map(item => (
                            <li key={item.slug}>
                                <ToonButton
                                    buttonProps={{
                                        nav: { href: getHrefToonButton(item.slug) },
                                        onClick: () => {
                                            sessionStorage.setItem("from", `/${getParams()}`);
                                        },
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
