import React, { FC } from 'react';
import { ImoviesList } from '../../../@types';
import { MoviesListItem } from './MoviesListItem';

type MoviesListProps = {
  movies: ImoviesList[];
};

export const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  return (
    <ul className="movies__list">
      {movies.map((movie) => (
        <MoviesListItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
};
