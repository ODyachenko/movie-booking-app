import { FC } from 'react';
import { RegisterForm } from '../components/Forms/RegisterForm';
import { useCheckIsAuth } from '../hooks/useCheckAuth';

const Register: FC = () => {
  useCheckIsAuth();

  return (
    <section className="signup block">
      <div className="container">
        <RegisterForm caption="Sign Up" isRegister={true} />
      </div>
    </section>
  );
};
export default Register;
