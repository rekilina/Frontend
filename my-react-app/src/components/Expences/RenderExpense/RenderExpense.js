import "./RenderExpense.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../Card/Card';


function RenderExpense(props) {
	return <Card className='expenses'>
		{
			props.data.map(item => {

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