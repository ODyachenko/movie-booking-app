import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { Tabs } from '../Tabs/Tabs';
import { TopMovies } from '../Movies/TopMovies';
import { RecommendedMovies } from '../Movies/RecommendedMovies';
import { UpcomingMovies } from '../Movies/UpcomingMovies';
import './styles.scss';

export const Main: FC = () => {
  const { isShowing } = useAppSelector((state) => state.movies);

  return (
    <main className="main block">
      <div className="container">
        <Tabs />

        {!!isShowing ? (
          <UpcomingMovies />
        ) : (
          <>
            <TopMovies />
            <RecommendedMovies />
          </>
        )}
      </div>
    </main>
  );
};
