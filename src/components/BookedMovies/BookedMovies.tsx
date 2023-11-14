import { FC } from 'react';
import { BookedMovie } from './BookedMovie';
import { BookingType } from '../../../@types';
import { useAppSelector } from '../../hooks/hooks';

export const BookedMovies: FC = () => {
  const { bookedMovies } = useAppSelector((state) => state.booking);

  return bookedMovies.length ? (
    <ol className="booked__movies">
      {bookedMovies.map((movie: BookingType) => (
        <BookedMovie key={movie.id} {...movie} />
      ))}
    </ol>
  ) : (
    <h2>You don't have booked movies</h2>
  );
};
