import type { Ability, AbilityType } from "../types/abilities.types";
import type { Toon, ToonCategory, ToonRarity } from "../types/toons.types";

const SORT_LABELS = {
    name: "Name",
    rarity: "Rarity",
    category: "Event",
    abilityType: "Ability Type",
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

export const SORT_KEYS = Object.keys(SORT_LABELS) as SortKey[];

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

const ABILITY_TYPE_PRIORITY: Record<AbilityType, number> = {
    passive: 0,
    active: 1,
};

const STAT_INDEX: Partial<Record<SortKey, number>> = {
    health: 0,
    skillCheck: 1,
    moveSpeed: 2,
    stamina: 3,
    stealth: 4,
    extSpeed: 5,
};

function normalizeString(str: string): string {
    return str.toLowerCase().trim();
}

function getAbilityPriorityResult(abilities: Ability[]): number {
    if (abilities.length > 1) return abilities.length;
    return ABILITY_TYPE_PRIORITY[abilities[0]?.type ?? "passive"];
}

const collator = new Intl.Collator("en", { sensitivity: "base" });
export function filterToons(toons: Toon[], search: string, sortKey: SortKey, sortDir: SortDir): Toon[] {
    const dir = sortDir === "asc" ? 1 : -1;

    const query = normalizeString(search);
    const filteredToons = query !== "" 
        ? toons.filter((toon) => normalizeString(toon.name).includes(query))
        : toons;

    return [...filteredToons].sort((a, b) => {
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
            case "abilityType":
                return sortFallback(
                    getAbilityPriorityResult(a.abilities) - getAbilityPriorityResult(b.abilities)
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
