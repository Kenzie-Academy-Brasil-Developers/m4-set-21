import { Client } from "pg";

const database = new Client({
  user: process.env.DB_USERNAME, // postgres
  host: process.env.DB_HOST, // localhost
  database: process.env.DB, // ukenzie_db
  password: process.env.DB_PASSWORD, // docker
  port: process.env.DB_PORT, // 5432
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
