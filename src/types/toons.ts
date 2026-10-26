import type { Ability } from "./abilities";
import type { Stat } from "./stats";

export type Toon = {
    name: string;
    iconUrl: string;
    stats: Stat[];
    abilities: Ability[];
};
