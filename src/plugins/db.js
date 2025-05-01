const fp = require('fastify-plugin');
const { Pool } = require('pg');

async function dbConnector(fastify, options) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  fastify.decorate('pg', pool);
}

module.exports = fp(dbConnector);
