import type { EventTheme } from "../../../types/general.types";

export const TRINKET_DATA = {
    skillCheck: { label: "Skill Check", color: "#d09257" },
    movement: { label: "Movement", color: "#cfd05e" },
    stamina: { label: "Stamina", color: "#5ccf5a" },
    stealth: { label: "Stealth", color: "#5c90d0" },
    extraction: { label: "Extraction", color: "#8551cf" },
    other: { label: "Other", color: "#343434" },
};

export type TrinkeyCategory = keyof typeof TRINKET_DATA;
export type RequirementParams = {
    research: {
        count: number,
        twisted: string;
    };
    shop: {
        price: number;
    };
};
export type RequirementType = keyof RequirementParams;
export type Requirement = {
    [K in RequirementType]: {
        type: K;
        params: RequirementParams[K];
    };
}[RequirementType];

export type Trinket = {
    slug: string;
    name: string;
    iconUrl: string;
    description: string;
    event: EventTheme;
    category: TrinkeyCategory;
    requirement: Requirement;
};
