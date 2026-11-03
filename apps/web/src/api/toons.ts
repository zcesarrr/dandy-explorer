import type { Ability, Quest, Requirement, Toon, ToonDetail } from "@dandy-explorer/shared";
import { abilities, quests, requirements, stats } from "../mocks/dbMock";
import { apiFetch } from "../utils/api";

async function delay() {
    await new Promise(resolve => setTimeout(resolve, 250));
}

export async function getToons(): Promise<Toon[]> {
    return await apiFetch<Toon[]>("/toons");
}

export async function getToon(id: number): Promise<ToonDetail> {
    const toon = await apiFetch<ToonDetail>(`/toons/${id}`);

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
