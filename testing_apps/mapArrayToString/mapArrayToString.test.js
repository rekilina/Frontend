const mapArrayToString = require('./mapArrayToString');

describe('mapArrayToString', () => {
	test('Correct value', () => {
		expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3']);
	});

	test('Correct value with letters', () => {
		expect(mapArrayToString([1, 2, 'a', 3])).toEqual(['1', '2', '3']);
	});

	test('Not to equal', () => {
		expect(mapArrayToString([1, 2, 'a', 3])).not.toEqual(['1', '2', 'a', '3']);
	});
})