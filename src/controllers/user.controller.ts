import { User } from "@/protocols/user.protocols";
import userService from "@/services/user.service";
import { Request, Response } from "express";

export default async function addUser(req: Request, res: Response){
    const { nome } = req.body as User;
    const resp = await userService.addUser(nome);
    res.status(201).send(resp);

}