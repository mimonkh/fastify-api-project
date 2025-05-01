const userController = require('../controllers/userController');
const {
  createUserSchema
} = require('../schemas/userSchema');

async function userRoutes(fastify, options) {
  fastify.get('/users', userController.getUsers);
  fastify.post('/users', {
    schema: createUserSchema,
    handler: userController.signUp
  });

}

module.exports = userRoutes;
