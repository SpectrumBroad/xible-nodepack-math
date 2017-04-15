module.exports = function(NODE) {

	let multiplicandIn = NODE.getInputByName('multiplicand');
	let multiplierIn = NODE.getInputByName('multiplier');

	let numberOut = NODE.getOutputByName('result');
	numberOut.on('trigger', (conn, state, callback) => {

		multiplicandIn.getValues(state).then((multiplicands) => {

			multiplierIn.getValues(state).then((multipliers) => {

				let multiplierInit = 0;
				if (!multipliers.length) {
					multiplierInit = +NODE.data.value || 0;
				}

				const multiplicand = multiplicands.reduce((prevVal, newVal) => +prevVal + (+newVal));
				const multiplier = multipliers.reduce((prevVal, newVal) => +prevVal + (+newVal), multiplierInit);
				callback(multiplicand * multiplier);

			});

		});

	});

};
