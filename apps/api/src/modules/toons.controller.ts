import type { ToonsService } from "./toons.service.js";
import type { Request, Response } from "express";

export class ToonsController {
    private readonly toonsService: ToonsService;

    constructor(toonsService: ToonsService) {
        this.toonsService = toonsService;
    }

    getAll = async (_: Request, res: Response) => {
        const toons = await this.toonsService.getAll();
        res.status(200).json({
            success: true,
            data: toons,
        });
    };

    get = async (req: Request, res: Response) => {
        const id = req.params.id;

        const toon = await this.toonsService.get(Number(id));
        res.status(200).json({
            success: true,
            data: toon,
        });
    };

    getAbilities = async (req: Request, res: Response) => {
        const id = req.params.id;

        const abilities = await this.toonsService.getAbilities(Number(id));
        res.status(200).json({
            success: true,
            data: abilities,
        });
    }

    getQuests = async (req: Request, res: Response) => {
        const id = req.params.id;

        const quests = await this.toonsService.getQuests(Number(id));
        res.status(200).json({
            success: true,
            data: quests,
        });
    }

    getRequirements = async (req: Request, res: Response) => {
        const id = req.params.id;

        const requirements = await this.toonsService.getRequirements(Number(id));
        res.status(200).json({
            success: true,
            data: requirements,
        });
    }
}