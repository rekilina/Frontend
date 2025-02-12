const validateValue = require('./validateValue');

describe('Validate true', () => {
	test("Validate number between 0 and 100", () => {
		expect(validateValue(50)).toBe(true);
	});

	test("Validate number 0", () => {
		expect(validateValue(0)).toBe(true);
	});

	test("Validate number 100", () => {
		expect(validateValue(100)).toBe(true);
	});
});

describe('Validate false', () => {
	test("Validate negative number", () => {
		expect(validateValue(-1)).toBe(false);
	});

	test("Validate number more than 100", () => {
		expect(validateValue(200)).toBe(false);
	});

});


