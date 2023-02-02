import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../Card/Card';

function ExpenseItem(props) {

	const [title, setTitle] = useState(props.title);

	// const clickHandler = () => {
	// 	console.log(title);
	// 	// title = 'Updated!'; This won't work
	// 	setTitle('Updated!');
	// 	console.log(title);
	// }


	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	)
}

export default ExpenseItem;