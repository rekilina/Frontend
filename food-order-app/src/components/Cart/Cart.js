import styles from './Cart.module.css'
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from "./CartItem"

const Cart = props => {
	const ctxCart = useContext(CartContext);

	const totalAmount = `$${ctxCart.totalAmount.toFixed(2)}`;
	const hasItems = ctxCart.items.length > 0;

	const cartItemAddHandler = item => {
		ctxCart.addItem({
			...item,
			amount: 1
		});
	};

	const cartItemRemoveHandler = id => {
		ctxCart.removeItem(id);
	};

	const cartItems = <ul className={styles['cart-items']}>
		{ctxCart.items.map(item => {
			return (
				<CartItem key={item.id}
					name={item.name}
					price={item.price}
					amount={item.amount}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)} />
			);
		})}
	</ul>;

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button onClick={props.onClose} className={styles['button--alt']}>Close</button>
				{hasItems && <button onClick={props.onClose} className={styles['button']}>Order</button>}
			</div>
		</Modal >
	);
}

export default Cart;