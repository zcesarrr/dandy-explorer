export type RequirementType = 
    "ichor" | 
    "pumpkin" |
    "easter" |
    "encounter" |
    "research" |
    "mastery" |
    "toonsOwning" |
    "titlesOwning";

export type Requirement = {
    type: RequirementType;
    label: string;
};
