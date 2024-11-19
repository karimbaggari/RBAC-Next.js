import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Initialize the database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Export Drizzle instance
export const db = drizzle(pool);
