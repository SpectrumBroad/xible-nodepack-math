module.exports = function(NODE) {

	let resultOut = NODE.getOutputByName('result');
	resultOut.on('trigger', (conn, state, callback) => {

		NODE.getInputByName('a').getValues(state).then((aNumbers) => {

			NODE.getInputByName('b').getValues(state).then((bNumbers) => {

				let bInit = 0;
				if (!bNumbers.length) {
					bInit = +NODE.data.value || 0;
				}

				const sumA = aNumbers.reduce((prevVal, newVal) => +prevVal + (+newVal));
				const sumB = bNumbers.reduce((prevVal, newVal) => +prevVal + (+newVal), bInit);
				callback(sumA - sumB);

			});

		});

	});

};
