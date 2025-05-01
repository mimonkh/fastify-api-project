const userModel = require('../models/userModel');

const fetchUsers = async (fastify) => {
  return await userModel.getAllUsers(fastify);
};
const signUpUser = async (request) => {
  const user = await userModel.register(request);  
  const token = request.server.jwt.sign( 
    { user_name: request.body.user_name, user_id: user.id },
    //device_id is uniqe for each device and must pass with each device request with token as example of auth
    // { expiresIn: '1m' }
  );

  return { id: user.id, token };
};


module.exports = {
  fetchUsers,
  signUpUser
}
