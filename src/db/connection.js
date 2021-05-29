import pgPromise from 'pg-promise';
import {env} from "../config/env.js"

const dbUser = process.env.DB_USER || env.parsed.DB_USER;
const dbPass = process.env.DB_PASS || env.parsed.DB_PASS;
const dbHost = process.env.DB_HOST || env.parsed.DB_HOST;
const dbPort = process.env.DB_PORT || env.parsed.DB_PORT;
const dbName = process.env.DB_NAME || env.parsed.DB_NAME;

// Create Database Connection
const pgp = pgPromise({});
export const db = pgp(process.env.DATABASE_URL || `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`);