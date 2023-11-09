import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ImoviesList } from '../../../@types';

// Define a type for the slice state
interface MoviesState {
  movies: ImoviesList[];
  topMovies: ImoviesList[];
  recommendedMovies: ImoviesList[];
  upcomingMovies: ImoviesList[];
  isShowing: number;
}

// Define the initial state using that type
const initialState: MoviesState = {
  movies: [],
  topMovies: [],
  recommendedMovies: [],
  upcomingMovies: [],
  isShowing: 0,
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
});

export const {
  setMovies,
  setTopMovies,
  setRecommendedMovies,
  setUpcomingMovies,
  setIsShowing,
} = moviesSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default moviesSlice.reducer;
