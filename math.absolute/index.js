'use strict';

module.exports = (NODE) => {
  const numberIn = NODE.getInputByName('number');

  const resultOut = NODE.getOutputByName('result');
  resultOut.on('trigger', (conn, state, callback) => {
    numberIn.getValues(state)
    .then((numbers) => {
      // take all aNumbers minus the min and output them
      callback(numbers.map(number => Math.abs(number)));
    });
  });
};
