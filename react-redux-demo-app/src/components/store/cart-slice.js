import { createSlice } from '@reduxjs/toolkit';

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

export const cartActions = cartSlice.actions;

export default cartSlice;