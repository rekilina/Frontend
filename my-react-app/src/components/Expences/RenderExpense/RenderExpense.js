import React, { useState } from 'react';
import "./RenderExpense.css";
import Card from '../../Card/Card';
import ExpensesFilter from '../../ExpenseFilter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpenseChart from '../ExpensesChart/ExpensesChart';


function RenderExpense(props) {

	const [optionYear, setOptionYear] = useState('2023');

	const changeDisplayedYear = (option) => {
		setOptionYear(option);
	}

	const filteredExpenses = props.data.filter((item) => {
		return item.date.getFullYear().toString() === optionYear;
	})



	return <Card className='expenses'>
		<ExpensesFilter selected={optionYear}
			onOptionChange={changeDisplayedYear} />
		<ExpenseChart expenses={filteredExpenses} />
		<ExpensesList items={filteredExpenses} />
	</Card>
}


export default RenderExpense;