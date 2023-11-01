import React, { FC } from 'react';
import { ImoviesList } from '../../../@types';

export const MoviesListItem: FC<ImoviesList> = ({ poster, name, rating }) => {
  return (
    <li className="movies__list-item movie">
      <img className="movie__poster" src={String(poster)} alt={name} />
      <h2 className="movie__name">{name}</h2>
      <span className="movie__rating">{rating}</span>
    </li>
  );
};
