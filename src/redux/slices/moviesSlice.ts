import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ImoviesList } from '../../../@types';

// Define a type for the slice state
interface MoviesState {
  topMovies: ImoviesList[];
  recommendedMovies: ImoviesList[];
}

// Define the initial state using that type
const initialState: MoviesState = {
  topMovies: [],
  recommendedMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setTopMovies: (state, action: PayloadAction<ImoviesList[]>) => {
      state.topMovies = action.payload;
    },
    setRecommendedMovies: (state, action: PayloadAction<ImoviesList[]>) => {
      state.recommendedMovies = action.payload;
    },
  },
});

export const { setTopMovies, setRecommendedMovies } = moviesSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default moviesSlice.reducer;
