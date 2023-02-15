import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
	counter: 0,
	showCounter: true
}

// slice of our global state
// createSlice function automatically creates unique action identifiers
// for all our different reducers.
const counterSlice = createSlice({
	name: 'counter',  //every slice should have a name
	initialState: initialCounterState,
	reducers: { // all the reducers this slice needs
		increment(state) {
			// here we are allowed to mutate state!
			// because redux aoutomatically create new state object
			// event if we are mutating existing state
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		}
	}
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;