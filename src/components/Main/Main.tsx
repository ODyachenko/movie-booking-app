import React, { FC } from 'react';
import { RecommendedMovies } from '../RecommendedMovies/RecommendedMovies';
import { Tabs } from '../Tabs/Tabs';
import { TopMovies } from '../TopMovies/TopMovies';
import './styles.scss';

export const Main: FC = () => {
  return (
    <main className="main">
      <div className="container">
        {/* <h1 className="main__title title">Explore Movie</h1> */}
        <Tabs />
        <TopMovies />
        <RecommendedMovies />
      </div>
    </main>
  );
};
