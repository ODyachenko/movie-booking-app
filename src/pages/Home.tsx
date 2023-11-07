import React, { FC, useEffect } from 'react';
import supabase from '../config/supabaseClient';
import { Main } from '../components/Main/Main';
import { useAppDispatch } from '../hooks/hooks';
import {
  setMovies,
  setRecommendedMovies,
  setTopMovies,
} from '../redux/slices/moviesSlice';

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  const fetchMovies = async () => {
    try {
      const { data, error } = await supabase.from('movies').select();

      if (error) {
        throw error;
      }
      dispatch(setMovies(data));
      dispatch(setTopMovies());
      dispatch(setRecommendedMovies());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <Main />;
};
