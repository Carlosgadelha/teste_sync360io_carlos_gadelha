import { createUser, getUserById, updateUser } from "../controllers/userController.js";
import { Router } from "express";
var userRouter = Router();
userRouter.post("/newProfile", createUser);
userRouter.get("/getUserById/:id", getUserById);
userRouter.patch("/updateUser", updateUser);
export default userRouter;
