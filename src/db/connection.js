import pgPromise from 'pg-promise';
import {env} from "../config/env.js"

// const dbUser = env.parsed.DB_USER;
// const dbPass = env.parsed.DB_PASS;
// const dbHost = env.parsed.DB_HOST;
// const dbPort = env.parsed.DB_PORT;
// const dbName = env.parsed.DB_NAME;

// Create Database Connection
const pgp = pgPromise({});
export const db = pgp(process.env.DATABASE_URL || "");