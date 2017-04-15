module.exports = function(NODE) {

	let resultOut = NODE.getOutputByName('result');
	resultOut.on('trigger', (conn, state, callback) => {

		NODE.getInputByName('values').getValues(state).then((vals) => {
			callback(vals.reduce((prevVal, newVal) => +prevVal + (+newVal), (+NODE.data.value || 0)));
		});

	});

};
