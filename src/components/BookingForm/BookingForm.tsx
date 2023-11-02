import React, { FC } from 'react';
import { SelectField } from '../../UI/SelectField/SelectField';
import { SelectFieldOptions } from '../../../@types';
import screen from '../../assets/img/screen.svg';
import { Seats } from './Seats';
import './styles.scss';
import { Btn } from '../../UI/Btn/Btn';

const cinema: SelectFieldOptions[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const time: SelectFieldOptions[] = [
  { value: '09:00', label: '09:00' },
  { value: '11:00', label: '11:00' },
  { value: '13:00', label: '13:00' },
];

const date: SelectFieldOptions[] = [
  { value: '02.11.2023', label: '02.11.2023' },
  { value: '03.11.2023', label: '03.11.2023' },
  { value: '04.11.2023', label: '04.11.2023' },
];

export const BookingForm: FC = () => {
  return (
    <form>
      <h1 className="booking__title title">Select Seats</h1>
      <div className="booking__inner">
        <SelectField options={cinema} caption="Cinema" />
        <SelectField options={time} caption="Time" />
        <SelectField options={date} caption="Date" />
      </div>
      <img className="booking__screen" src={screen} alt="screen" />
      <Seats />
      <div className="booking__footer">
        <span className="booking__footer-label">Selected</span>
        <span className="booking__footer-label">Reserved</span>
        <span className="booking__footer-label">Avialable</span>
      </div>
      <Btn className="booking__btn" type="primary" text="Pay Now" />
    </form>
  );
};
