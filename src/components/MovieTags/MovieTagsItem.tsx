import React, { FC } from 'react';

type MovieTagsItemProps = {
  value: string;
};

export const MovieTagsItem: FC<MovieTagsItemProps> = ({ value }) => {
  return <li className="details__tags-item">{value}</li>;
};
