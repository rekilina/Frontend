import styles from "./Button.module.css"

const Button = (props) => {
	return (
		<button type={props.type || 'button'}
			onClick={props.onClick}
			className={`${styles['adduser__form-button']} ${props.className}`}>{props.children}</button>
	);
}

export default Button;