
const createUserSchema = {
  body: {
    type: 'object',
    required: ['user_name', 'password'],
    properties: {
      user_name: { type: 'string', minLength: 1 },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 1 }
    },
    additionalProperties: false
  }
};

module.exports = {
  createUserSchema
};
