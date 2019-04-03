// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './auth/database/auth.db3'
    },
    useNullAsDefault: true, // needed for sqlite
    migrations: {
      directory: './auth/database/'
    },
    seeds: {
      directory: './data/seeds'
    },
    // by default SQLite will not enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); // enforce FK
      }
    }
  }
};
