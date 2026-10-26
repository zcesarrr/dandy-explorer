import type { Ability } from "./abilities";
import type { Stat } from "./stats";

export type ToonRarity = "normal" | "main";
export type ToonCategory = "none" | "halloween" | "holiday" | "easter";

export type Toon = {
    name: string;
    iconUrl: string;
    stats: Stat[];
    abilities: Ability[];
    rarity: ToonRarity;
    category: ToonCategory;
};
