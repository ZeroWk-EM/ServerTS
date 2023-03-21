import { NextFunction, Request, Response } from "express";
import { products } from "../databases/product";

export const getProductById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let product = products.find((item) => item.id === res.locals.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.locals.product = product;
  next();
};

export const checkIfBodyIsRight = (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    body.owner &&
    body.brand &&
    body.model &&
    body.year &&
    body.vin &&
    body.price &&
    body.werehouse
  ) {
    next();
  }
  res.status(400).json({
    message:
      'Missing fields: "owner" or "brand" or "model" or "year" or "vin" or "price" or "werehouse"',
  });
};
