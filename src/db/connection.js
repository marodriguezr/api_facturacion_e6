import pgPromise from 'pg-promise';
import {env} from "../config/env.js"

const dbUrl = process.env.DATABASE_URL === undefined ? "postgres://postgres:admin@localhost:5432/pizza" : process.env.DATABASE_URL + "?ssl=true";

// // Create Database Connection
const pgp = pgPromise({});
export const db = pgp(dbUrl);