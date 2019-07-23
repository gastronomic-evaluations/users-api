const healthcheck = require('../routes/healthcheck');

module.exports = (app) => {
  healthcheck(app);
};
