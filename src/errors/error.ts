export function formatError(erro: Object) {
    return {
        type: "format",
        message: erro
    }
}

export function conflictError(erro: string){
    return{
        type: "conflict",
        message: erro
    }
}

export function notFoundError(message: string = 'Item não encontrado!'){
    return{
        type: "notFound",
        message: message
    }
}

export function unauthorizedError(erro: string){
    return{
        type: "unauthorized",
        message: erro
    }
}