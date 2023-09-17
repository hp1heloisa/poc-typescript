import { User } from "@/protocols/user.protocols";
import Joi from "joi";

export const userSchema = Joi.object<User>({
    nome: Joi.string().required()
}) 