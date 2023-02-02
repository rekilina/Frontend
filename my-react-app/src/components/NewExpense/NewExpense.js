import React, { useState } from 'react';
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
	const addExpenseBtn = <button onClick={showInputForm}>Add New Expense</button>
	const [cardContent, setCardContent] = useState(addExpenseBtn);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
		setCardContent(addExpenseBtn);
	};

	function showInputForm() {
		setCardContent(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideInputForm} />);
	}

	function hideInputForm() {
		setCardContent(addExpenseBtn);
	}

	return (
		<div className="new-expense">
			{cardContent}
		</div>
	);
};

export default NewExpense;