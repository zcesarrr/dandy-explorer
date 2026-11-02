export type AbilityType = "passive" | "active";

export type Ability = {
    id: number;
    toon_id: number;
    name: string;
    type: AbilityType,
    description: string;
};
