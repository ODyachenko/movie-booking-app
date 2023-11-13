import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  updateUserData,
  signupUser,
  uploadAvatar,
} from '../../redux/slices/userSlice';
import { Btn } from '../../UI/Btn/Btn';
import { RegisterFormData } from '../../../@types';

import './styles.scss';
import '../../UI/InputField/styles.scss';

type RegisterFormProps = {
  caption: string;
  isRegister: boolean;
};

export const RegisterForm: FC<RegisterFormProps> = ({
  caption,
  isRegister,
}) => {
  const { loading, avatar, error, authUser } = useAppSelector(
    (state) => state.user
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    defaultValues: { ...authUser },
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    const createFormData = {
      email: data.email,
      password: data.password,
      options: {
        data: {
          fullname: data.fullname,
          avatarUrl: avatar,
        },
      },
    };

    const updateFormData = {
      email: data.email,
      password: data.password,
      data: {
        fullname: data.fullname,
        avatarUrl: avatar,
      },
    };

    isRegister
      ? dispatch(signupUser({ createFormData, navigate }))
      : dispatch(updateUserData({ updateFormData, navigate }));
  };

  const handleChangeFile = (event: any) => {
    const avatarFile = event.target.files[0];
    dispatch(uploadAvatar(avatarFile));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title title">{caption}</h1>
      <label className="form__avatar">
        <img
          className="form__avatar--img"
          src={authUser.avatarUrl ? authUser.avatarUrl : avatar}
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
      {error && <span className="field__error--primary">{error}</span>}
      <Btn
        type="submit"
        model="primary"
        text={isRegister ? 'Sign Up' : 'Edit'}
        loading={loading}
      />
    </form>
  );
};
