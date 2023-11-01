import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import moviesSlice from './slices/moviesSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    movies: moviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
