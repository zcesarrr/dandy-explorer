import type { Ability } from "./abilities.types";
import type { EventTheme } from "./general.types";
import type { Quest } from "./quests.types";
import type { Requirement } from "./requirements.types";

export type ToonRarity = "normal" | "main";

export type Toon = {
    slug: string;
    name: string;
    iconUrl: string;
    rarity: ToonRarity;
    category: EventTheme;
    stats: [number, number, number, number, number, number];
    abilities: Ability[];
    quests: Quest[];
    requirements: Requirement[];
};
