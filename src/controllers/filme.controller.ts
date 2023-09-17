import { Filme, Update } from "@/protocols/filme.protocols";
import { filmeService } from "@/services/filme.service";
import { Request, Response } from "express";

export async function postFilme(req: Request, res: Response){
    const post = req.body as Filme;
    await filmeService.postFilme(post);
    return res.sendStatus(201);
}

export async function getMyMovies(req: Request, res: Response){
    let { id } = req.params; 
    const filmes = await filmeService.getMyMovies(id);
    res.send(filmes);
}

export async function updateStatus(req: Request,res: Response) {
    const dados = req.body as Update;
    await filmeService.updateStatus(dados);
    res.sendStatus(202);
}

export async function deleteMovie(req: Request, res: Response){
    const dados = req.body as Update;
    await filmeService.deleteMovie(dados);
    res.sendStatus(202);
}