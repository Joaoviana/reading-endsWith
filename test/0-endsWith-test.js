let assert = require('tressa');
let cases = require('./test-cases.js');

let endsWith = require('../0-endsWith.js');

assert.title('endsWith');

for (let cond of cases) {
	assert(endsWith(...cond.input) === cond.expected, cond.message);
};
