import type { ItemRarity } from "./rarity.types";

export type RequirementParams = {
    ichor: { count: number },
    pumpkin: { count: number },
    easter: { count: number },
    ornament: { count: number },
    encounter: { twisted: string },
    research: { count: number, twisted: string },
    researchAny: { researchCount: number, twistedsCount: number },
    mastery: { toon: string },
    toonsOwning: { count: number },
    titlesOwning: { count: number },
    pickItems: { rarity?: ItemRarity, count: number },
    finishMachines: { count: number },
    experienceBlackouts: { count: number },
    quests: { count: number, toon: string },
    surviveFloors: { count: number },
    buyDandysShop: { count: number },
    trinketsOwning: { count: number },
    encounterTwisteds: { count: number };
    reachFloor: { count: number };
    travel: { meters: number },
    custom: { text: string };
};

export type RequirementType = keyof RequirementParams;

export type Requirement = {
    [K in RequirementType]: { type: K, params: RequirementParams[K] };
}[RequirementType];
