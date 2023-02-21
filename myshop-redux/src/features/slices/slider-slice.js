import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
	length: 4,
};

export const sliderSlice = createSlice({
	name: 'slider',
	initialState: initialState,
	reducers: {
		nextSlide(state, action) {
			console.log('state: ', state.value);
			console.log('action: ', action);
			state.value = action.payload > state.length - 1 ? 0 : action.payload;
			return state;
		},
		prevSlide(state, action) {
			state.value = action.payload < 0 ? state.length - 1 : action.payload;
			return state;
		},
		dotSlide() { }
	}
});

// export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export const sliderActions = sliderSlice.actions;

export default sliderSlice.reducer;