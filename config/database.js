module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5432),
      user: env('NODE_ENV', 'develop') === 'develop' ? env('POSTGRES_USER', 'strapi') : env('PGUSER', 'strapi'),
      database: env('NODE_ENV', 'develop') === 'develop' ? env('POSTGRES_DB', 'strapi') : env('PGDATABASE', 'strapi'),
      password: env('NODE_ENV', 'develop') === 'develop' ? env('POSTGRES_PASSWORD', 'strapi') : env('PGPASSWORD', 'strapi'),
      ssl: env.bool(true),
    },
  },
});
