import { STATS_DATA } from "../../../constants/stats.constants";
import type { EventTheme } from "../../../types/rarity.types";

export const TRINKET_CATEGORY_DATA = {
    skillCheck: STATS_DATA.skillCheck,
    moveSpeed: { ...STATS_DATA.moveSpeed, label: "Movement" },
    stamina: STATS_DATA.stamina,
    stealth: STATS_DATA.stealth,
    extSpeed: { ...STATS_DATA.extSpeed, label: "Extraction" },
    other: { label: "Other", color: "#343434" },
} satisfies Record<Exclude<keyof typeof STATS_DATA, "health"> | "other", { label: string, color: string }>;

export type TrinketCategory = keyof typeof TRINKET_CATEGORY_DATA;
type RequirementParams = {
    research: {
        count: number,
        twisted: string;
    };
    shop: {
        price: number;
    };
};
export type TrinketRequirementType = keyof RequirementParams;
export type TrinketRequirement = {
    [K in TrinketRequirementType]: {
        type: K;
        params: RequirementParams[K];
    };
}[TrinketRequirementType];

export type Trinket = {
    slug: string;
    name: string;
    iconUrl: string;
    description: string;
    event: EventTheme;
    category: TrinketCategory;
    requirement: TrinketRequirement;
};
