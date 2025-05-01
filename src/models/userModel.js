const AppError = require('../utils/AppError');

const getAllUsers = async (fastify) => {
    const res = await fastify.pg.query('SELECT id, user_name, email FROM public.users');
    return res.rows;
  };
  const register = async (request) => {
    let fastify = request.server;
    let userName = request.body.user_name,
        mail = request.body.email,
        pass = request.body.password;
  
    const res = await fastify.pg.query(
      'INSERT INTO public.users (user_name, email, password) VALUES ($1, $2, md5($3)) RETURNING id',
      [userName, mail, pass]
    );
  
    if (res.rowCount > 0) {
      return res.rows[0];
    } else {
      throw new AppError(-103, "failed registration");
    }
  };

module.exports = {
  getAllUsers,
  register
}
