const { databaseState } = require('../services/healthcheck');

const healthcheck = (req, res) => {
  res.status(200).json({
    status: 'ok',
    database: databaseState(),
  });
};

module.exports = healthcheck;
