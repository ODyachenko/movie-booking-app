import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../@types';

// Define a type for the slice state
interface userState {
  isAuth: boolean;
  authUser: User;
}

// Define the initial state using that type
const initialState: userState = {
  isAuth: false,
  authUser: {
    fullname: '',
    avatarUrl: '',
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setAuthUser: (state, action: PayloadAction<User>) => {
      state.authUser = action.payload;
    },
  },
});

export const { setIsAuth, setAuthUser } = userSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
