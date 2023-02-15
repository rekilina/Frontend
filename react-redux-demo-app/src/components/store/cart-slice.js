import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const cartInitialState = {
	items: [],
	totalQuantity: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartInitialState,
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			let existingItem = state.items.find((item) => {
				return item.itemId === newItem.id;
			});
			if (!existingItem) {
				// thanks for redux-toolkit we can do it this way
				state.items.push({
					itemId: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
			state.totalQuantity++;
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find(item => item.itemId === id);
			if (existingItem.quantity === 1) {
				state.items = state.items.filter(item => item.itemId !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
			}
			state.totalQuantity--;
		}
	}
});

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(uiActions.showNotification({
			status: 'pending',
			title: 'Sending...',
			message: 'Sending cart data!'
		}));

		const sendRequest = async () => {
			const response = await fetch('https://react-http-tests-5c0a0-default-rtdb.firebaseio.com/cart.json',
				{// override existing card with incoming data
					method: 'PUT',
					body: JSON.stringify(cart)
				});

			if (!response.ok) {
				throw new Error('Sending cart data failed');
			}
		}
		try {
			await sendRequest();
		} catch (error) {
			dispatch(uiActions.showNotification({
				status: 'error',
				title: 'Error!',
				message: `Sent cart data failed. ${error}`
			}));
		}


		dispatch(uiActions.showNotification({
			status: 'success',
			title: 'Success...',
			message: 'Sent cart data sucessfully.'
		}));
	}
}

export const cartActions = cartSlice.actions;

export default cartSlice;