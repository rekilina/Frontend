import { useReducer } from 'react';

import CartContext from "./cart-context"

const defaultCartState = {
	items: [],
	totalAmount: 0
}

// price comes from the meal item
// amount comes from the meal form

// reducer function shouldn't be re-created every time the component changes
const cardReducer = (state, action) => {
	if (action.type === 'ADD') {
		// generate and return a brand new state object
		// that is why using concat
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	} else if (action.type === 'REMOVE') {

	}
	return defaultCartState;
}

const CartProvider = (props) => {

	// cartState is initialized with defaultCartState
	// and ahs the same object structure
	const [cartState, dispatchCartAction] = useReducer(cardReducer, defaultCartState);

	// we need to make sure that this function is being called
	const addItemToCartHandler = (item) => {
		// action could be a number or a string
		// but typically ACTION IS AN OBJECT
		// that identofoes the type of an action
		// type field specifies what to DO with the item
		// the second, item field, specifies
		// which item to use
		dispatchCartAction({
			type: 'ADD',
			item: item
		});
	}

	const removeItemFromCartHendler = (id) => {
		dispatchCartAction({
			type: 'REMOVE',
			id: id
		});
	}

	// concrete context value
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHendler
	}

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartProvider;