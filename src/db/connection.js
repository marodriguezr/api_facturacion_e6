import pgPromise from 'pg-promise';
import {env} from "../config/env.js"

// Create Database Connection
const pgp = pgPromise({});
export const db = pgp(`postgres://${env.parsed.DB_USER}:${env.parsed.DB_PASS}@${env.parsed.DB_HOST}:${env.parsed.DB_PORT}/${env.parsed.DB_NAME}`);