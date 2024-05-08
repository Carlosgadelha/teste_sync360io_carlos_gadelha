import { Router } from "express";
import userRouter from "./userRouter.js";
import addressRouter from "./address.js";
var router = Router();
router.use(userRouter);
router.use(addressRouter);
export default router;
