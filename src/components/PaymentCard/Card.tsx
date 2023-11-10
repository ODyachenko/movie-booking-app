import React, { FC } from 'react';
import cardIco from '../../assets/img/mastercard.png';
import './styles.scss';

type CardProps = {
  className?: string;
  fullname: string;
};

export const Card: FC<CardProps> = ({ className, fullname }) => {
  return (
    <div className={`card ${className ? className : ''}`}>
      <div className="card__header">
        <img src={cardIco} alt="mastercard" />
        <div className="card__balance">
          <span className="card__balance-caption">Balance</span>
          <span className="card__balance-amount">$120,580,00</span>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer-holder">
          <span className="card__footer-caption">Card Holder</span>
          <span className="card__footer-name">{fullname}</span>
        </div>
        <span className="card__footer-number">**** **** **** 51446</span>
      </div>
    </div>
  );
};
