require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.HOST_DATABASE,
    port: process.env.DATABASE_PORT,
    user: process.env.USER_DATABASE,
    password: process.env.PASS_DATABASE,
    database: process.env.NAME_DATABASE,
    ssl: true,
  },
  useNullAsDefault: true,
});

module.exports = knex;
