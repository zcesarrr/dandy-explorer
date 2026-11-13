import type { RequirementParams, RequirementType } from "../types/requirements.types";
import { createRenderer } from "../../../utils/render.utils";
import { ITEM_RARITY_LABELS } from "../../../constants/rarity.constants";

const requirementTemplates = {
    ichor: ({ count }) => `${count} Ichor`,
    pumpkin: ({ count }) => `${count} Pumpkins`,
    easter: ({ count }) => `${count} Baskets`,
    ornament: ({ count }) => `${count} Ornaments`,
    encounter: ({ twisted }) => `Encounter ${twisted}`,
    mastery: ({ toon }) => `Complete all Mastery Quests on ${toon}`,
    research: ({ count, twisted }) => `${count}% Research on ${twisted}`,
    titlesOwning: ({ count }) => `Own ${count}+ Titles`,
    toonsOwning: ({ count }) => `Own ${count} or more Toons`,
    pickItems: ({ rarity, count }) => `Pick up ${count} ${ITEM_RARITY_LABELS[rarity]} or higher tier Items`,
    finishMachines: ({ count }) => `Finish ${count} Machines`,
    experienceBlackouts: ({ count }) => `Experience ${count} Blackouts`,
    quests: ({ count, toon }) => `Complete ${count} Mastery Quests on ${toon}`,
} satisfies {
    [K in RequirementType]: (p: RequirementParams[K]) => string
};

export const renderRequirement = createRenderer<RequirementParams>(requirementTemplates);
