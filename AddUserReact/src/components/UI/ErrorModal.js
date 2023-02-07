import React from 'react';
import styles from "./ErrorModal.module.css"
import Card from "./Card"
import Button from "./Button"

const ErrorModal = props => {
	return (
		<div>
			<div className={styles.backdrop} onClick={props.onReset}></div>
			<Card className={styles.modal}>
				<header className={styles.header}><h2>{props.title}</h2></header>
				<section>
					<p className={styles.content}>{props.message}</p>
				</section>
				<footer className={styles.actions}>
					<Button onClick={props.onReset}>OK</Button>
				</footer>
			</Card>
		</div>
	);
}

export default ErrorModal;