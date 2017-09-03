'use strict';

module.exports = (NODE) => {
  NODE
  .getOutputByName('number')
  .on('trigger', (conn, state, callback) => {
    callback(+(NODE.data.value || 0));
  });
};
