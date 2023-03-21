import express, { Request, Response } from "express";
import { products } from "../databases/product";

import { checkIdIsANumber, isAuth } from "../middleware/defaulValidation";
import { checkIfBodyIsRight,getProductById } from "../middleware/productValidation";

const router = express.Router();
router.use(express.json());

// Find By Query
router.get("/", ({ query }: Request, res: Response) => {
  let productCopy = [...products];
  if (query.owner) {
    productCopy = productCopy.filter((item) => item.owner === query.owner);
  }
  if (query.model) {
    productCopy = productCopy.filter((item) => item.model === query.model);
  }
  res.json(productCopy);
});

// Find by ID
router.get(
  "/:id",
  checkIdIsANumber,
  getProductById,
  (req: Request, res: Response) => {
    res.json(res.locals.product);
  }
);

// Add new product
router.post(
  "/",
  isAuth,
  checkIfBodyIsRight,
  ({ body }: Request, res: Response) => {
    // Check MAX ID
    const maxId = products.reduce(
      (acc, item) => (acc > item.id ? acc : item.id),
      0
    );

    let product = {
      id: maxId + 1,
      owner: body.owner,
      brand: body.brand,
      model: body.model,
      year: body.year,
      vin: body.vin,
      price: body.price,
      werehouse: body.werehouse,
    };
    products.push(product);
    res.json(product);
  }
);

// Update product
router.put(
  "/:id",
  isAuth,
  checkIdIsANumber,
  getProductById,
  checkIfBodyIsRight,
  ({ body }: Request, res: Response) => {
    res.locals.product.owner = body.owner;
    res.locals.product.brand = body.brand;
    res.locals.product.model = body.model;
    res.locals.product.year = body.year;
    res.locals.product.vin = body.vin;
    res.locals.product.price = body.price;
    res.locals.product.werehouse = body.werehouse;
    res.status(200).json({ message: "Product succefully update" });
  }
);

// Delete product
router.delete(
  "/:id",
  isAuth,
  checkIdIsANumber,
  (req: Request, res: Response) => {
    const userIndex = products.findIndex((item) => item.id === res.locals.id);
    if (userIndex === -1) {
      res.status(404).json({ message: "Product not found" });
    }
    products.splice(userIndex, 1);
    res.json({ message: "Product deleted" });
  }
);

export default router;
