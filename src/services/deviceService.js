const deviceModel = require('../models/deviceModel');

const fetchDevices = async (request) => {
  return await deviceModel.getAlldevices(request);
};

const addDevice = async (request) => {
  return await deviceModel.addNewDevice(request);
};

const editDevice = async (request) => {
  return await deviceModel.editDeviceInfo(request);
};

const removeDevice = async (request) => {
  return await deviceModel.softDeleteDevice(request);
};


  module.exports = {
    fetchDevices,
    addDevice,
    editDevice,
    removeDevice
  }