const { Client } = require("pg");

if (
  !process.env.PGHOST ||
  !process.env.PGUSER ||
  !process.env.PGPORT ||
  !process.env.PGPASSWORD ||
  !process.env.PGDATABASE
) {
  throw new Error("Database configuration missing in environment variables");
}

const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

module.exports = client;
