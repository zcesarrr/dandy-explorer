import type { ToonDetailed } from "@dandy-explorer/shared";
import type { ToonsService } from "./toons.service.js";
import type { Request, Response } from "express";

export class ToonsController {
    private readonly toonsService: ToonsService;

    constructor(toonsService: ToonsService) {
        this.toonsService = toonsService;
    }

    getAll = async (_: Request, res: Response) => {
        const toons: ToonDetailed[] = await this.toonsService.getAll();
        res.status(200).json({
            success: true,
            data: toons,
        });
    }
}