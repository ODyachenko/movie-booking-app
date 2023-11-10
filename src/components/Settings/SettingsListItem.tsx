import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../config/supabaseClient';
import { useAppDispatch } from '../../hooks/hooks';
import { setIsAuth } from '../../redux/slices/userSlice';

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

  const onClickHandler = async (type: string) => {
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
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Do you want to logout?')) {
          try {
            const { error } = await supabase.auth.signOut();

            if (error) {
              throw error;
            }
            dispatch(setIsAuth(false));
          } catch (error: any) {
            console.error(error);
          }
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
