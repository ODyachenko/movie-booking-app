import { FC } from 'react';
import { BookedMovies } from '../../components/BookedMovies/BookedMovies';
import './styles.scss';

const YourMovie: FC = () => {
  return (
    <section className="booked block">
      <div className="container">
        <h1 className="booked__title title">Booked movies</h1>
        <BookedMovies />
      </div>
    </section>
  );
};
export default YourMovie;
