import { FC } from 'react';
import { BtnType } from '../../../@types';
import './styles.scss';

export const Btn: FC<BtnType> = ({ text, type, handler }) => {
  return (
    <button type="button" className={`btn ${type}`} onClick={handler}>
      {text}
    </button>
  );
};
