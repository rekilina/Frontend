import { useState } from 'react';


const useValidate = (validateFn) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [enteredValueTouched, setEnteredValueTouched] = useState(false);

	const enteredValueIsValid = validateFn(enteredValue);
	const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouched;

	const InputBlurHandler = event => {
		setEnteredValueTouched(true);
	}

	const InputChangeHandler = event => {
		setEnteredValue(event.target.value);
	}

	const reset = () => {
		setEnteredValue('');
		setEnteredValueTouched(false);
	}

	return {
		enteredValue,
		valueInputIsInvalid,
		InputBlurHandler,
		InputChangeHandler,
		enteredValueTouched,
		reset
	};
}

export default useValidate;