import styles from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from '../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const CartButton = (props) => {
	const ctxCart = useContext(CartContext);
	const numOfItems = ctxCart.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount
	}, 0);

	const [btnHighlighted, setBtnHighlighted] = useState(false);

	let btnClasses = `${styles.button} ${btnHighlighted ? styles.bump : ''}`;

	useEffect(() => {
		if (ctxCart.items.length === 0) {
			return;
		}
		setBtnHighlighted(true);
		const timer = setTimeout(() => { setBtnHighlighted(false); }, 300);
		return () => {
			clearTimeout(timer);
		}
	}, [numOfItems]);

	return (<button className={btnClasses} onClick={props.onClick}>
		<span className={styles.icon}>
			<CartIcon />
		</span>
		<span>Your Cart</span>
		<span className={styles.badge}>{numOfItems}</span>
	</button>);
}

export default CartButton;