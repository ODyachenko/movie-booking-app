import { FC } from 'react';
import { BtnType } from '../../../@types';
import './styles.scss';

export const Btn: FC<BtnType> = ({ className, text, type, model, handler }) => {
  return (
    <button
      type={type}
      className={`${className} btn ${model}`}
      onClick={handler}
    >
      {text}
    </button>
  );
};
