import { ImoviesList } from '../../@types';

export const parseMovies = (arr: ImoviesList[], condition: string) => {
  return arr.filter((movie) => movie.type === condition);
};
