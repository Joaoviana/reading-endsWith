let test_cases = [
		//{input: ['a\bc', '\b', 2], expected: true, message: "'a\bc', '\b', 2 -> true"},
		{input: [56784, '84', 5], expected: true, message: "56784, '84', 5 -> trye"},
		{input: ['', '', 0], expected: true, message: "'', '', 0 -> true"},
		{input: ['', '1'], expected: false, message: "'', '1' -> false"},
		{input: ['a\bc', '\b'], expected: false, message: "'a\bc', '\b' -> false"},
		{input: ['a\bc', 'c',3], expected: true, message: "'a\bc', 'c',3 -> true"},
		{input: ['56784', 84, 5], expected: true, message: "'56784', 84, 5 -> true"},
		{input: ['a b', ''], expected: true, message: "'a b', '' -> true"},
		{input: ['ab', '', 4], expected: true, message: "'ab', '', 4 -> true"},
		{input: ['abcdef', 'cd', -1], expected: false, message: "'abcdef', 'cd', -1 -> false"},
		{input: ['abcdef', 'cd', -1.5], expected: false, message: "'abcdef', 'cd', -1.5-> false"},
		{input: ['abcdef', 'cd', 4.5], expected: true, message: "'abcdef', 'cd', 4.5 -> true"},
		{input: ['abcdef', 'cd', 4.9], expected: true, message: "'abcdef', 'cd', 4.9 -> true"},
		{input: ['abcdef', 'cd', 2], expected: false, message: "'abcdef', 'cd', 2 -> false"}
];

module.exports = test_cases;