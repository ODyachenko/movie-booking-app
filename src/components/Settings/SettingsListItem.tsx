import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../config/supabaseClient';
import { useAppDispatch } from '../../hooks/hooks';
import { logoutUser, setIsAuth } from '../../redux/slices/userSlice';

type SettingsListItemProps = {
  icon: string;
  text: string;
  type: string;
};

export const SettingsListItem: FC<SettingsListItemProps> = ({
  icon,
  text,
  type,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickHandler = (type: string) => {
    switch (type) {
      case 'data':
        console.log('data');
        break;
      case 'payment':
        navigate('/paymentInfo');
        break;
      case 'ticket':
        console.log('ticket');
        break;
      case 'remove':
        console.log('remove');
        break;
      case 'logout':
        dispatch(logoutUser());
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
