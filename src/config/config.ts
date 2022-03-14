import { Pool } from "pg";

const pool: Pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",

  port: 5432,
});

export { pool };
