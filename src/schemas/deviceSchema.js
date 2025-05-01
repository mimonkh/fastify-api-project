

const createDeviceSchema = {
  headers: {
    type: 'object',
    required: ['device_id','token','user_id'],
    properties: {
      device_id: { type: 'string', minLength: 1 },
      token: { type: 'string', minLength: 1 },
      user_id: { type: 'string', minLength: 1 }
    },
    additionalProperties: true
  },
  body: {
    type: 'object',
    required: ['name', 'type', 'location'],
    properties: {
      name: { type: 'string', minLength: 1 },
      type: { type: 'string', minLength: 1 },
      location: { type: 'string', minLength: 1 }
    },
    additionalProperties: false
  }
};

const updateDeviceSchema = {
  headers: {
    type: 'object',
    required: ['token','user_id'],
    properties: {
      token: { type: 'string', minLength: 1 },
      user_id: { type: 'string', minLength: 1 }
    },
    additionalProperties: true
  },
  querystring: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', minLength: 1 }
    },
    additionalProperties: false
  },
  body: {
    type: 'object',
    properties: {
      name: { type: ['string', 'null'], minLength: 1 },
      type: { type: ['string', 'null'], minLength: 1 },
      location: { type: ['string', 'null'], minLength: 1 }
    },
    additionalProperties: false
  }
};

const deleteDeviceSchema = {
  headers: {
    type: 'object',
    required: ['token','user_id'],
    properties: {
      token: { type: 'string', minLength: 1 },
      user_id: { type: 'string', minLength: 1 }
    },
    additionalProperties: true
  },
  querystring: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', minLength: 1 }
    },
    additionalProperties: false
  }
};

module.exports = {
  updateDeviceSchema,
  createDeviceSchema,
  deleteDeviceSchema
};
