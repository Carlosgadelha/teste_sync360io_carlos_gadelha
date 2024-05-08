import { createAddress, updateAddress } from "../controllers/addressController.js";
import { Router } from "express";


const addressRouter = Router();

addressRouter.post("/newAddress", createAddress )
addressRouter.patch("/updateAddress", updateAddress )

export default addressRouter;