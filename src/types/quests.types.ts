export type QuestParams = {
    finishMachines: { count: number };
    pickCapsules: { count: number };
    pickItems: { count: number };
    surviveFloors: { count: number };
    surviveFloorsWith: { count: number, toons: string[] };
    surviveFloorsWithAny: { count: number, any: string };
    surviveFloorsWithOther: { count: number, playersCount: number };
    reachFloor: { count: number };
    travel: { meters: number };
    useItems: { count: number };
    useInstructions: { count: number };
    usePassiveAbility: { count: number };
    useActiveAbility: { count: number };
    blackouts: { count: number };
    ichorSpills: { count: number };
    dandysShop: { count: number };
    encounterTwisteds: { count: number };
    collectResearch: { count: number };
    custom: { text: string };
};

export type QuestType = keyof QuestParams;

export type Quest = {
    [K in QuestType]: { type: K; params: QuestParams[K] };
}[QuestType];
