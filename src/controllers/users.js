const userRepository = require('../repositories/userRepository');

async function create(req, res, next) {
  try {
    const user = await userRepository.create(req.body);
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  create,
};
