// Callback functions following the endpoint definition are called middleware
import { NextFunction, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();

export const checkIdIsANumber = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "ID is not a number" });
  }
  res.locals.id = id;
  next();
};

export const isAuth = (
  { headers }: Request,
  res: Response,
  next: NextFunction
) => {
  if (headers.authorization === String(process.env.AUTH_KEY)) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
