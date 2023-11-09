import React, { FC, useState, useEffect } from 'react';
import supabase from '../../config/supabaseClient';
import { BookedMovie } from './BookedMovie';
import { BookedMovieType } from '../../../@types';

export const BookedMovies: FC = () => {
  const [bookedMovie, setBookedMovie] = useState<any>([]);
  const [authUserId, setAuthUserId] = useState<string>('');

  useEffect(() => {
    authUserId && fetchBookedMovie();
  }, [authUserId]);

  useEffect(() => {
    const json = localStorage.getItem(String(process.env.REACT_APP_TOKEN));

    if (json) {
      const user = JSON.parse(json);
      setAuthUserId(user.user.id);
    }
  }, []);

  const fetchBookedMovie = async () => {
    try {
      const { data, error } = await supabase
        .from('booked movie')
        .select()
        .eq('userId', authUserId);

      if (error) {
        throw error;
      }
      setBookedMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ol className="booked__movies">
      {bookedMovie.map((movie: BookedMovieType) => (
        <BookedMovie key={movie.id} {...movie} />
      ))}
    </ol>
  );
};
