'use strict';

module.exports = (NODE) => {
  const numberIn = NODE.getInputByName('number');

  const resultOut = NODE.getOutputByName('result');
  resultOut.on('trigger', async (conn, state) => {
    const numbers = await numberIn.getValues(state);
    return Math.round(numbers.reduce(
      (prevVal, newVal) => +prevVal + (+newVal),
      0
    ));
  });
};
