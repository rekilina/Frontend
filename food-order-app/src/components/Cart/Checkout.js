import classes from "./Checkout.module.css"
import { useRef, useState } from 'react';

const isEmpty = value => {
	return value.trim() === '';
}

const postalIsValid = value => {
	return +value.trim().length === 5;
}

const Checkout = props => {
	const nameInputHandler = useRef();
	const streetInputHandler = useRef();
	const postalCodeInputHandler = useRef();
	const cityInputHandler = useRef();

	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		street: true,
		postalCode: true,
		city: true
	});

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputHandler.current.value;
		const enteredStreet = streetInputHandler.current.value;
		const enteredPostalCode = postalCodeInputHandler.current.value;
		const enteredCity = cityInputHandler.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		const enteredStreetIsValid = !isEmpty(enteredStreet);
		const enteredPostalIsValid = postalIsValid(enteredPostalCode);
		const enteredCityIsValid = !isEmpty(enteredCity);

		setFormInputsValidity({
			name: enteredNameIsValid,
			street: enteredStreetIsValid,
			postalCode: enteredPostalIsValid,
			city: enteredCityIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			enteredStreetIsValid &&
			enteredPostalIsValid &&
			enteredCityIsValid;

		if (!formIsValid) {

		}
		console.log('submit');
		props.onConfirm({
			name: enteredName,
			street: enteredStreet,
			postalCode: enteredPostalCode,
			city: enteredCity
		});
	}

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={`${classes.control} ${!formInputsValidity.name && classes.invalid}`}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInputHandler} />
				{!formInputsValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div className={`${classes.control} ${!formInputsValidity.street && classes.invalid}`}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInputHandler} />
				{!formInputsValidity.street && <p> Please enter a valid street!</p>}
			</div>
			<div className={`${classes.control} ${!formInputsValidity.postalCode && classes.invalid}`}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postalCodeInputHandler} />
				{!formInputsValidity.postalCode && <p> Please enter a valid postal code!</p>}
			</div>
			<div className={`${classes.control} ${!formInputsValidity.city && classes.invalid}`}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputHandler} />
				{!formInputsValidity.city && <p> Please enter a valid city!</p>}
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit" className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
}

export default Checkout;