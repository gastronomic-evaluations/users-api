const healthcheck = (req, res) => {
  res.status(200).json({ status: 'ok' });
};

module.exports = healthcheck;
