import React, { useRef } from 'react'

type Props = { onAdd: (text: string) => void }

const NewToDo: React.FC<Props> = (props: Props) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		props.onAdd(enteredText);
		textInputRef.current!.value = '';
	}

	return (
		<form onSubmit={todoSubmitHandler}>
			<label>Text: </label>
			<input type="text"
				id="input-text"
				ref={textInputRef} />
			<button type="submit">Add ToDo</button>
		</form>
	)
}

export default NewToDo