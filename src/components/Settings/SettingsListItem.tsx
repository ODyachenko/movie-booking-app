import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { logoutUser } from '../../redux/slices/userSlice';
import { CategoryList } from '../../../@types';

export const SettingsListItem: FC<CategoryList> = ({ icon, text, type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickHandler = (type: string) => {
    switch (type) {
      case 'data':
        navigate('/personal-data');
        break;
      case 'payment':
        navigate('/paymentInfo');
        break;
      case 'tickets':
        navigate('/your-tickets');
        break;
      case 'remove':
        console.log('remove');
        break;
      case 'logout':
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Do you want to log out?')) {
          dispatch(logoutUser());
        }
        break;

      default:
        break;
    }
  };

  return (
    <li className="category__list-item" onClick={() => onClickHandler(type)}>
      <img className="category__list-ico" src={icon} alt={text} />
      <span className="category__list-name">{text}</span>
    </li>
  );
};
