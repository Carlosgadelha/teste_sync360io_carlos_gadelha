import { uploadProfileImage } from "../controllers/profileImageController.js";
import { Router } from "express";
var profileRouter = Router();
profileRouter.post("/uploadProfileImage", uploadProfileImage);
export default profileRouter;
