import React, { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import supabase from '../../config/supabaseClient';
import { v4 } from 'uuid';
import { Btn } from '../../UI/Btn/Btn';
import './styles.scss';
import '../../UI/InputField/styles.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { setIsAuth } from '../../redux/slices/userSlice';

type FormData = {
  avatarUrl?: string;
  fullname: string;
  email: string;
  password: string;
};

const initialState = `${process.env.REACT_APP_STORAGE_URI}/avatar_private.png`;

export const RegisterForm: FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });
  const [avatar, setAvatar] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = { ...data, avatar };

    try {
      setIsLoading(true);
      const response = await supabase.auth.signUp(formData);

      if (response.error) {
        throw response.error;
      }
      response.data.session &&
        localStorage.setItem('token', response.data.session.access_token);
      dispatch(setIsAuth(true));
      navigate('/');

      setAvatar(initialState);
      reset();
    } catch (error: any) {
      alert(error.message);
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeFile = async (event: any) => {
    try {
      const avatarFile = event.target.files[0];
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(v4(), avatarFile);

      if (error) {
        throw error;
      }
      setAvatar(`${process.env.REACT_APP_STORAGE_URI}/${data.path}`);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title title">Sign Up</h1>
      <label className="form__avatar">
        <img
          className="form__avatar--img"
          src={avatar}
          alt="User avatar"
          height={100}
          width={100}
        />
        <input type="file" accept="image/*" onChange={handleChangeFile} />
      </label>
      <label className="field">
        <span className="field__caption">Full Name</span>
        <input
          className="field__item"
          type="text"
          placeholder="Full Name"
          {...register('fullname', {
            required: 'Please fill in the field',
            minLength: { value: 2, message: 'Min length is 4' },
            maxLength: { value: 30, message: 'Max length is 30' },
          })}
        />
        {errors.fullname && (
          <span className="field__error">{errors.fullname.message}</span>
        )}
      </label>
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
      <Btn type="submit" model="primary" text="Sign Up" loading={isLoading} />
    </form>
  );
};
