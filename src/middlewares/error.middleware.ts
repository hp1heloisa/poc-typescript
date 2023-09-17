import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";

export default function errorHandler(error, req: Request, res: Response, next: NextFunction){
    if (error.type === "format") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if (error.type === "conflict") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }
    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    if (error.type === "badRequest") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
    if (error.type === "internal"){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
    if (error.type === "unauthorized") {
        return res.status(httpStatus.UNAUTHORIZED).send(error.message);
    }
}