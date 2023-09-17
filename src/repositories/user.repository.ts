import { connection } from "@/database/database.connection";

async function addUser(nome: string) {
    const resp = await connection.query(`INSERT INTO usuarios (nome) VALUES ($1) RETURNING id`, [nome]);
    return resp.rows[0];
}

async function findUser(nome: string) {
    const resp = await connection.query(`SELECT * FROM usuarios WHERE nome=$1`, [nome]);
    return resp.rows;   
}

async function findUserById(id: number) {
    const resp = await connection.query(`SELECT * FROM usuarios WHERE id=$1`, [id]);
    return resp.rows;
}

const userRepository = {
    addUser,
    findUser,
    findUserById
}

export default userRepository;