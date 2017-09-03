'use strict';

module.exports = (NODE) => {
  const valuesIn = NODE.getInputByName('values');

  const resultOut = NODE.getOutputByName('result');
  resultOut.on('trigger', (conn, state, callback) => {
    valuesIn.getValues(state)
    .then((numbers) => {
      callback(numbers.reduce((prevVal, newVal) => +prevVal + (+newVal)));
    });
  });
};
