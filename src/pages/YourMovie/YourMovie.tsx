import React, { FC } from 'react';
import { BookedMovies } from '../../components/BookedMovies/BookedMovies';
import './styles.scss';

export const YourMovie: FC = () => {
  return (
    <section className="booked block">
      <div className="container">
        <h1 className="booked__title title">Booked movies</h1>
        <BookedMovies />
      </div>
    </section>
  );
};
