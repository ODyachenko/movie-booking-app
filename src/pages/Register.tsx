import React, { FC } from 'react';
import { RegisterForm } from '../components/Forms/RegisterForm';

export const Register: FC = () => {
  return (
    <section className="signup block">
      <div className="container">
        <RegisterForm />
      </div>
    </section>
  );
};
