import type { QuestParams, QuestType } from "../types/quests";

const questTemplates: {
    [K in QuestType]: (p: QuestParams[K]) => string;
} = {
    custom: ({ text }) => text,
    travel: ({ meters }) => `Travel ${meters} Meters!`,
    dandysShop: ({ count }) => `Purchase ${count} Items from Dandy's Elevator Shop!`,
    pickItems: ({ count }) => `Pick up ${count} Items!`,
    surviveFloors: ({ count }) => `Survive ${count} Floors!`,
    surviveFloorsWith: ({ count, toon }) => `Survive ${count} Floors with ${toon} in your run!`,
    surviveFloorsWithAny: ({ count, any }) => `Survive ${count} Floors with any ${any} in your run!`,
    useItems: ({ count  }) => `Use ${count} Items!`,
    finishMachines: ({ count }) => `Finish ${count} Machines!`,
    pickCapsules: ({ count }) => `Pick up ${count} Research Capsules!`,
    blackouts: ({ count }) => `Experience ${count} Blackouts!`,
    ichorSpills: ({ count }) => `Experience ${count} Ichor Spills!`,
    encounterTwisteds: ({ count }) => `Encounter ${count} Twisteds!`,
    reachFloor: ({ count }) => `Reach Floor ${count}!`,
    useActiveAbility: ({ count }) => `Use this Toon's Active Ability ${count} Times!`,
    usePassiveAbility: ({ count }) => `Use this Toon's Passive Ability ${count} Times!`,
    useInstructions: ({ count }) => `Use ${count} Instructions!`,
};

export function renderQuest<K extends QuestType>(q: { type: K, params: QuestParams[K] }) {
    return questTemplates[q.type](q.params);
}
