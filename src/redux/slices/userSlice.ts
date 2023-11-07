import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ImoviesList } from '../../../@types';

// Define a type for the slice state
interface userState {
  isAuth: boolean;
}

// Define the initial state using that type
const initialState: userState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    // setTopMovies: (state, action: PayloadAction<ImoviesList[]>) => {
    //   state.topMovies = action.payload;
    // },
  },
});

export const { setIsAuth } = userSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
