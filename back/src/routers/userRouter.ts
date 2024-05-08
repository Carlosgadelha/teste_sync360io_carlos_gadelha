import { createUser } from "../controllers/userController.js";
import { Router } from "express";


const userRouter = Router();

userRouter.post("/newProfile", createUser )

export default userRouter;