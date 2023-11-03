import React, { FC } from 'react';
import { Movies } from '../Movies/Movies';
import { useAppSelector } from '../../hooks/hooks';

export const TopMovies: FC = () => {
  const { topMovies } = useAppSelector((state) => state.movies);

  return <Movies title="Top Movies" movies={topMovies} />;
};
