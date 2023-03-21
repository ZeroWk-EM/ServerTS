import express, { Request, Response } from "express";
import { users } from "../databases/user";

import { checkIdIsANumber, isAuth } from "../middleware/defaulValidation";
import { checkIfBodyIsRight, getUserById } from "../middleware/userValidation";

const router = express.Router();
router.use(express.json());

// Find By Query
router.get("/", ({ query }: Request, res: Response) => {
  let usersCopy = [...users];
  if (query.name) {
    usersCopy = usersCopy.filter((item) => item.firstname === query.name);
  }
  if (query.gender) {
    usersCopy = usersCopy.filter((item) => item.gender === query.gender);
  }
  res.json(usersCopy);
});

// Find by ID
router.get(
  "/:id",
  checkIdIsANumber,
  getUserById,
  (req: Request, res: Response) => {
    res.json(res.locals.user);
  }
);

// Add new user
router.post(
  "/",
  isAuth,
  checkIfBodyIsRight,
  ({ body }: Request, res: Response) => {
    // Check MAX ID
    const maxId = users.reduce(
      (acc, item) => (acc > item.id ? acc : item.id),
      0
    );

    let user = {
      id: maxId + 1,
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      gender: body.gender,
      ip_address: body.ip_address,
    };
    users.push(user);
    res.json(user);
  }
);

// Update user
router.put(
  "/:id",
  isAuth,
  checkIdIsANumber,
  getUserById,
  checkIfBodyIsRight,
  ({ body }: Request, res: Response) => {
    res.locals.user.firstname = body.firstname;
    res.locals.user.lastname = body.lastname;
    res.locals.user.email = body.email;
    res.locals.user.gender = body.gender;
    res.locals.user.ip_address = body.ip_address;
    res.status(200).json({ message: "User succefully update" });
  }
);

// Delete user
router.delete(
  "/:id",
  isAuth,
  checkIdIsANumber,
  (req: Request, res: Response) => {
    const userIndex = users.findIndex((item) => item.id === res.locals.id);
    if (userIndex === -1) {
      res.status(404).json({ message: "User not found" });
    }
    users.splice(userIndex, 1);
    res.json({ message: "User deleted" });
  }
);
export default router;
