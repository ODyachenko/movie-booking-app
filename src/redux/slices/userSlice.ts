import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../@types';
import supabase from '../../config/supabaseClient';
import { LoginFormData } from '../../../@types';

// Log out user
export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('user/logoutUser', async function (_, { rejectWithValue }) {
  // eslint-disable-next-line no-restricted-globals
  if (confirm('Do you want to logout?')) {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return rejectWithValue(error.message);
    }
  }
});

// Define a type for the slice state
interface userState {
  isAuth: boolean;
  authUser: User;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: userState = {
  isAuth: false,
  authUser: {
    fullname: '',
    avatarUrl: '',
    email: '',
  },
  loading: false,
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuth = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { setIsAuth, setAuthUser } = userSlice.actions;

export default userSlice.reducer;
