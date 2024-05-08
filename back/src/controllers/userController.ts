import userServices from "../services/userServices.js";
import { Request, Response } from "express";


export async function createUser(req: Request, res: Response) {
    const response  =  userServices.insert(req.body)
    return res.send(response)
}