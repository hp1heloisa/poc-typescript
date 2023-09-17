import addUser from "@/controllers/user.controller";
import { validateSchema } from "@/middlewares/validateSchema";
import { userSchema } from "@/schemas/user.schemas";
import { Router } from "express";

const userRouter = Router();

userRouter.post('/user', validateSchema(userSchema),addUser);

export default userRouter;