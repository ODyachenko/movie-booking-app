import React from 'react';
import supabase from '../../config/supabaseClient';
import { SettingsListItem } from './SettingsListItem';

const categoryList = [
  {
    id: 1,
    icon: require('../../assets/img/category1.png'),
    text: 'Personal Data',
    type: 'data',
  },
  {
    id: 5,
    icon: require('../../assets/img/category5.png'),
    text: 'Your Ticket',
    type: 'ticket',
  },
  {
    id: 3,
    icon: require('../../assets/img/category3.png'),
    text: 'Deactive Account',
    type: 'remove',
  },
  {
    id: 6,
    icon: require('../../assets/img/category6.png'),
    text: 'Logout',
    type: 'logout',
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
