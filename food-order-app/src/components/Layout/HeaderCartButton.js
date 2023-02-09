import styles from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const CartButton = (props) => {
	const ctxCart = useContext(CartContext);
	const numOfItems = ctxCart.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount
	}, 0);

	return (<button className={styles.button} onClick={props.onClick}>
		<span className={styles.icon}>
			<CartIcon />
		</span>
		<span>Your Cart</span>
		<span className={styles.badge}>{numOfItems}</span>
	</button>);
}

export default CartButton;