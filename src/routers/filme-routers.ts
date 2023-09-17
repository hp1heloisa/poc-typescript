import { postFilme, getMyMovies, updateStatus, deleteMovie } from "@/controllers/filme.controller";
import { validateSchema } from "@/middlewares/validateSchema";
import { filmeEditSchema, filmeSchema } from "@/schemas/filme.schema";
import { Router } from "express";

const filmeRouter = Router();

filmeRouter.post('/new', validateSchema(filmeSchema), postFilme);
filmeRouter.get('/mine/:id', getMyMovies);
filmeRouter.put('/update', validateSchema(filmeEditSchema), updateStatus);
filmeRouter.delete('/delete', validateSchema(filmeEditSchema), deleteMovie);

export default filmeRouter;