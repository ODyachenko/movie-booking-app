import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './hooks';

export const useCheckIsAuth = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);
};
