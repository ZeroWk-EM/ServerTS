import { NextFunction, Request, Response } from "express";
import { users } from "../databases/user";

import dotenv from "dotenv";
dotenv.config();

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user = users.find((item) => item.id === res.locals.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.locals.user = user;
  next();
};

export const checkIfBodyIsRight = (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    body.firstname &&
    body.lastname &&
    body.email &&
    body.gender &&
    body.ip_address
  ) {
    next();
  }
  res.status(400).json({
    message:
      'Missing fields: "firstname" or "lastname" or "email" or "gender" or "ip_address"',
  });
};
