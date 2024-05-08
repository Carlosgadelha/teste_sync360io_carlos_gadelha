import addressServices from "../services/addressServices.js";
import { Request, Response } from "express";


export async function createAddress(req: Request, res: Response) {
    const response  = await  addressServices.insert(req.body)
    return res.send(response)
}


export async function updateAddress(req: Request, res: Response) {
    const response  = await  addressServices.update(req.body)
    return res.send(response)
}