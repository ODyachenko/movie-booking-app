import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImoviesList } from '../../../@types';
import { MoviesListItem } from './MoviesListItem';
import 'swiper/css';

type MoviesListProps = {
  movies: ImoviesList[];
};

export const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  return (
    <Swiper
      className="movies__list"
      spaceBetween={30}
      slidesPerView={'auto'}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MoviesListItem {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
