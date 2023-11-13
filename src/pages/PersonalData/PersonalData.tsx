import { FC } from 'react';
import { RegisterForm } from '../../components/Forms/RegisterForm';

export const PersonalData: FC = () => {
  return (
    <section className="personal-data block">
      <div className="container">
        <RegisterForm caption="Personal Data" isRegister={false} />
      </div>
    </section>
  );
};
