import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsList } from '../../components/Settings/SettingsList';
import { User } from '../../components/Settings/User';
import { useAppSelector } from '../../hooks/hooks';
import './styles.scss';

const Settings: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !isAuth && navigate('/');
  }, [isAuth, navigate]);

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
export default Settings;
