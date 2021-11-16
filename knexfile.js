module.exports = {
  development: {
    client: "pgAdmin", //would need to be either pg or postgreSQL
    useNullAsDefault: true,
    connection: {
      filename: "./data/users.db1",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {

  },
};