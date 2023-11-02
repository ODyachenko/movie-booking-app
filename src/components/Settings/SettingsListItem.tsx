import React, { FC } from 'react';

type SettingsListItemProps = {
  icon: string;
  text: string;
};

export const SettingsListItem: FC<SettingsListItemProps> = ({ icon, text }) => {
  return (
    <li className="category__list-item">
      <img className="category__list-ico" src={icon} alt={text} />
      <span className="category__list-name">{text}</span>
    </li>
  );
};
