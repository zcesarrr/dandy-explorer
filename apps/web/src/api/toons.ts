import type { Ability, Toon, ToonDetail } from "@dandy-explorer/shared";
import { abilities, stats, toons } from "../mocks/dbMock";

export async function getToons(): Promise<Toon[]> {
    return toons;
}

export async function getToon(id: number): Promise<ToonDetail> {
    const toon = toons.find(toon => toon.id === id);
    if (!toon) throw new Error("Toon not found");

    return {
        ...toon,
        stats: stats.filter(stat => stat.toon_id === toon.id),
    };
}

export async function getToonAbilities(toonId: number): Promise<Ability[]> {
    return abilities.filter(ability => ability.toon_id === toonId);
}
