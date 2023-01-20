import * as dotenv from 'dotenv';
dotenv.config();
export const port = process.env.PORT;
export const pgUser = process.env.PG_USER;
export const pgPass= process.env.PG_PASSWORD;
export const pgHost = process.env.PG_HOST;
export const pgPort = process.env.PG_PORT;
export const pgDb = process.env.PG_DATABASE;
export const saltNumber = process.env.SALT;
export const jwtSecret = process.env.JWT_SECRET;

