module.exports = function(NODE) {

	let valuesIn = NODE.getInputByName('values');

	let resultOut = NODE.getOutputByName('result');
	resultOut.on('trigger', (conn, state, callback) => {

		valuesIn.getValues(state).then((numbers) => {
			callback(numbers.reduce((prevVal, newVal) => +prevVal + (+newVal)));
		});

	});

};
