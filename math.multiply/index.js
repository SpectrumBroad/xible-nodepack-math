'use strict';

module.exports = (NODE) => {
  const multiplicandIn = NODE.getInputByName('multiplicand');
  const multiplierIn = NODE.getInputByName('multiplier');

  const numberOut = NODE.getOutputByName('result');
  numberOut.on('trigger', async (conn, state) => {
    const [multiplicands, multipliers] = await Promise.all([
      multiplicandIn.getValues(state),
      multiplierIn.getValues(state)
    ]);

    let multiplierInit = 0;
    if (!multipliers.length) {
      multiplierInit = +NODE.data.value || 0;
    }

    const multiplicand = multiplicands.reduce((prevVal, newVal) => +prevVal + (+newVal));
    const multiplier = multipliers.reduce(
      (prevVal, newVal) => +prevVal + (+newVal),
      multiplierInit
    );
    return multiplicand * multiplier;
  });
};
