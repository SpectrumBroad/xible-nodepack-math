module.exports = function(NODE) {

	let numbersIn = NODE.getInputByName('numbers');

	let numberOut = NODE.getOutputByName('number');
	numberOut.on('trigger', (conn, state, callback) => {

		numbersIn.getValues(state).then((numbers) => {

			const sum = numbers.reduce((prevVal, newVal) => +prevVal + (+newVal));
			callback(sum / numbers.length);

		});

	});

};
