const Users = require('../models/users');
const { userPasswordHash } = require('../services/user');

const create = (user) => {
  const newUser = userPasswordHash(user);
  return Users.create(newUser);
};

module.exports = {
  create,
};
