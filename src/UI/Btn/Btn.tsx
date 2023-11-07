import { FC } from 'react';
import { BeatLoader } from 'react-spinners';
import { BtnType } from '../../../@types';
import './styles.scss';

export const Btn: FC<BtnType> = ({
  className,
  text,
  type,
  model,
  loading,
  handler,
}) => {
  return (
    <button
      type={type}
      className={`${className ? className : ''} btn ${model}`}
      onClick={handler}
    >
      {loading ? <BeatLoader color="#fff" size={12} /> : text}
    </button>
  );
};
