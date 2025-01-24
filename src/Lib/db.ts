// // Lib/db.ts
// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
// });

// export const query = async (text: string, params?: any[]) => {
//   const client = await pool.connect();
//   try {
//     const result = await client.query(text, params);
//     return result.rows;
//   } finally {
//     client.release();
//   }
// };

// src/Lib/db.ts

import { Client } from 'pg';

// Usando a variável de ambiente DATABASE_URL
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export const query = (text: string, params: any[]) => client.query(text, params);
