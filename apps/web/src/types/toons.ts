import type { Ability } from "./abilities.js";
import type { Requirement } from "./requirements.js";

export type ToonRarity = "normal" | "main";
export type ToonCategory = "none" | "halloween" | "holiday" | "easter";

export type Toon = {
    slug: string;
    name: string;
    iconUrl: string;
    rarity: ToonRarity;
    category: ToonCategory;
    stats: [number, number, number, number, number, number];
    abilities: Ability[];
    quests: string[];
    requirements: Requirement[];
};
