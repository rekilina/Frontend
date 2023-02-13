import { useState, useReducer } from 'react';

const initialState = {
	value: '',
	isTouched: false
};
const inputStateReducer = (state, action) => {
	if (action.type === 'IS_TOUCHED') {
		return {
			value: state.value,
			isTouched: action.value
		}
	} else if (action.type === 'VALUE') {
		return {
			value: action.value,
			isTouched: state.isTouched
		}
	}

	return inputStateReducer;
};

const useValidate = (validateFn) => {
	// const [enteredValue, setEnteredValue] = useState('');
	// const [enteredValueTouched, setEnteredValueTouched] = useState(false);

	const [inputState, dispatchedFn] = useReducer(inputStateReducer, initialState);

	const enteredValueIsValid = validateFn(inputState.value);
	const valueInputIsInvalid = !enteredValueIsValid && inputState.isTouched;

	const InputBlurHandler = event => {
		// setEnteredValueTouched(true);
		dispatchedFn({ type: 'IS_TOUCHED', value: true });
	}

	const InputChangeHandler = event => {
		// setEnteredValue(event.target.value);
		dispatchedFn({ type: 'VALUE', value: event.target.value });
	}

	const reset = () => {
		// setEnteredValue('');
		// setEnteredValueTouched(false);
		dispatchedFn({ type: 'VALUE', value: '' });
		dispatchedFn({ type: 'IS_TOUCHED', value: false });
	}

	return {
		enteredValue: inputState.value,
		valueInputIsInvalid,
		InputBlurHandler,
		InputChangeHandler,
		enteredValueTouched: inputState.isTouched,
		reset
	};
}

export default useValidate;