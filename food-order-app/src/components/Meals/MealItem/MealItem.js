import styles from "./MealItem.module.css"
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;
	return (
		<li key={props.id} className={styles.meal}>
			<div className={styles.meal__inner}>
				<h3>{props.name}</h3>
				<p className={styles.description}>{props.description}</p>
				<p className={styles.price}>{price}</p>
			</div>
			<div>
				<MealItemForm />
			</div>
		</li>
	);
}

export default MealItem;