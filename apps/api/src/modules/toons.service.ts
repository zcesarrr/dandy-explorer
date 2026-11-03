import type { Ability, Quest, Requirement, Toon, ToonDetail } from "@dandy-explorer/shared";
import type { ToonsRepository } from "./toons.repository.js";
import { HttpError } from "../errors/httpError.js";

export class ToonsService {
    private readonly toonsRepository: ToonsRepository;

    constructor (toonsRepository: ToonsRepository) {
        this.toonsRepository = toonsRepository;
    }

    async getAll(): Promise<Toon[]> {
        return await this.toonsRepository.findAll();
    }

    async get(id: number): Promise<ToonDetail> {
        const toon = await this.toonsRepository.find(id);

        if (!toon) throw new HttpError(404, "The requested Toon could not be found");

        return toon;
    }

    async getAbilities(toonId: number): Promise<Ability[]> {
        return await this.toonsRepository.findAbilities(toonId);
    }

    async getQuests(toonId: number): Promise<Quest[]> {
        return await this.toonsRepository.findQuests(toonId);
    }

    async getRequirements(toonId: number): Promise<Requirement[]> {
        return await this.toonsRepository.findRequirements(toonId);
    }
}