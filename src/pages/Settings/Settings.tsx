import React, { FC } from 'react';
import { SettingsList } from '../../components/Settings/SettingsList';
import { User } from '../../components/Settings/User';
import './styles.scss';

export const Settings: FC = () => {
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
