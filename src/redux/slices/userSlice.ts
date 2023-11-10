import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../@types';
import supabase from '../../config/supabaseClient';
import { LoginFormData } from '../../../@types';

// Fetch movies
// export const signInUser = createAsyncThunk<
//   undefined,
//   LoginFormData,
//   { rejectValue: string }
// >('user/signInUser', async function (data, { rejectWithValue }) {
//   const { error } = await supabase.auth.signInWithPassword(data);

//   if (error) {
//     return rejectWithValue(error.message);
//   }
//   return;
// });

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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(signInUser.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(signInUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.isAuth = true;
  //     })
  //     .addMatcher(isError, (state, action: PayloadAction<string>) => {
  //       state.error = action.payload;
  //       state.loading = false;
  //     });
  // },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const { setIsAuth, setAuthUser } = userSlice.actions;

export default userSlice.reducer;
