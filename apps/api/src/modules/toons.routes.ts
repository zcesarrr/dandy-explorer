import { Router } from "express";
import { ToonsRepository } from "./toons.repository.js";
import { pool } from "../config/db.js";
import { ToonsService } from "./toons.service.js";
import { ToonsController } from "./toons.controller.js";

const toonsRepository = new ToonsRepository(pool);
const toonsService = new ToonsService(toonsRepository);
const toonsController = new ToonsController(toonsService);

const router = Router();

router.get("/", toonsController.getAll);
router.get("/:id", toonsController.get);

export default router;
