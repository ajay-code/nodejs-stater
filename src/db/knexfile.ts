import config from "#src/config/index.config.js";

export const knexFile = {
  development: {
    client: config.DB.dbClient,
    connection: {
      host: config.DB.dbHost,
      port: config.DB.dbPort,
      user: config.DB.dbUser,
      password: config.DB.dbPassword,
      database: config.DB.dbName,
    },
    pool: {
      min: 0,
      max: 7,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {},

  production: {
    client: config.DB.dbClient,
    connection: {
      host: config.DB.dbHost,
      port: config.DB.dbPort,
      user: config.DB.dbUser,
      password: config.DB.dbPassword,
      database: config.DB.dbName,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },

  }
};

export default knexFile;