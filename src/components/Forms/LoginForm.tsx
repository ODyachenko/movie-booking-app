import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginUser } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useCheckIsAuth } from '../../hooks/useCheckAuth';
import { Btn } from '../../UI/Btn/Btn';
import { LoginFormData } from '../../../@types';
import './styles.scss';
import '../../UI/InputField/styles.scss';

export const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({ mode: 'onChange' });
  const { loading, error } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useCheckIsAuth();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(loginUser({ data, navigate }));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title title">Sign In</h1>
      <label className="field">
        <span className="field__caption">E-mail</span>
        <input
          className="field__item"
          type="email"
          placeholder="E-mail"
          {...register('email', {
            required: 'Please fill in the field',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter valid email',
            },
          })}
        />
        {errors.email && (
          <span className="field__error">{errors.email.message}</span>
        )}
      </label>
      <label className="field">
        <span className="field__caption">Password</span>

        <input
          className="field__item"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Please fill in the field',
            minLength: { value: 6, message: 'Min length is 6' },
            maxLength: { value: 40, message: 'Max length is 40' },
          })}
        />
        {errors.password && (
          <span className="field__error">{errors.password.message}</span>
        )}
      </label>
      <Btn type="submit" model="primary" text="Sign In" loading={loading} />
      {error && <span className="field__error--primary">{error}</span>}
      <Link className="form__link" to="/register">
        Don't have an account?
      </Link>
    </form>
  );
};
