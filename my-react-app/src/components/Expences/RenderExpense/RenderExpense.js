import React, { useState } from 'react';
import "./RenderExpense.css";
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../Card/Card';
import ExpensesFilter from '../../ExpenseFilter/ExpenseFilter';


function RenderExpense(props) {

	const [optionYear, setOptionYear] = useState('2023');

	const changeDisplayedYear = (option) => {
		setOptionYear(option);
	}

	const filteredExpenses = props.data.filter((item) => {
		return item.date.getFullYear().toString() === optionYear;
	})

	return <Card className='expenses'>
		<ExpensesFilter selected={optionYear} onOptionChange={changeDisplayedYear} />
		{
			filteredExpenses.map(item => {
				return <ExpenseItem
					title={item.title}
					amount={item.amount}
					date={item.date}
					key={Math.random()}
				/>
			})
		}
	</Card>
}


export default RenderExpense;