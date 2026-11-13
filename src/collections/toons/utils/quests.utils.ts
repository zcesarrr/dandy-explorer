import type { QuestParams, QuestType } from "../types/quests.types";
import { createRenderer } from "../../../utils/render.utils";

function hl(value: string | number) {
    return `{{${value}}}`;
}

function getToons(toons: string[]) {
    let result = "";

    const length = toons.length;
    for (let i = 0; i < length; i++) {
        result += hl(toons[i] || "");
        if (i < length - 1) {
            result += i < (length - 2) ? ", " : " and ";
        }
    }

    return result;
}

const questTemplates = {
    custom: ({ text }) => text,
    travel: ({ meters }) => `Travel ${hl(meters)} Meters!`,
    dandysShop: ({ count }) => `Purchase ${hl(count)} Items from Dandy's Elevator Shop!`,
    pickItems: ({ count }) => `Pick up ${hl(count)} Items!`,
    surviveFloors: ({ count }) => `Survive ${hl(count)} Floors!`,
    surviveFloorsWith: ({ count, toons }) => `Survive ${hl(count)} Floors with ${getToons(toons)} in your run!`,
    surviveFloorsWithAny: ({ count, any }) => `Survive ${hl(count)} Floors with any ${hl(any)} in your run!`,
    surviveFloorsWithOther: ({ count, playersCount }) => `Survive ${hl(count)} Floors with ${hl(playersCount)} or more Players in your round!`,
    useItems: ({ count  }) => `Use ${hl(count)} Items!`,
    finishMachines: ({ count }) => `Finish ${hl(count)} Machines!`,
    pickCapsules: ({ count }) => `Pick up ${hl(count)} Research Capsules!`,
    blackouts: ({ count }) => `Experience ${hl(count)} Blackouts!`,
    ichorSpills: ({ count }) => `Experience ${hl(count)} Ichor Spills!`,
    encounterTwisteds: ({ count }) => `Encounter ${hl(count)} Twisteds!`,
    reachFloor: ({ count }) => `Reach Floor ${hl(count)}!`,
    useActiveAbility: ({ count }) => `Use this Toon's Active Ability ${hl(count)} Times!`,
    usePassiveAbility: ({ count }) => `Use this Toon's Passive Ability ${hl(count)} Times!`,
    useInstructions: ({ count }) => `Use ${hl(count)} Instructions!`,
    collectResearch: ({ count }) => `Collect ${hl(count)}% of Twisted Research!`,
} satisfies {
    [K in QuestType]: (p: QuestParams[K]) => string;
};

export const renderQuest = createRenderer<QuestParams>(questTemplates);
