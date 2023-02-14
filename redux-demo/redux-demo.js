const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1
		};
	}
	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1
		};
	}
	return state;
};

const store = redux.createStore(counterReducer, { counter: 0 });

console.log(store.getState());

const counterSubscriber = () => {
	// .getState is a method which is available in the store
	// created with createStore
	// It will give us the latest state snapshot after it was updated
	const latestState = store.getState();
	console.log('latestState: ', latestState);
};
// Subscribe method expects a function 
// which Redux will execute whenever the data in the store change
// Both Reducer and Subscriber functions will be executed by redux
store.subscribe(counterSubscriber);

// create and dispatch an action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });