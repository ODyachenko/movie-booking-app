import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../hooks/hooks';
import { MoviesListItem } from './MoviesListItem';
import Skelleton from './Skelleton';
import { ImoviesList } from '../../../@types';
import 'swiper/css';

type MoviesListProps = {
  movies: ImoviesList[];
};

export const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  const { loading } = useAppSelector((state) => state.movies);

  return loading ? (
    <Swiper className="movies__list" spaceBetween={30} slidesPerView={'auto'}>
      {Array(4)
        .fill('')
        .map((_, index) => (
          <Skelleton key={index} />
        ))}
    </Swiper>
  ) : (
    <Swiper className="movies__list" spaceBetween={30} slidesPerView={'auto'}>
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MoviesListItem {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
