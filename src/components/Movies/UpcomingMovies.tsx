import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { Movies } from './Movies';

export const UpcomingMovies: FC = () => {
  const { upcomingMovies } = useAppSelector((state) => state.movies);

  return <Movies title="Upcoming" movies={upcomingMovies} />;
};
