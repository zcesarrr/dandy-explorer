export type RequirementType = 
    "ichor" | 
    "encounter" |
    "research" |
    "mastery" |
    "toonsOwning" |
    "titlesOwning";

export type Requirement = {
    type: RequirementType;
    label: string;
};
