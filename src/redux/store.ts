import { configureStore } from '@reduxjs/toolkit';
import bookingSlice from './slices/bookingSlice';
import moviesSlice from './slices/moviesSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    user: userSlice,
    booking: bookingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
