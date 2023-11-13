import { SettingsListItem } from './SettingsListItem';
import { CategoryList } from '../../../@types';

const categoryList: CategoryList[] = [
  {
    id: 1,
    icon: require('../../assets/img/category1.png'),
    text: 'Personal Data',
    type: 'data',
  },
  {
    id: 2,
    icon: require('../../assets/img/category2.png'),
    text: 'Email & Payment',
    type: 'payment',
  },
  {
    id: 5,
    icon: require('../../assets/img/category5.png'),
    text: 'Your Tickets',
    type: 'tickets',
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
