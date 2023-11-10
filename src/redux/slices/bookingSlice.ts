import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import supabase from '../../config/supabaseClient';
import {
  BookingInfo,
  SelectFieldOptions,
  BookingItem,
  BookingType,
} from '../../../@types';

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

export const fetchBookingInfo = createAsyncThunk<
  any,
  string | undefined,
  { rejectValue: string }
>('booking/fetchBookingInfo', async function (id, { rejectWithValue }) {
  const { data, error } = await supabase
    .from('booking')
    .select()
    .eq('movieId', id);

  if (error) {
    return rejectWithValue(error.message);
  }
  return data;
});

// const fetchBookingInfo = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('booking')
//         .select()
//         .eq('movieId', id);

//       if (error) {
//         throw error;
//       }
//       setBookingInfo(data[0].bookingInfo);
//       setBooking({ ...booking, name: data[0].name });
//       setCinema(data[0].bookingInfo.map((item: BookingItem) => item.option));
//     } catch (error) {
//       console.error(error);
//     }
//   };

// Define a type for the slice state
interface bookingState {
  booking: BookingType;
  bookingInfo: BookingInfo[];
  cinema: SelectFieldOptions[];
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: bookingState = {
  booking: {
    cinema: '',
    date: '',
    time: '',
    name: '',
  },
  bookingInfo: [],
  cinema: [],
  loading: true,
  error: null,
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBooking: (state, action: PayloadAction<BookingType>) => {
      state.booking = action.payload;
    },
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
      .addCase(fetchBookingInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookingInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.booking = { ...state.booking, name: action.payload[0].name };
        state.bookingInfo = action.payload[0].bookingInfo;
        state.cinema = action.payload[0].bookingInfo.map(
          (item: BookingItem) => item.option
        );
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

export const { setBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
