const assert = require('tressa');

const cases = require('./test-cases.js');

const endsWith_refactor = require("../3-endsWith-refactor.js");

assert.title('endsWith');


for (let cond of cases) {
	assert(endsWith_refactor(...cond.input) === cond.expected, cond.message);
};
