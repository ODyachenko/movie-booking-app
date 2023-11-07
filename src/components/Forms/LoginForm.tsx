import React, { FC, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import supabase from '../../config/supabaseClient';
import { Btn } from '../../UI/Btn/Btn';
import './styles.scss';
import '../../UI/InputField/styles.scss';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm: FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await supabase.auth.signInWithPassword(data);

      if (response.error) {
        throw response.error;
      }
      // console.log(response.data);
      localStorage.setItem('token', response.data.session.access_token);
      navigate('/');

      reset();
    } catch (error: any) {
      alert(error.message);
      console.error(error);
    }
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
      <Btn type="submit" model="primary" text="Sign In" />
      <Link className="form__link" to="/register">
        Don't have an account?
      </Link>
    </form>
  );
};
