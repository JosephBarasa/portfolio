import "dotenv/config";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

export const pool = connectionString 
    ? new Pool({
        connectionString,
        max: 1,
        ssl: { rejectUnauthorized: false },
    })
    : new Pool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT ?? 5432),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })