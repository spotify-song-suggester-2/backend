// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/auth.db3'
    },
    useNullAsDefault: true,

    migrations:{
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds:{
      directory: './database/seeds'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  testing:{
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      // location and name of DB
      filename: ':memory:'
    },
    migrations: {
      // location of migrations for the DB
      directory: './database/migrations'
    },
    seeds:{
      //location of seed data for the DB
      directory: './database/seeds'
    },
    pool:{
      afterCreate: (conn, done)=>{
        conn.run('PRAGMA foreign_keys = ON',done)
      }
    }
  }

};
