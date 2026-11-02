import type { Ability, Quest, Requirement, Toon, ToonDetail } from "@dandy-explorer/shared";
import { abilities, quests, requirements, stats, toons } from "../mocks/dbMock";

async function delay() {
    await new Promise(resolve => setTimeout(resolve, 750));
}

export async function getToons(): Promise<Toon[]> {
    await delay();

    return toons;
}

export async function getToon(id: number): Promise<ToonDetail> {
    await delay();

    const toon = toons.find(toon => toon.id === id);
    if (!toon) throw new Error("Toon not found");

    return {
        ...toon,
        stats: stats.filter(stat => stat.toon_id === toon.id),
    };
}

export async function getToonAbilities(toonId: number): Promise<Ability[]> {
    await delay();

    return abilities.filter(ability => ability.toon_id === toonId);
}

export async function getToonQuests(toonId: number): Promise<Quest[]> {
    await delay();

    return quests.filter(quest => quest.toon_id === toonId);
}

export async function getToonRequirements(toonId: number): Promise<Requirement[]> {
    await delay();

    return requirements.filter(requirement => requirement.toon_id === toonId);
}
