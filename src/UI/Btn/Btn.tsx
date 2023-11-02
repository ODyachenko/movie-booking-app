import { FC } from 'react';
import { BtnType } from '../../../@types';
import './styles.scss';

export const Btn: FC<BtnType> = ({ className, text, type, handler }) => {
  return (
    <button
      type="button"
      className={`${className} btn ${type}`}
      onClick={handler}
    >
      {text}
    </button>
  );
};
