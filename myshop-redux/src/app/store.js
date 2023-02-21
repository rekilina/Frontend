import { configureStore, createSlice } from '@reduxjs/toolkit';
import sliderReducer from '../features/slices/slider-slice'

export const store = configureStore({
  reducer: {
    slider: sliderReducer
  }
});
