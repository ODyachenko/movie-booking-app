import React, { FC } from 'react';
import { Btn } from '../../UI/Btn/Btn';
import poster from '../../assets/img/poster1.png';
import './styles.scss';

export const Details: FC = () => {
  return (
    <section className="details">
      <div className="container">
        <h1 className="details__title title">Details Movie</h1>
        <img className="details__poster" src={poster} alt="poster" />
        <h2 className="details__subtitle">Shang - Chi</h2>
        <h3 className="details__director">Director: Destin Daniel Cretton</h3>
        <ul className="details__tags">
          <li className="details__tags-item">action</li>
          <li className="details__tags-item">Fiction Fantasy</li>
          <li className="details__tags-item">02h 43m</li>
        </ul>
        <h2 className="details__subtitle">Synopsis</h2>
        <p className="details__text">
          Martial-arts master Shang-Chi confronts the past he thought he left
          behind when he's drawn into Read More
        </p>
        <Btn type="primary" text="Book Ticket" />
      </div>
    </section>
  );
};
