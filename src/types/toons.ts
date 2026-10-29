import type { Ability } from "./abilities";
import type { Requirement } from "./requirements";
import type { Stat } from "./stats";

export type ToonRarity = "normal" | "main";
export type ToonCategory = "none" | "halloween" | "holiday" | "easter";

export type Toon = {
    id: number;
    name: string;
    iconUrl: string;
    stats: Stat[];
    abilities: Ability[];
    rarity: ToonRarity;
    category: ToonCategory;
    quests?: string[];
    requirements?: Requirement[];
};
