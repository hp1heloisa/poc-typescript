import { connection } from "@/database/database.connection";
import { Filme } from "@/protocols/filme.protocols";

async function postFilme(dados: Filme) {
    const resp = await connection.query(`
        INSERT INTO filmes ("userId", filme, plataforma, genero) VALUES ($1,$2,$3,$4);
    `, [dados.userId, dados.filme, dados.plataforma, dados.genero]);
    return resp;
}

async function getMyMovies(id: string) { 
    const resp = await connection.query(`
        SELECT * FROM filmes WHERE "userId"=$1;
    `, [id]);
    return resp.rows;
}

async function getMovieById(id: number){
    const resp = await connection.query(`
        SELECT * FROM filmes WHERE id=$1;
    `, [id]);
    return resp.rows;
}

async function updateStatus(id: number){
    const resp = await connection.query(`
        UPDATE filmes SET status = CASE WHEN status = true THEN false ELSE true END WHERE id=$1;
    `, [id]);
    return resp;
}

async function deleteMovie(id: number){
    const resp = await connection.query(`
        DELETE FROM filmes WHERE id = $1;
    `, [id]);
    return resp;
}

export const filmesRepository = {
    postFilme,
    getMyMovies,
    getMovieById,
    updateStatus,
    deleteMovie
}