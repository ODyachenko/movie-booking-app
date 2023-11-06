import React, { FC } from 'react';
import { FieldType } from '../../../@types';
import './styles.scss';

export const Field: FC<FieldType> = ({ type, text, handler }) => {
  return (
    <label className="field">
      <span className="field__caption">{text}</span>
      <input
        name={text}
        className="field__item"
        onChange={handler}
        type={type}
        placeholder={text}
      />
    </label>
  );
};
