import express, { json } from "express";
import "express-async-errors";
import router from "./routers/index-router";
import cors from "cors";
import errorHandler from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler)

app.listen(5005, () => {
  console.log("Server is up and running")
})