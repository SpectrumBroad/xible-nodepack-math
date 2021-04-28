'use strict';

module.exports = (NODE) => {
  const resultOut = NODE.getOutputByName('result');
  resultOut.on('trigger', async (conn, state) => {
    const vals = await NODE.getInputByName('values').getValues(state);

    return vals.reduce(
      (prevVal, newVal) => +prevVal + (+newVal),
      (+NODE.data.value || 0)
    );
  });
};
