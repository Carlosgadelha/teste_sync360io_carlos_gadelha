import {Router} from "express";
import userRouter from "./userRouter.js";
import addressRouter from "./address.js";
import profileRouter from "./profileImage.js";

const router = Router();

router.use(userRouter);
router.use(addressRouter);
router.use(profileRouter);

export default router;