import { configureStore } from '@reduxjs/toolkit';
// const redux = require('redux');

import counterReducer from './counter';
import authReducer from './auth';

// configureStore recieves configuration object
// which has reducer property
// the library will merge all our reducer in one big reducer
// Important: you can call configureStore only once
// You have only one state
// and you have only one root reducer here
const store = configureStore({
	//reducer: { counter: counterSlice.reducer } // map of reducers
	reducer: {
		counter: counterReducer,
		auth: authReducer
	}
});

// as it was mentoined before,
// createSlice automatically creates unique action identifiers
// they are stored in counterSlice.actions
// for example
// counterSlice.actions.toggleCounter()
// returns an action object of this type:
// { type: 'some auto-generated unique identifier' }

export default store;