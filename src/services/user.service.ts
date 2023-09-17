import { conflictError } from "@/errors/error";
import userRepository from "@/repositories/user.repository";

async function addUser(nome: string){
    const nomeOk = await userRepository.findUser(nome);
    if (nomeOk.length > 0) throw conflictError('Usuário já cadastro!');  
    const resp = await userRepository.addUser(nome);
    return resp;
}

const userService = {
    addUser
}

export default userService;