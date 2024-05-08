import { createUser } from "../controllers/userController.js";
import { Router } from "express";
var userRouter = Router();
userRouter.post("/newProfile", createUser);
export default userRouter;
