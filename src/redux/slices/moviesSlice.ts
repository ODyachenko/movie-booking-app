import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ImoviesList } from '../../../@types';
import supabase from '../../config/supabaseClient';
import { parseMovies } from '../../utils/parseMovies';

// Fetch movies
export const fetchMovies = createAsyncThunk<
  ImoviesList[],
  undefined,
  { rejectValue: string }
>('movies/fetchMovies', async function (_, { rejectWithValue }) {
  const { data, error } = await supabase.from('movies').select();
  if (error) {
    return rejectWithValue(error.message);
  }
  return data;
});

// Define a type for the slice state
interface MoviesState {
  movies: ImoviesList[];
  topMovies: ImoviesList[];
  recommendedMovies: ImoviesList[];
  upcomingMovies: ImoviesList[];
  isShowing: number;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: MoviesState = {
  movies: [],
  topMovies: [],
  recommendedMovies: [],
  upcomingMovies: [],
  isShowing: 0,
  loading: true,
  error: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<ImoviesList[]>) => {
      state.movies = action.payload;
    },
    setTopMovies: (state) => {
      state.topMovies = state.movies.filter((movie) => movie.type === 'top');
    },
    setRecommendedMovies: (state) => {
      state.recommendedMovies = state.movies.filter(
        (movie) => movie.type === 'recommended'
      );
    },
    setUpcomingMovies: (state) => {
      state.upcomingMovies = state.movies.filter(
        (movie) => movie.type === 'upcoming'
      );
    },
    setIsShowing: (state, action: PayloadAction<number>) => {
      state.isShowing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;

        state.topMovies = parseMovies(action.payload, 'top');
        state.recommendedMovies = parseMovies(action.payload, 'recommended');
        state.upcomingMovies = parseMovies(action.payload, 'upcoming');
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

export const {
  setMovies,
  setTopMovies,
  setRecommendedMovies,
  setUpcomingMovies,
  setIsShowing,
} = moviesSlice.actions;

export default moviesSlice.reducer;
