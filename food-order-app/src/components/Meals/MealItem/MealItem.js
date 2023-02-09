import styles from "./MealItem.module.css"
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {

	const ctxCart = useContext(CartContext);

	const price = `$${props.price.toFixed(2)}`;

	const addToCartHandler = (amount) => {
		ctxCart.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
		});
	}

	return (
		<li key={props.id} className={styles.meal}>
			<div className={styles.meal__inner}>
				<h3>{props.name}</h3>
				<p className={styles.description}>{props.description}</p>
				<p className={styles.price}>{price}</p>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
}

export default MealItem;