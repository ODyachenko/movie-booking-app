import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { Movies } from './Movies';

export const RecommendedMovies: FC = () => {
  const { recommendedMovies } = useAppSelector((state) => state.movies);

  return <Movies title="Recommended" movies={recommendedMovies} />;
};
