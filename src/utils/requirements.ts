import type { RequirementParams, RequirementType } from "../types/requirements";
import { createRenderer } from "./render";

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
    pickItems: ({ rarity, count }) => `Pick up ${count} ${rarity} or higher tier Items`,
} satisfies {
    [K in RequirementType]: (p: RequirementParams[K]) => string
};

export const renderRequirement = createRenderer<RequirementParams>(requirementTemplates);
