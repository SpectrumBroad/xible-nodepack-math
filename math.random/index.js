'use strict';

module.exports = (NODE) => {
  NODE
  .getOutputByName('number')
  .on('trigger', async () => Math.random());
};
