import styles from './Cart.module.css'
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from "./CartItem"
import Checkout from './Checkout';

const Cart = props => {
	const [isCheckout, setIsCheckout] = useState(false);
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

	const orderHandler = () => {
		setIsCheckout(true);
	}

	const modalActions = (
		<div className={styles.actions}>
			<button onClick={props.onClose} className={styles['button--alt']}>Close</button>
			{hasItems && <button onClick={orderHandler} className={styles['button']}>Order</button>}
		</div>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onCancel={props.onClose} />}
			{!isCheckout && modalActions}
		</Modal >
	);
}

export default Cart;