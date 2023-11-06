import React, { FC } from 'react';
import { LoginForm } from '../components/Forms/LoginForm';

export const Login: FC = () => {
  return (
    <section className="signin block">
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
};
