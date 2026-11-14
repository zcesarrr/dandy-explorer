import type { Ability } from "./abilities.types";
import type { EventTheme, ToonRarity } from "../../../types/rarity.types";
import type { Quest } from "./quests.types";
import type { Requirement } from "../../../types/requirements.types";

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
