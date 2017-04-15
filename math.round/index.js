module.exports = function(NODE) {

	let numberIn = NODE.getInputByName('number');

	let resultOut = NODE.getOutputByName('result');
	resultOut.on('trigger', (conn, state, callback) => {

		numberIn.getValues(state).then((numbers) => {
			callback(Math.round(numbers.reduce((prevVal, newVal) => +prevVal + (+newVal))));
		});

	});

};
