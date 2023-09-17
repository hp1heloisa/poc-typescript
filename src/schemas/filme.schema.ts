import { Filme, Update } from "@/protocols/filme.protocols"
import Joi from "joi"

export const filmeSchema = Joi.object<Filme>({
    userId: Joi.number().required(),
    filme: Joi.string().required(),
    plataforma: Joi.string().required(),
    genero: Joi.string().required()
})

export const filmeEditSchema = Joi.object<Update>({
    userId:Joi.number().required(),
    movieId:Joi.number().required()
})