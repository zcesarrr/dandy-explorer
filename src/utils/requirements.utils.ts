// Today, November 16, 2026, I regret creating this type because it might have been easier to just extend the quests utils.
// For now I can't take the time to refactorize this, so I will mantain it for longer.
import type { RequirementParams, RequirementType } from "../types/requirements.types";
import { createRenderer } from "./render.utils";
import { ITEM_RARITY_LABELS } from "../constants/rarity.constants";
import { a, hl } from "../collections/toons/utils/highlist.utils";
import { twistedsConfig } from "../collections/twisteds/config";
import { toonsConfig } from "../collections/toons/config";
import type { IconId } from "../types/icons.types";

export const REQUIREMENT_ICON = {
    ichor: "waterdrop",
    pumpkin: "pumpkin",
    easter: "easterEgg",
    ornament: "ornament",
    encounter: "question",
    research: "magnifier",
    researchAny: "magnifier",
    mastery: "medal",
    toonsOwning: "person",
    titlesOwning: "diploma",
    pickItems: "candy",
    experienceBlackouts: "lightbulbBolt",
    finishMachines: "gear",
    quests: "starCircle",
    surviveFloors: "moon",
    buyDandysShop: "shop",
    trinketsOwning: "wrench",
    encounterTwisteds: "siren",
    reachFloor: "exitDoor",
    travel: "running",
    custom: "clipboard",
} as const satisfies Record<RequirementType, IconId> ;

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
    researchAny: ({ researchCount, twistedsCount }) => { 
        const manyTwisteds = twistedsCount > 1;
        return `${researchCount}% Research on ${hl(!manyTwisteds ? "any" : twistedsCount)} Twisted${manyTwisteds ? "s" : ""}`;
    },
    titlesOwning: ({ count }) => `Own ${hl(`${count}+`)} Titles`,
    toonsOwning: ({ count }) => `Own ${hl(count)} or more Toons`,
    pickItems: ({ rarity, count }) => `Pick up ${hl(count)} ${rarity ? `${hl(ITEM_RARITY_LABELS[rarity])} or higher tier` : ""} Items`,
    finishMachines: ({ count }) => `Finish ${hl(count)} Machines`,
    experienceBlackouts: ({ count }) => `Experience ${hl(count)} Blackouts`,
    quests: ({ count, toon }) => `Complete ${hl(count)} Mastery Quests on ${getToonHref(toon)}`,
    surviveFloors: ({ count }) => `Survive ${hl(count)} Floors`,
    buyDandysShop: ({ count }) => `Buy ${hl(count)} Items from Dandy's Elevator Shop`,
    trinketsOwning: ({ count }) => `Own ${hl(count)} or more Trinkets`,
    encounterTwisteds: ({ count }) => `Encounter ${hl(count)} Twisteds!`,
    reachFloor: ({ count }) => `Reach Floor ${hl(count)}!`,
    travel: ({ meters }) => `Travel ${hl(meters)} Meters!`,
    custom: ({ text }) => text,
} satisfies {
    [K in RequirementType]: (p: RequirementParams[K]) => string
};

export const renderRequirement = createRenderer<RequirementParams>(requirementTemplates);
