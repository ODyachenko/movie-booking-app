import React, { FC } from 'react';
import { MovieTagsItem } from './MovieTagsItem';

type MovieTagsProps = {
  tags: string[];
};

export const MovieTags: FC<MovieTagsProps> = ({ tags }) => {
  return (
    <ul className="details__tags">
      {tags.map((tag) => (
        <MovieTagsItem key={tag} value={tag} />
      ))}
    </ul>
  );
};
