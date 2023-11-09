import React, { FC } from 'react';
import { RecommendedMovies } from '../Movies/RecommendedMovies';
import { Tabs } from '../Tabs/Tabs';
import { TopMovies } from '../Movies/TopMovies';
import './styles.scss';
import { useAppSelector } from '../../hooks/hooks';
import { UpcomingMovies } from '../Movies/UpcomingMovies';

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
