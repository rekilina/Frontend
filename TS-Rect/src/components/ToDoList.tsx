import React from 'react';

interface Props {
	items: {
		id: string | number,
		text: string
	}[]
}

const ToDoList: React.FC<Props> = (props) => {
	return (
		<ul>
			{props.items.map(item => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	)
}

export default ToDoList;