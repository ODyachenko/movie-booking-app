import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import moviesSlice from './slices/moviesSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    movies: moviesSlice,
    user: userSlice,
    // [postsApi.reducerPath]: postsApi.reducer,
  },
  // middleware: (getDefaultMiddleware: any) =>
  //   getDefaultMiddleware()
  //     .concat(postsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
