import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ImoviesList } from '../../../@types';

export const MoviesListItem: FC<ImoviesList> = ({
  id,
  poster,
  name,
  rating,
}) => {
  return (
    <Link className="movies__list-item movie" to={`/details/${id}`}>
      <img className="movie__poster" src={poster} alt={name} />
      <h2 className="movie__name">{name}</h2>
      {rating && (
        <span className="movie__rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="#FFA235"
          >
            <path d="M8.04894 2.92705C8.3483 2.00574 9.6517 2.00574 9.95106 2.92705L10.7961 5.52786C10.93 5.93989 11.3139 6.21885 11.7472 6.21885H14.4818C15.4505 6.21885 15.8533 7.45846 15.0696 8.02786L12.8572 9.63525C12.5067 9.8899 12.3601 10.3413 12.494 10.7533L13.339 13.3541C13.6384 14.2754 12.5839 15.0415 11.8002 14.4721L9.58779 12.8647C9.2373 12.6101 8.7627 12.6101 8.41222 12.8647L6.19983 14.4721C5.41612 15.0415 4.36164 14.2754 4.66099 13.3541L5.50604 10.7533C5.63992 10.3413 5.49326 9.8899 5.14277 9.63525L2.93039 8.02787C2.14668 7.45846 2.54945 6.21885 3.51818 6.21885H6.25283C6.68606 6.21885 7.07001 5.93989 7.20389 5.52786L8.04894 2.92705Z" />
          </svg>
          {rating}%
        </span>
      )}
    </Link>
  );
};
