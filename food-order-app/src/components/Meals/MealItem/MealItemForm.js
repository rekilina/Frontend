import styles from "./MealItemForm.module.css"
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	// here to extract amount from the form we will use Refs
	// but you can't use refs in custom component out of the box
	// what you have to do is to go to the Component where you 
	// want to recieve Ref. So go to the Input Component
	const submitHandlerFunction = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5) {
			setAmountIsValid(false);
			return;
		} else {
			setAmountIsValid(true);
		}
		props.onAddToCart(enteredAmountNumber);
	}

	return (
		<form className={styles.form} onSubmit={submitHandlerFunction}>
			<Input label="Amount" ref={amountInputRef} input={{
				type: "number",
				id: "amount_" + props.id,
				min: "0",
				max: "5",
				step: "1",
				defaultValue: '0'
			}} />
			<button type="submit">Add +</button>
			{!amountIsValid && <p>Please Enter a valid amount (1-5)</p>}
		</form>
	);
}

export default MealItemForm;