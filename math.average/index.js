'use strict';

module.exports = (NODE) => {
  const numbersIn = NODE.getInputByName('numbers');

  const numberOut = NODE.getOutputByName('number');
  numberOut.on('trigger', async (conn, state) => {
    const numbers = await numbersIn.getValues(state);
    const sum = numbers.reduce((prevVal, newVal) => +prevVal + (+newVal));
    return sum / numbers.length;
  });
};
