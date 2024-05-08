import userServices from "../services/userServices.js";
import { Request, Response } from "express";


export async function createUser(req: Request, res: Response) {
    const response  = await  userServices.insert(req.body)
    return res.send(response)
}

export async function getUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const response  = await userServices.findById(id)
    return res.send(response)
}

export async function updateUser(req: Request, res: Response) {
    const response  = await  userServices.update(req.body)
    return res.send(response)
}