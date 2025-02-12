const square = (x, p=2) => {
	if (x === 1) {
		return 1;
	}
	return Math.pow(x, p)
};

module.exports = square;