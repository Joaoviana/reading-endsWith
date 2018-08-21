let assert = require('tressa');
let cases = require('./test-cases');

let endsWith_tracible = require("./4-endsWith-tracible-test");

assert.title('endsWith_tracible');

for (let cond of cases) {
	assert(endsWith_tracible(...cond.args) === cond.expected, 
		[cond.message, endsWith_tracible(...cond.args, true)]);
};


