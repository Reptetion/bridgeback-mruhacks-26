const { Pool } = require("pg");

// No password in this file. Set these in your environment, for example
// in a local .env file that is never committed to Git:
//   PGUSER=postgres
//   PGPASSWORD=your-real-password
//   PGHOST=localhost
//   PGPORT=5432
//   PGDATABASE=bridgeback
const pool = new Pool({
  user: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "",
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT || 5432),
  database: process.env.PGDATABASE || "bridgeback",
});

module.exports = pool;
