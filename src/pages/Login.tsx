import { FC } from 'react';
import { LoginForm } from '../components/Forms/LoginForm';

const Login: FC = () => {
  return (
    <section className="signin block">
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
};
export default Login;
