import type { Toon, ToonCategory, ToonRarity } from "../types/toons";

const SORT_LABELS = {
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

export type SortKey = keyof typeof SORT_LABELS;
export type SortDir = "asc" | "desc";

export const DEFAULT_SORT_KEY: SortKey = "name";
export const DEFAULT_SORT_DIR: SortDir = "asc";

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

const STAT_INDEX: Partial<Record<SortKey, number>> = {
    health: 0,
    skillCheck: 1,
    moveSpeed: 2,
    stamina: 3,
    stealth: 4,
    extSpeed: 5,
};

const collator = new Intl.Collator(undefined, { sensitivity: "base" });
export function sortToons(toons: Toon[], sortKey: SortKey, sortDir: SortDir): Toon[] {
    const dir = sortDir === "asc" ? 1 : -1;

    return [...toons].sort((a, b) => {
        const byName = collator.compare(a.name, b.name);
        const sortFallback = (result: number) => result * dir || byName;

        switch (sortKey) {
            case "name": return byName * dir;
            case "rarity":
                return sortFallback(
                    (RARITY_PRIORITY[a.rarity] - RARITY_PRIORITY[b.rarity])
                );
            case "category":
                return sortFallback(
                    (CATEGORY_PRIORITY[a.category] - CATEGORY_PRIORITY[b.category])
                );
            default: {
                const index = STAT_INDEX[sortKey];
                if (index === undefined) return byName;

                return sortFallback((a.stats[index] ?? 0) - (b.stats[index] ?? 0));
            }
        }
    });
}

export function sortLabel(sortKey: SortKey) {
    return SORT_LABELS[sortKey];
}
