import { useEffect, useRef, useState } from "react";
import Input from "../customs/Input";
import ShinyButton from "../customs/ShinyButton";
import ICONS from "../../constants/icons.constants";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";
import { findSortOption } from "../../utils/collectionFiltering.utils";
import type { CollectionConfig, CollectionItem } from "../../types/collection.types";
import { useCollectionListParams } from "../../hooks/useCollectionListParams";

export type CollectionSelectorProps<T extends CollectionItem> = {
    className?: string;
    config: CollectionConfig<T>;
    items: readonly T[];
    getHrefItemButton: (slug: string) => string;
    itemButtonSize?: string;
};

export default function CollectionSelector<T extends CollectionItem>({
    className,
    config,
    items,
    getHrefItemButton,
    itemButtonSize = undefined
}: CollectionSelectorProps<T>) {
    const { labels, sort, ItemImage, ItemButton } = config;
    const { search, sortKey, sortDir, setSearch, setSortKey, setSortDir, getParams } = useCollectionListParams(sort);

    const [searchInput, setSearchInput] = useState<string>(search);
    const [isSortOpen, setIsSortOpen] = useState<boolean>(false);

    const sortRef = useRef<HTMLDivElement>(null);
    const listRef = useScrollRestoration<HTMLUListElement>(config.id);

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

    const sortLabel = findSortOption(sort.groups, sortKey)?.label ?? "";
    const resultsCount = items.length;

    return (
        <div className={`${className ?? ""} relative w-full`}>
            <div className="flex h-10 mx-1.5 gap-1">
                <Input
                    ariaLabel={`Search ${labels.plural}`}
                    type="search"
                    placeholder={labels.searchPlaceholder}
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
                            {sort.groups.map((group, index) => (
                                <li key={index}>
                                    {group.title && <p className="px-1 text-white/50">{group.title}</p>}
                                    <ul className="flex flex-col gap-1">
                                        {group.options.map(option => (
                                            <li key={option.key}>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSortKey(option.key);
                                                        setIsSortOpen(false);
                                                    }}
                                                    className="w-full text-left px-3 py-1.5 rounded font-fredoka text-white hover:bg-white/10 hover:cursor-pointer"
                                                    style={{
                                                        background: option.key === sortKey ? "#ffffff30" : "",
                                                        cursor: option.key === sortKey ? "default" : "",
                                                    }}
                                                >
                                                    {option.label}
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
                        {config.labels.emptyMessage}
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
                        <p>Ordering by: {sortLabel}</p>
                        {search.trim() !== "" && (
                            <>
                                <div className="w-1 h-1 rounded-full bg-[#aaa] mt-0.5"/>
                                <p>Results: {resultsCount} {(resultsCount > 1 ? labels.plural : labels.singular).toLowerCase()}</p>
                            </>
                        )}
                    </div>
                    <ul
                        ref={listRef}
                        className="absolute inset-0 overflow-y-auto grid content-start justify-center gap-x-2 gap-y-3 p-1 top-17.5"
                        style={{
                            gridTemplateColumns: `repeat(auto-fit, ${itemButtonSize ?? "132px"})`,
                        }}
                    >
                        {items.map(item => (
                            <li key={item.slug}>
                                <ItemButton
                                    buttonProps={{
                                        nav: { href: getHrefItemButton(item.slug) },
                                        onClick: () => {
                                            sessionStorage.setItem("from", `${config.basePath}${getParams()}`);
                                        },
                                    }}
                                    item={item}
                                    ItemImage={ItemImage}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
