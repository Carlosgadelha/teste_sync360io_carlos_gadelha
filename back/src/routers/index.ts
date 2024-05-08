import {Router} from "express";
import userRouter from "./userRouter.js";
import addressRouter from "./address.js";

const router = Router();

router.use(userRouter);
router.use(addressRouter);

export default router;