'use strict';

module.exports = (NODE) => {
  const resultOut = NODE.getOutputByName('result');
  resultOut.on('trigger', (conn, state, callback) => {
    Promise.all([
      NODE.getInputByName('a').getValues(state),
      NODE.getInputByName('b').getValues(state)
    ])
    .then(([aNumbers, bNumbers]) => {
      let bInit = 0;
      if (!bNumbers.length) {
        bInit = +NODE.data.value || 0;
      }

      const sumA = aNumbers.reduce((prevVal, newVal) => +prevVal + (+newVal));
      const sumB = bNumbers.reduce((prevVal, newVal) => +prevVal + (+newVal), bInit);
      callback(sumA - sumB);
    });
  });
};
