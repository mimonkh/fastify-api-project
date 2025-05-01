const deviceService = require('../services/deviceService');

const getDevices = async (request, reply) => {
  const devices = await deviceService.fetchDevices(request);
  reply.send(devices);
};
const createDevice = async (request, reply) => {
  let token = request.headers.token
  const decoded = request.server.jwt.verify(token);
  console.log(decoded);
  if (decoded.user_id == request.headers.user_id) {
    const device = await deviceService.addDevice(request);
    reply.send(device);
  }
  else {
    reply.code(401).send({ error: "Unauthorized: user_id mismatch" })
  }
};

const updateDevice = async (request, reply) => {
  try {
    const token = request.headers.token;
    const decoded = request.server.jwt.verify(token);

    if (decoded.user_id == request.headers.user_id) {
      const device = await deviceService.editDevice(request);
      reply.send(device);

      // ✅ إرسال التحديث عبر WebSocket
      const fastify = request.server;
      if (fastify.clients) {
        const message = JSON.stringify({
          event: 'device_updated',
          data: device
        });

        for (const client of fastify.clients) {
          console.log("message sent successfully",message);
          client.send(message);
        }
      }
      else console.log("no clients found");
    } else {
      reply.code(401).send({ error: "Unauthorized: user_id mismatch" });
    }
  } catch (err) {
    reply.code(500).send({ error: "Failed to update device", details: err.message });
  }
};


const deleteDevice = async (request, reply) => {
  let token = request.headers.token
  const decoded = request.server.jwt.verify(token);
  console.log(decoded);
  if (decoded.user_id == request.headers.user_id) {
    const device = await deviceService.removeDevice(request)
    reply.send(device)
  }
  else {
    reply.code(401).send({ error: "Unauthorized: user_id mismatch" })
  }
}

module.exports = {
  getDevices,
  createDevice,
  updateDevice,
  deleteDevice
}
