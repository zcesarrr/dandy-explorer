import type { ItemRarity } from "./rarity.types";

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
    pickItems: { rarity: ItemRarity, count: number },
    finishMachines: { count: number },
    experienceBlackouts: { count: number },
    quests: { count: number, toon: string },
};

export type RequirementType = keyof RequirementParams;

export type Requirement = {
    [K in RequirementType]: { type: K, params: RequirementParams[K] };
}[RequirementType];
