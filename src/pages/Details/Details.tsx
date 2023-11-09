import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Btn } from '../../UI/Btn/Btn';
import { ImoviesList } from '../../../@types';
import './styles.scss';
import { MovieTags } from '../../components/MovieTags/MovieTags';
import { useAppSelector } from '../../hooks/hooks';

export const Details: FC = () => {
  const { movies } = useAppSelector((state) => state.movies);
  const { isAuth } = useAppSelector((state) => state.user);
  const [movie, setMovie] = useState<ImoviesList | null>(null);
  const { id } = useParams<string>();
  const navigate = useNavigate();

  useEffect(() => {
    setMovie(movies.filter((movie) => movie.id === id)[0]);
  }, [id, movies]);

  const onCLickHandler = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <section className="details block">
      <div className="container">
        <h1 className="details__title title">Details Movie</h1>
        {movie?.id && (
          <div className="details__content">
            <img
              className="details__poster"
              src={movie.poster}
              alt={movie.name}
            />
            <div className="details__info">
              <h2 className="details__subtitle">{movie.name}</h2>
              <h3 className="details__cast">
                <strong>Director:</strong> {movie.director}
              </h3>
              <h3 className="details__cast">
                <strong>Actors:</strong> {movie.actors}
              </h3>
              <MovieTags tags={movie.tags} />
              <h2 className="details__subtitle">Synopsis</h2>
              <p className="details__text">{movie.synopsis}</p>
              {isAuth && movie.type !== 'upcoming' && (
                <Btn
                  className="details__btn"
                  model="primary"
                  text="Book Ticket"
                  handler={onCLickHandler}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
