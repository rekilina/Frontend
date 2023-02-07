import React from 'react';
import styles from "./AddUser.module.css"


const AddUser = (props) => {

	const addUserHandler = (event) => {
		event.preventDefault();
	}

	return (
		<form onSubmit={addUserHandler} className={styles.adduser__form}>
			<label htmlFor='username' className={styles['adduser__form-label']}>UserName</label>
			<input type="text" id="username" className={styles['adduser__form-input']}></input>
			<label htmlFor='username' className={styles['adduser__form-label']}>Age (Years)</label>
			<input type="number" id="userage" className={styles['adduser__form-input']}></input>
			<button type="submit" className={styles['adduser__form-button']}>Add User</button>
		</form >
	);
}

export default AddUser;