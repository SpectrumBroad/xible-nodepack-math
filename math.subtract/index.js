'use strict';

module.exports = (NODE) => {
  const resultOut = NODE.getOutputByName('result');
  resultOut.on('trigger', async (conn, state) => {
    const [aNumbers, bNumbers] = await Promise.all([
      NODE.getInputByName('a').getValues(state),
      NODE.getInputByName('b').getValues(state)
    ]);

    let bInit = 0;
    if (!bNumbers.length) {
      bInit = +NODE.data.value || 0;
    }

    const sumA = aNumbers.reduce((prevVal, newVal) => +prevVal + (+newVal), 0);
    const sumB = bNumbers.reduce((prevVal, newVal) => +prevVal + (+newVal), bInit);
    return sumA - sumB;
  });
};
