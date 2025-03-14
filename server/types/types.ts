import { Request, Response, NextFunction } from "express";

export type ExpressRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any> | any;
