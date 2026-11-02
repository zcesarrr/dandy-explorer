import type { ToonDetailed } from "@dandy-explorer/shared";
import type { ToonsRepository } from "./toons.repository.js";

export class ToonsService {
    private readonly toonsRepository: ToonsRepository;

    constructor (toonsRepository: ToonsRepository) {
        this.toonsRepository = toonsRepository;
    }

    async getAll(): Promise<ToonDetailed[]> {
        const toons: ToonDetailed[] = await this.toonsRepository.findAllDetailed();
        return toons;
    }
}