import type { Request, Response, NextFunction } from "express";
import { HttpError } from "../errors/httpError.js";

export default function errorHandler(
    err: Error, 
    _: Request, 
    res: Response, 
    next: NextFunction
) {
    if (res.headersSent) {
        next(err);
        return;
    }

    if (err instanceof HttpError) {
        res.status(err.statusCode).json({
            success: false,
            error: err.message,
        });
        return;
    }

    console.error(err);

    res.status(500).json({
        success: false,
        error: "Internal server error",
    });
}