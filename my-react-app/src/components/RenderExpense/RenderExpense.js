import "./RenderExpense.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem';


function RenderExpense(props) {
	const data = props.data;
	let elements = [];
	for (let elem of data) {
		elements.push(
			<ExpenseItem title={elem.title}
				amount={elem.amount}
				date={elem.date} />
		);
	}

	return (
		<div className="expenses">{elements}</div>
	);
}


export default RenderExpense;