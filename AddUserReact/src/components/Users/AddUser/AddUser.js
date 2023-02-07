import React, { useState, useRef } from 'react';
import styles from "./AddUser.module.css"
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import ErrorModal from '../../UI/ErrorModal';

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	// const [enteredUserName, setEnteredUserName] = useState('');
	// const [enteredUserAge, setEnteredUserAge] = useState('');
	const [error, setError] = useState();

	// const usernameChangeHandler = (event) => {
	// 	setEnteredUserName(event.target.value);
	// }

	// const userageChangeHandler = (event) => {
	// 	setEnteredUserAge(event.target.value);
	// }

	const addUserHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;
		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({ title: 'Invalid input', message: 'Enter non-epty values' });
			return;
		}
		if (+enteredAge < 1) {
			setError({ title: 'Invalid age', message: 'Enter a valid age' });
			return;
		}
		props.onAddUser(enteredName, enteredAge);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
		// setEnteredUserName('');
		// setEnteredUserAge('');
	}

	const resetErrors = () => {
		setError(null);
	}

	return (
		<div>
			{error && <ErrorModal title={error.title} message={error.message} onReset={resetErrors} />}
			<Card>
				<form onSubmit={addUserHandler} className={styles.adduser__form}>
					<label htmlFor='username' className={styles['adduser__form-label']}>UserName</label>
					<input
						// value={enteredUserName}
						type="text"
						id="username"
						className={styles['adduser__form-input']}
						// onChange={usernameChangeHandler}
						ref={nameInputRef}
					></input>
					<label htmlFor='username' className={styles['adduser__form-label']}>Age (Years)</label>
					<input
						// value={enteredUserAge}
						type="number"
						id="userage"
						className={styles['adduser__form-input']}
						// onChange={userageChangeHandler}
						ref={ageInputRef}
					></input>
					<Button type="submit">add user</Button>
				</form >
			</Card>
		</div>
	);
}

export default AddUser;