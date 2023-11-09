import React, { FC } from 'react';
import { BookingType } from '../../../@types';

export const BookedMovie: FC<BookingType> = ({
  cinema,
  date,
  time,
  seats,
  name,
}) => {
  return (
    <li className="booked__movies-item movie">
      <h2 className="movie__name">{name}</h2>
      <h3 className="movie__cinema">{cinema}</h3>
      <span className="movie__date">{date}</span>
      <span className="movie__time">{time}</span>
      <span className="movie__seats">{seats}</span>
    </li>
  );
};
