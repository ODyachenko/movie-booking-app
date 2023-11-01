import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ImoviesList } from '../../../@types';

export const MoviesListItem: FC<ImoviesList> = ({
  id,
  poster,
  name,
  rating,
}) => {
  return (
    <li className="movies__list-item movie">
      <Link to={`/details/${id}`}>
        <img className="movie__poster" src={String(poster)} alt={name} />
        <h2 className="movie__name">{name}</h2>
        <span className="movie__rating">{rating}</span>
      </Link>
    </li>
  );
};
