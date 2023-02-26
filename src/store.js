import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './utils/reducers/moviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
