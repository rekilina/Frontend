import React from 'react';
import styles from "./ErrorModal.module.css"
import Card from "./Card"
import Button from "./Button"
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}><h2>{props.title}</h2></header>
			<section>
				<p className={styles.content}>{props.message}</p>
			</section>
			<footer className={styles.actions}>
				<Button onClick={props.onReset}>OK</Button>
			</footer>
		</Card>
	);
}

const ErrorModal = props => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClick={props.onReset} />,
				document.getElementById('backdrop-root'))}
			{ReactDOM.createPortal(<ModalOverlay
				message={props.message}
				title={props.title}
				onReset={props.onReset}
			/>,
				document.getElementById('modal-root'))}
		</>
	);
}

export default ErrorModal;