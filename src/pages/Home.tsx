import React, { FC } from 'react';
import { Btn } from '../UI/Btn/Btn';
import { Field } from '../UI/Field/Field';

export const Home: FC = () => {
  return (
    <>
      <Btn text="chechout" type="primary" />
      <Field type="text" text="test" />
    </>
  );
};
