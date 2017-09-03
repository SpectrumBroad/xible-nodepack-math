'use strict';

module.exports = (NODE) => {
  const numbersIn = NODE.getInputByName('numbers');

  const numberOut = NODE.getOutputByName('number');
  numberOut.on('trigger', (conn, state, callback) => {
    numbersIn.getValues(state)
    .then((numbers) => {
      const sum = numbers.reduce((prevVal, newVal) => +prevVal + (+newVal));
      callback(sum / numbers.length);
    });
  });
};
