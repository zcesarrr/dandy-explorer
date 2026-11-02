export type RequirementType = 
    "ichor" | 
    "pumpkin" |
    "easter" |
    "ornament" |
    "encounter" |
    "research" |
    "mastery" |
    "toonsOwning" |
    "titlesOwning";

export type Requirement = {
    id: number;
    toon_id: number;
    type: RequirementType;
    label: string;
};
