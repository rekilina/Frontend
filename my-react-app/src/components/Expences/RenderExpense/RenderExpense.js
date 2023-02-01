import "./RenderExpense.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../Card/Card';


function RenderExpense(props) {
	// const data = props.data;
	// let elements = [];
	// for (let elem of data) {
	// 	elements.push(
	// 		<ExpenseItem title={elem.title}
	// 			amount={elem.amount}
	// 			date={elem.date} />
	// 	);
	// }

	return props.data.map(item => {

		return <ExpenseItem
			title={item.title}
			amount={item.amount}
			date={item.date}

		/>
	})
}


export default RenderExpense;