'use strict';

module.exports = (NODE) => {
  NODE
  .getOutputByName('number')
  .on('trigger', async () => +(NODE.data.value || 0));
};
