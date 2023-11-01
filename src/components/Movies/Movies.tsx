import React, { FC } from 'react';

import { ImoviesList } from '../../../@types';
import { MoviesList } from './MoviesList';
import './styles.scss';

type MoviesProps = {
  title: string;
  movies: ImoviesList[];
};

export const Movies: FC<MoviesProps> = ({ title, movies }) => {
  return (
    <section className="movies">
      <h2 className="movies__title title">{title}</h2>
      <MoviesList movies={movies} />
    </section>
  );
};
