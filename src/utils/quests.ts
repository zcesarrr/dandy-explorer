import type { QuestParams, QuestType } from "../types/quests";
import { createRenderer } from "./render";

function getToons(toons: string[]) {
    let result = "";

    const length = toons.length;
    for (let i = 0; i < length; i++) {
        result += toons[i];
        if (i < length - 1) {
            result += i < (length - 2) ? ", " : " and ";
        }
    }

    return result;
}

const questTemplates = {
    custom: ({ text }) => text,
    travel: ({ meters }) => `Travel ${meters} Meters!`,
    dandysShop: ({ count }) => `Purchase ${count} Items from Dandy's Elevator Shop!`,
    pickItems: ({ count }) => `Pick up ${count} Items!`,
    surviveFloors: ({ count }) => `Survive ${count} Floors!`,
    surviveFloorsWith: ({ count, toons }) => `Survive ${count} Floors with ${getToons(toons)} in your run!`,
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
} satisfies {
    [K in QuestType]: (p: QuestParams[K]) => string;
};

export const renderQuest = createRenderer<QuestParams>(questTemplates);
