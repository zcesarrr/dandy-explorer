import type { RequirementParams, RequirementType } from "../types/requirements.types";
import { createRenderer } from "../../../utils/render.utils";
import { ITEM_RARITY_LABELS } from "../../../constants/rarity.constants";
import { a, hl } from "./highlist.utils";
import { twistedsConfig } from "../../twisteds/config";
import { toonsConfig } from "../config";

function getTwistedHref(slug: string): string {
    const twisted = twistedsConfig.items.find(t => t.slug === slug);
    return a(twisted?.name || "", `${twistedsConfig.basePath}/${slug}`)
}

function getToonHref(slug: string): string {
    const toon = toonsConfig.items.find(t => t.slug === slug);
    return a(toon?.name || "", `${toonsConfig.basePath}/${slug}`)
}

const requirementTemplates = {
    ichor: ({ count }) => `${count} Ichor`,
    pumpkin: ({ count }) => `${count} Pumpkins`,
    easter: ({ count }) => `${count} Baskets`,
    ornament: ({ count }) => `${count} Ornaments`,
    encounter: ({ twisted }) => `Encounter ${getTwistedHref(twisted)}`,
    mastery: ({ toon }) => `Complete all Mastery Quests on ${getToonHref(toon)}`,
    research: ({ count, twisted }) => `${count}% Research on ${getTwistedHref(twisted)}`,
    titlesOwning: ({ count }) => `Own ${hl(`${count}+`)} Titles`,
    toonsOwning: ({ count }) => `Own ${hl(count)} or more Toons`,
    pickItems: ({ rarity, count }) => `Pick up ${hl(count)} ${hl(ITEM_RARITY_LABELS[rarity])} or higher tier Items`,
    finishMachines: ({ count }) => `Finish ${hl(count)} Machines`,
    experienceBlackouts: ({ count }) => `Experience ${hl(count)} Blackouts`,
    quests: ({ count, toon }) => `Complete ${hl(count)} Mastery Quests on ${getToonHref(toon)}`,
} satisfies {
    [K in RequirementType]: (p: RequirementParams[K]) => string
};

export const renderRequirement = createRenderer<RequirementParams>(requirementTemplates);
