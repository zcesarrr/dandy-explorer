import type { Ability } from "./abilities.js";
import type { Quest } from "./quests.js";
import type { Requirement } from "./requirements.js";
import type { Stat } from "./stats.js";

export type ToonRarity = "normal" | "main";
export type ToonCategory = "none" | "halloween" | "holiday" | "easter";

export type Toon = {
    id: number;
    name: string;
    icon_url: string;
    rarity: ToonRarity;
    category: ToonCategory;
};

export type ToonDetailed = Toon & {
    stats: Stat[];
    abilities: Ability[];
    quests: Quest[];
    requirements: Requirement[];
};
