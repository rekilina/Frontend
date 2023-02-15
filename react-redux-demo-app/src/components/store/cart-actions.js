import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

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

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch('https://react-http-tests-5c0a0-default-rtdb.firebaseio.com/cart.json');

			if (!response.ok) {
				throw new Error("Can't fetch cart data");
			}

			const data = await response.json();

			return data;
		}

		try {
			const cartData = await fetchData();
			dispatch(cartActions.replaceCart(cartData));
		} catch (error) {
			dispatch(uiActions.showNotification({
				status: 'error',
				title: 'Error!',
				message: `Fetching cart data failed. ${error}`
			}));
		}
	}
}