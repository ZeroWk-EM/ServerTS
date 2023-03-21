// IMPORT EXPRESS
import express from "express";
const app = express();
app.use(express.json());

//IMPORT DOTENV
import dotenv from "dotenv";
dotenv.config();

// SAVE ENV VARIABLE
const port = process.env.PORT;

// TAKE ALL ROUTE METHOD
import User from "./router/user";
import Product from "./router/product";

// ASSOCIATION URL WITH EXPORT ROUTE
app.use("/users", User);
app.use("/products", Product);

// OPER PORT FOR LISTEN REQUEST
app.listen(port, () => {
  console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});
