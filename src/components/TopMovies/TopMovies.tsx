import React, { FC } from 'react';
import { Movies } from '../Movies/Movies';
import { ImoviesList } from '../../../@types';

const moviesList: ImoviesList[] = [
  {
    id: 1,
    poster: require('../../assets/img/poster1.png'),
    name: 'No Time To Die',
    rating: 5,
  },
  {
    id: 2,
    poster: require('../../assets/img/poster2.png'),
    name: 'Shang - Chi',
    rating: 4.5,
  },
  {
    id: 3,
    poster: require('../../assets/img/poster1.png'),
    name: 'No Time To Die',
    rating: 5,
  },
  {
    id: 4,
    poster: require('../../assets/img/poster2.png'),
    name: 'Shang - Chi',
    rating: 4.5,
  },
];

export const TopMovies: FC = () => {
  return <Movies title="Top Movies" movies={moviesList} />;
};
