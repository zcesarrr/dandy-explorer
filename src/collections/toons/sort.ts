import type { Ability, AbilityType } from "./types/abilities.types";
import type { CollectionSort, SortOption } from "../../types/collection.types";
import type { EventTheme, ToonRarity } from "../../types/rarity.types";
import type { Toon } from "./types/toons.types";
import { compareNames } from "../../utils/collectionFiltering.utils";

const RARITY_PRIORITY: Record<ToonRarity, number> = {
    common: 0,
    main: 1,
};

const CATEGORY_PRIORITY: Record<EventTheme, number> = {
    none: 0,
    easter: 1,
    halloween: 2,
    holiday: 3,
};

const ABILITY_TYPE_PRIORITY: Record<AbilityType, number> = {
    passive: 0,
    active: 1,
};

function getAbilityPriority(abilities: Ability[]): number {
    if (abilities.length > 1) return abilities.length;
    return ABILITY_TYPE_PRIORITY[abilities[0]?.type ?? "passive"];
}

const STATS = [
    { key: "health", label: "Health" },
    { key: "skillCheck", label: "Skill Check" },
    { key: "moveSpeed", label: "Movement Speed" },
    { key: "stamina", label: "Stamina" },
    { key: "stealth", label: "Stealth" },
    { key: "extSpeed", label: "Extraction Speed" },
] as const;

const statOptions: SortOption<Toon>[] = STATS.map(({ key, label }, index) => ({
    key,
    label,
    compare: (a: Toon, b: Toon) => (a.stats[index] ?? 0) - (b.stats[index] ?? 0),
}));

export const TOON_SORT: CollectionSort<Toon> = {
    defaultKey: "name",
    groups: [
        {
            options: [
                {
                    key: "name",
                    label: "Name",
                    compare: (a, b) => compareNames(a.name, b.name),
                },
                {
                    key: "rarity",
                    label: "Rarity",
                    compare: (a, b) => RARITY_PRIORITY[a.rarity] - RARITY_PRIORITY[b.rarity],
                },
                {
                    key: "category",
                    label: "Event",
                    compare: (a, b) => CATEGORY_PRIORITY[a.category] - CATEGORY_PRIORITY[b.category],
                },
                {
                    key: "abilityType",
                    label: "Ability Type",
                    compare: (a, b) => getAbilityPriority(a.abilities) - getAbilityPriority(b.abilities),
                },
            ],
        },
        {
            title: "Stats",
            options: statOptions,
        },
    ],
};
