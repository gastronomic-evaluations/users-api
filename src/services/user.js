const bcrypt = require('bcrypt-nodejs');

const userPasswordHash = (user) => {
  const newUser = { ...user };
  const salt = bcrypt.genSaltSync(10);
  newUser.password = bcrypt.hashSync(newUser.password, salt);
  return newUser;
};

module.exports = {
  userPasswordHash,
};
