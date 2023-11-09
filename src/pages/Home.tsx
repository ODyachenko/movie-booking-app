import React, { FC, useEffect } from 'react';
import { Main } from '../components/Main/Main';
import { useAppDispatch } from '../hooks/hooks';
import { fetchMovies } from '../redux/slices/moviesSlice';

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <Main />;
};
