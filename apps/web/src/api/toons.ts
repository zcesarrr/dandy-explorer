import type { Ability, Quest, Requirement, Toon, ToonDetail } from "@dandy-explorer/shared";
import { apiFetch } from "../utils/api";

export async function getToons(): Promise<Toon[]> {
    return await apiFetch<Toon[]>("/toons");
}

export async function getToon(id: number): Promise<ToonDetail> {
    return await apiFetch<ToonDetail>(`/toons/${id}`);
}

export async function getToonAbilities(toonId: number): Promise<Ability[]> {
    return await apiFetch<Ability[]>(`/toons/${toonId}/abilities`);
}

export async function getToonQuests(toonId: number): Promise<Quest[]> {
    return await apiFetch<Quest[]>(`/toons/${toonId}/quests`);
}

export async function getToonRequirements(toonId: number): Promise<Requirement[]> {
    return await apiFetch<Requirement[]>(`/toons/${toonId}/requirements`);
}
