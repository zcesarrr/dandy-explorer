export type RequirementParams = {
    ichor: { count: number },
    pumpkin: { count: number },
    easter: { count: number },
    ornament: { count: number },
    encounter: { twisted: string },
    research: { count: number, twisted: string },
    mastery: { toon: string },
    toonsOwning: { count: number },
    titlesOwning: { count: number },
    pickItems: { rarity: "Common" | "Uncommon" | "Rare" | "Very Rare" | "Ultra Rare", count: number };
    finishMachines: { count: number };
};

export type RequirementType = keyof RequirementParams;

export type Requirement = {
    [K in RequirementType]: { type: K, params: RequirementParams[K] };
}[RequirementType];
