import React, { FC, useState, useEffect } from 'react';
import { BookedMovie } from './BookedMovie';
import { BookingType } from '../../../@types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchBookedMovies } from '../../redux/slices/bookingSlice';

export const BookedMovies: FC = () => {
  const { bookedMovies } = useAppSelector((state) => state.booking);
  const [authUserId, setAuthUserId] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    authUserId && dispatch(fetchBookedMovies(authUserId));
  }, [authUserId, dispatch]);

  useEffect(() => {
    const json = localStorage.getItem(String(process.env.REACT_APP_TOKEN));

    if (json) {
      const user = JSON.parse(json);
      setAuthUserId(user.user.id);
    }
  }, []);

  return (
    <ol className="booked__movies">
      {bookedMovies.map((movie: BookingType) => (
        <BookedMovie key={movie.id} {...movie} />
      ))}
    </ol>
  );
};
