module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5432),
      database: env('POSTGRES_DB', 'strapi'),
      user: env('POSTGRES_USER', 'strapi'),
      password: env('POSTGRES_PASSWORD', 'password'),
      ssl: env.bool(true),
    },
  },
});
