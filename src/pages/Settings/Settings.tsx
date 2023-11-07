import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsList } from '../../components/Settings/SettingsList';
import { User } from '../../components/Settings/User';
import './styles.scss';

export const Settings: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    !localStorage.getItem('token') && navigate('/');
  }, []);

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
