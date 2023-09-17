import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: process.env.CONNECTION_NAME,
  password: process.env.CONNECTION_PASSWORLD,
  database: "poc-ts"
});

export { connection };