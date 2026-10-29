import type { Request, Response, NextFunction } from "express";

export default function notFoundHandler(_: Request, res: Response, __: NextFunction) {
    res.status(404).json({
        status: false,
        error: "Nothing to see here!",
    });
}
