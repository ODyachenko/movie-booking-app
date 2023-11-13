import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import supabase from '../../config/supabaseClient';
import { v4 } from 'uuid';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../@types';
import { LoginFormData } from '../../../@types';

type LoginUserType = {
  data: LoginFormData;
  navigate: NavigateFunction;
};

type SignupUserType = {
  createFormData: {
    email: string;
    password: string;
    options: {
      data: {
        fullname: string;
        avatarUrl?: string;
      };
    };
  };
  navigate: NavigateFunction;
};
type UpdateUserType = {
  updateFormData: {
    email: string;
    password: string;
    data: {
      fullname: string;
      avatarUrl?: string;
    };
  };
  navigate: NavigateFunction;
};

type UploadAvatarType = {
  path: string;
};

// Log in user
export const loginUser = createAsyncThunk<
  undefined,
  LoginUserType,
  { rejectValue: string }
>('user/loginUser', async function ({ data, navigate }, { rejectWithValue }) {
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return rejectWithValue(error.message);
  }
  navigate('/');
});

// Sign up user
export const signupUser = createAsyncThunk<
  undefined,
  SignupUserType,
  { rejectValue: string }
>(
  'user/signupUser',
  async function ({ createFormData, navigate }, { rejectWithValue }) {
    const { error } = await supabase.auth.signUp(createFormData);

    if (error) {
      return rejectWithValue(error.message);
    }
    navigate('/');
  }
);

// Upload user avatar
export const uploadAvatar = createAsyncThunk<
  UploadAvatarType,
  File,
  { rejectValue: string }
>('user/uploadAvatar', async function (avatarFile, { rejectWithValue }) {
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(v4(), avatarFile);

  if (error) {
    return rejectWithValue(error.message);
  }
  return data;
});

// Log out user
export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: string }
>('user/logoutUser', async function (_, { rejectWithValue }) {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return rejectWithValue(error.message);
  }
});

// Update user data
export const updateUserData = createAsyncThunk<
  undefined,
  UpdateUserType,
  { rejectValue: string }
>(
  'user/updateUserData',
  async function ({ updateFormData, navigate }, { rejectWithValue }) {
    const { error } = await supabase.auth.updateUser(updateFormData);

    if (error) {
      return rejectWithValue(error.message);
    }
    navigate('/settings');
  }
);

// Define a type for the slice state
interface userState {
  isAuth: boolean;
  authUser: User;
  avatar: string;
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
  avatar: `${process.env.REACT_APP_STORAGE_URI}/avatar_private.png`,
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
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuth = true;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuth = true;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state) => {
        state.loading = false;
        state.isAuth = false;
      })
      .addCase(uploadAvatar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.avatar = `${process.env.REACT_APP_STORAGE_URI}/${action.payload.path}`;
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
