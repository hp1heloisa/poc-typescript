import { notFoundError, unauthorizedError } from "@/errors/error";
import { Filme, Update } from "@/protocols/filme.protocols";
import { filmesRepository } from "@/repositories/filme.repository";
import userRepository from "@/repositories/user.repository";

async function postFilme(dados: Filme) {
    const idOk = await userRepository.findUserById(dados.userId);
    if (idOk.length <= 0) throw notFoundError('Id não encontrado!');
    const resp = await filmesRepository.postFilme(dados);
    return resp;
}

async function getMyMovies(id: string){   
    const movies = await filmesRepository.getMyMovies(id);
    return movies;
}

async function updateStatus(dados: Update){
    const filmeOk = await filmesRepository.getMovieById(dados.movieId);
    if (filmeOk.length<=0) throw notFoundError('Filme não encontrado!');
    if (filmeOk[0].userId != dados.userId) throw unauthorizedError('Sem permissão para atualizar esse filme!');
    const resp = await filmesRepository.updateStatus(dados.movieId);
    return resp;
}

async function deleteMovie(dados: Update){
    const filmeOk = await filmesRepository.getMovieById(dados.movieId);
    if (filmeOk.length<=0) throw notFoundError('Filme não encontrado!');
    if (filmeOk[0].userId != dados.userId) throw unauthorizedError('Sem permissão para deletar esse filme!');
    const resp = await filmesRepository.deleteMovie(dados.movieId);
    return resp;
}

export const filmeService = {
    postFilme,
    getMyMovies,
    updateStatus,
    deleteMovie
}