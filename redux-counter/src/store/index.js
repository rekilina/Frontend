import { createSlice, configureStore } from '@reduxjs/toolkit';
// const redux = require('redux');

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

const initialAuthState = {
	isAuthenticated: false
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		}
	}
});

// configureStore recieves configuration object
// which has reducer property
// the library will merge all our reducer in one big reducer
// Important: you can call configureStore only once
// You have only one state
// and you have only one root reducer here
const store = configureStore({
	//reducer: { counter: counterSlice.reducer } // map of reducers
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer
	}
});

// as it was mentoined before,
// createSlice automatically creates unique action identifiers
// they are stored in counterSlice.actions
// for example
// counterSlice.actions.toggleCounter()
// returns an action object of this type:
// { type: 'some auto-generated unique identifier' }

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;