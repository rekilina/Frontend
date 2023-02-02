import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import "./ExpensesList.css"

const ExpensesList = (props) => {
	let expenseContent = <h2 className='expenses-list__fallback'>No expenses found.</h2>

	if (props.items.length > 0) {
		expenseContent = props.items.map(item => {
			return <li key={Math.random()}>
				<ExpenseItem
					title={item.title}
					amount={item.amount}
					date={item.date}
					key={Math.random()}
				/>
			</li>
		})
	}

	return <ul className="expenses-list">
		{expenseContent}
	</ul>;
}

export default ExpensesList;