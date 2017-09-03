'use strict';

module.exports = (NODE) => {
  const numberIn = NODE.getInputByName('number');

  const resultOut = NODE.getOutputByName('result');
  resultOut.on('trigger', (conn, state, callback) => {
    numberIn.getValues(state)
    .then((numbers) => {
      callback(Math.round(numbers.reduce((prevVal, newVal) => +prevVal + (+newVal))));
    });
  });
};
