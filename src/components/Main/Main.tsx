import React, { FC } from 'react';
import { Tabs } from '../Tabs/Tabs';
import { TopMovies } from '../TopMovies/TopMovies';
import './styles.scss';

export const Main: FC = () => {
  return (
    <main className="main block">
      <div className="container">
        <Tabs />
        <TopMovies />
        {/* <RecommendedMovies /> */}
      </div>
    </main>
  );
};
