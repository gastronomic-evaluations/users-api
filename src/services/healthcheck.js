const { connection } = require('mongoose');

function databaseState() {
  const dictionary = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  return dictionary[connection.readyState];
}

module.exports = { databaseState };
