const userService = require('../services/userService');

const getUsers = async (request, reply) => {
  const users = await userService.fetchUsers(request.server);
  reply.send(users);
};

const signUp = async (request, reply) => {
  const user = await userService.signUpUser(request);
  reply.send(user);
};




module.exports = {
  getUsers,
  signUp
}