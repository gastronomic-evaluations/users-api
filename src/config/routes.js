const express = require('express');
const healthcheck = require('../routes/healthcheck');
const users = require('../routes/users');

const router = express.Router();

module.exports = (app) => {
  app.use('/users/api/', router);

  healthcheck(router);
  users(router);
};
