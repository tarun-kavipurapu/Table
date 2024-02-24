import { Request, Response, NextFunction } from "express";

const asyncHandler =
  (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (error: any) {
      res.status(error.code || 500).json({
        status: "failure",
        message: error.message,
      });
    }
  };

export { asyncHandler };
