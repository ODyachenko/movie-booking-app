import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsList } from '../../components/Settings/SettingsList';
import { User } from '../../components/Settings/User';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setAuthUser } from '../../redux/slices/userSlice';
import './styles.scss';

export const Settings: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const json = localStorage.getItem(String(process.env.REACT_APP_TOKEN));

    if (json) {
      const user = JSON.parse(json);
      dispatch(
        setAuthUser({
          email: user.user.email,
          fullname: user.user.user_metadata.fullname,
          avatarUrl: user.user.user_metadata.avatarUrl,
        })
      );
      return;
    }
    return navigate('/');
  }, [isAuth]);

  return (
    <section className="settings block">
      <div className="container">
        <h1 className="settings__title title">Settings</h1>
        <User />
        <SettingsList />
      </div>
    </section>
  );
};
