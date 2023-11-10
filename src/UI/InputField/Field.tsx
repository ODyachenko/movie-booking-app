import React, { FC } from 'react';
import { FieldType } from '../../../@types';
import './styles.scss';

export const Field: FC<FieldType> = ({
  type,
  text,
  value,
  handler,
  disabled,
  className,
}) => {
  return (
    <label className={`field ${className ? className : ''}`}>
      <span className="field__caption">{text}</span>
      <input
        name={text}
        className="field__item"
        value={value}
        onChange={handler}
        type={type}
        placeholder={text}
        disabled={disabled}
      />
    </label>
  );
};
