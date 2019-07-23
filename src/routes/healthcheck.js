const healthcheck = require('../controllers/healthcheck');

module.exports = (app) => {
  app.use('/users/api/healthcheck', healthcheck);
};
