import type { Toon, ToonDetail } from "@dandy-explorer/shared";
import type { ToonsRepository } from "./toons.repository.js";
import { HttpError } from "../errors/httpError.js";

export class ToonsService {
    private readonly toonsRepository: ToonsRepository;

    constructor (toonsRepository: ToonsRepository) {
        this.toonsRepository = toonsRepository;
    }

    async getAll(): Promise<Toon[]> {
        const toons: Toon[] = await this.toonsRepository.findAll();
        return toons;
    }

    async get(id: number): Promise<ToonDetail> {
        const toon = await this.toonsRepository.find(id);

        if (!toon) throw new HttpError(404, "The requested Toon could not be found");

        return toon;
    }
}