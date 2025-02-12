const square = require('./square');

describe('square', () => {
	let mockValue;
	// Before each test
	beforeEach(() => {
		// Add user to DB
	});
	// Once before all tests
	beforeAll(() => { });
	test('Correct value', () => {
		expect(square(2)).toBe(4);
		expect(square(2)).toBeLessThan(5);
		expect(square(2)).toBeGreaterThan(2);
		expect(square(2)).not.toBeUndefined();
	});
	test("Spy on Math.pow", () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2)
		expect(spyMathPow).toBeCalledTimes(1);
	});
	test("Do not call Math.pow for 1", () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		// clear mocks, otherwise test case will fail
		expect(spyMathPow).toBeCalledTimes(0);
	});
	afterEach(() => { 
		// clear Mocks, because they accumulate function calls
		jest.clearAllMocks();
	});
	afterAll(() => { });
});