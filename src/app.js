
const fastify = require('fastify')({
    logger: true,
    ajv: {
        customOptions: {
            allErrors: true,
            removeAdditional: true
        }
    }
});
fastify.register(require('./plugins/security'));

fastify.register(require('@fastify/jwt'), {
    secret: process.env.JWT_SECRET
});
fastify.register(require('@fastify/cors'), {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
});

fastify.register(require('@fastify/websocket'));

// قناة بث التعديلات
fastify.get('/ws/devices', { websocket: true }, (connection, req) => {
  fastify.websocketClients = fastify.websocketClients || new Set();
  fastify.websocketClients.add(connection.socket);

  connection.socket.on('close', () => {
    fastify.websocketClients.delete(connection.socket);
  });
});


fastify.register(require('./plugins/db'));
fastify.register(require('./routes/users'));
fastify.register(require('./routes/devices'));

module.exports = fastify;
