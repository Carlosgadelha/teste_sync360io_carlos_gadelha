import { Router } from "express";
import userRouter from "./userRouter.js";
var router = Router();
router.use(userRouter);
export default router;
