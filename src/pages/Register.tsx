import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/Forms/RegisterForm';
import { useAppSelector } from '../hooks/hooks';

export const Register: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return (
    <section className="signup block">
      <div className="container">
        <RegisterForm caption="Sign Up" isRegister={true} />
      </div>
    </section>
  );
};
