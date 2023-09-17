import { formatError } from "@/errors/error"
import { NextFunction, Request, Response } from "express"
import Joi from "joi"

export function validateSchema(schema: Joi.Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            throw formatError(errors);
        }

        next()
    }
}