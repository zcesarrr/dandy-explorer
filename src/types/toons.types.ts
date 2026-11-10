import type { Ability } from "./abilities.types";
import type { Quest } from "./quests.types";
import type { Requirement } from "./requirements.types";

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
    quests: Quest[];
    requirements: Requirement[];
};
