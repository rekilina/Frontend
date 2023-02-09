import styles from "./Input.module.css"
import React from 'react';

// In order to use Refs with your custom component 
//your need to wrap the component with forwardRef 
// So now you also need to add "ref" as a second parameter
const Input = React.forwardRef((props, ref) => {
	return (
		<div className={styles.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
		</div>
	);
});

export default Input;