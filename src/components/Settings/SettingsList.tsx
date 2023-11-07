import React from 'react';
import { SettingsListItem } from './SettingsListItem';

const categoryList = [
  {
    id: 1,
    icon: require('../../assets/img/category1.png'),
    text: 'Personal Data',
  },
  {
    id: 5,
    icon: require('../../assets/img/category5.png'),
    text: 'Your Ticket',
  },
  {
    id: 3,
    icon: require('../../assets/img/category3.png'),
    text: 'Deactive Account',
  },
  {
    id: 6,
    icon: require('../../assets/img/category6.png'),
    text: 'Logout',
  },
];

export const SettingsList = () => {
  return (
    <div className="settings__category category">
      <h2 className="category__caption">Account</h2>
      <ul className="category__list">
        {categoryList.map((category) => (
          <SettingsListItem key={category.id} {...category} />
        ))}
      </ul>
    </div>
  );
};
