require("dotenv").config();
const environmet = {
  development: {
    username: process.env.DATABASE_DEVELOPMENT_USERNAME,
    password: process.env.DATABASE_DEVELOPMENT_PASSWORD,
    database: process.env.DATABASE_DEVELOPMENT_NAME,
    host: process.env.DATABASE_DEVELOPMENT_HOST,
    dialect: process.env.DATABASE_DEVELOPMENT_DIALECT,
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = environmet;
