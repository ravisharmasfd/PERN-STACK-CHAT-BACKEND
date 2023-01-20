import pg from "pg";
import { pgUser,pgDb, pgPass, pgHost, pgPort, } from "./config/index.js";

const pool = new pg.Pool({
  user: pgUser,
  password: pgPass,
  host: pgHost,
  port: pgPort,
  database: pgDb
});

export default pool;