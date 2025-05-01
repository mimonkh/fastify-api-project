// src/routes/devices.js
const deviceController = require('../controllers/deviceController');
const {
  updateDeviceSchema,
  createDeviceSchema,
  deleteDeviceSchema
} = require('../schemas/deviceSchema');

async function deviceRoutes(fastify, options) {
  fastify.get('/devices', deviceController.getDevices);

  fastify.post('/devices', {
    schema: createDeviceSchema,
    handler: deviceController.createDevice
  });

  fastify.delete('/devices', {
    schema: deleteDeviceSchema,
    handler: deviceController.deleteDevice
  });

  fastify.put('/devices', {
    schema: updateDeviceSchema,
    handler: deviceController.updateDevice
  });
}

module.exports = deviceRoutes;
