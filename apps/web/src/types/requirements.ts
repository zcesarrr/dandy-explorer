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
    type: RequirementType;
    label: string;
};
