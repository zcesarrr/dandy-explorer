import { STATS_DATA } from "../../../constants/stats.constants";
import type { IconId } from "../../../types/icons.types";
import type { EventTheme, Rarity } from "../../../types/rarity.types";

export const TRINKET_CATEGORY_DATA = {
    skillCheck: { ...STATS_DATA.skillCheck, Icon: "skillCheck" },
    moveSpeed: { ...STATS_DATA.moveSpeed, label: "Movement", Icon: "movementSpeed" },
    stamina: { ...STATS_DATA.stamina, Icon: "stamina" },
    stealth: { ...STATS_DATA.stealth, Icon: "stealth" },
    extSpeed: { ...STATS_DATA.extSpeed, label: "Extraction", Icon: "extractionSpeed" },
    other: { label: "Other", color: "#343434", Icon: "other" },
} satisfies Record<Exclude<keyof typeof STATS_DATA, "health"> | "other", { label: string, color: string, Icon: IconId }>;

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
    rarity: Rarity;
    requirement: TrinketRequirement;
};
