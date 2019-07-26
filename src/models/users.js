const { Schema, model } = require('mongoose');

const usersSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, select: false, required: true },
});

module.exports = model('Users', usersSchema);
