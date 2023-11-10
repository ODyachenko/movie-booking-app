import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import supabase from '../../config/supabaseClient';

type postBookingType = {
  cinema: string;
  date: string;
  time: string;
  name: string | undefined;
  seats: string[];
  navigate: NavigateFunction;
};

// Post Booking
export const postBooking = createAsyncThunk<
  undefined,
  postBookingType,
  { rejectValue: string }
>('booking/postBooking', async function (obj, { rejectWithValue }) {
  const { error } = await supabase.from('booked movie').insert(obj);
  const location = {
    pathname: '/e-ticket',
    search: `?name=${obj.name}&cinema=${obj.cinema}&date=${obj.date}&time=${obj.time}&seats=${obj.seats}`,
  };

  if (error) {
    return rejectWithValue(error.message);
  }
  obj.navigate(location);
});

// Define a type for the slice state
interface bookingState {
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: bookingState = {
  loading: true,
  error: null,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // setIsShowing: (state, action: PayloadAction<number>) => {
    //   state.isShowing = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postBooking.fulfilled, (state) => {
        state.loading = false;
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

// export const {} = bookingSlice.actions;

export default bookingSlice.reducer;
