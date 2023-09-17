import { Router } from "express";
import filmeRouter from "./filme-routers";
import userRouter from "./user-router";

const router = Router();

router.use(userRouter)
router.use(filmeRouter);

export default router;