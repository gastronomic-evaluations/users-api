const Users = require('../models/users');

const create = user => Users.create(user);

module.exports = {
  create,
};
