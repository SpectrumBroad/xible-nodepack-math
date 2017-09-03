'use strict';

module.exports = (NODE) => {
  const resultOut = NODE.getOutputByName('result');
  resultOut.on('trigger', (conn, state, callback) => {
    NODE.getInputByName('values').getValues(state)
    .then((vals) => {
      callback(vals.reduce((prevVal, newVal) => +prevVal + (+newVal), (+NODE.data.value || 0)));
    });
  });
};
