const AppError = require('../utils/AppError');

const getAlldevices = async (request) => {
  let fastify = request.server
  let deviceId = request.query.id, res
  if (deviceId) {
    res = await fastify.pg.query('SELECT * FROM public.devices where id = $1 and is_deleted = false', [deviceId]);
    console.log("res:", res);
    if (res.rowCount > 0) {
      return res.rows;
    } else {
      throw new AppError(-100, "device not found");
    }
  }
  else {
    res = await fastify.pg.query('SELECT * FROM public.devices where is_deleted = false');
    if (res.rowCount > 0)
      return res.rows;
    else throw new AppError(-101, "there are no devices");
  }
};

const addNewDevice = async (request) => {
  let deviceId = request.headers.device_id;
  let params = request.body;
  let dname = params.name,
    dtype = params.type,
    dlocation = params.location;
  let fastify = request.server
  const res = await fastify.pg.query(
    'INSERT INTO public.devices (device_id, name, type, location) VALUES ($1, $2, $3, $4) RETURNING *',
    [deviceId, dname, dtype, dlocation]
  );
  return res.rows[0];
};

const editDeviceInfo = async (request) => {
  let deviceId = request.query.id
  let newName = request.body.name
  let newType = request.body.type
  let newLocation = request.body.location
  let fastify = request.server
  const res = await fastify.pg.query(
    `UPDATE public.devices
       SET 
         name = COALESCE($1, name),
         type = COALESCE($2, type),
         location = COALESCE($3, location)
       WHERE id = $4
       RETURNING id`,
    [newName, newType, newLocation, deviceId]
  );
  if (res.rowCount > 0) {
    return res.rows[0];
  } else {
    throw new AppError(-102, "error device id");
  }
}

const softDeleteDevice = async (request) => {
  let fastify = request.server
  let deviceId = request.query.id

  const res = await fastify.pg.query(
    'update public.devices set is_deleted = true where id = $1 returning id',
    [deviceId]
  );
  if (res.rowCount > 0) {
    return res.rows[0];
  } else {
    throw new AppError(-102, "error device id to delete");
  }
};

module.exports =
{
  getAlldevices,
  addNewDevice,
  editDeviceInfo,
  softDeleteDevice
}

