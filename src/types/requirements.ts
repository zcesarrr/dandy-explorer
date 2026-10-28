export type RequirementType = 
    "ichor" | 
    "pumpkin" |
    "encounter" |
    "research" |
    "mastery" |
    "toonsOwning" |
    "titlesOwning";

export type Requirement = {
    type: RequirementType;
    label: string;
};
