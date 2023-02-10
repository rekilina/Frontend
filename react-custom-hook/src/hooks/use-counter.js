import { useState, useEffect } from 'react';

const useCounter = (counterUpdateFn) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counterUpdateFn);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return counter;

};

export default useCounter;