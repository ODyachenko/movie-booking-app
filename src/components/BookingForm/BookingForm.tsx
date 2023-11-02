import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SelectField } from '../../UI/SelectField/SelectField';
import { SelectFieldOptions } from '../../../@types';
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

type FormData = {
  cinema: {
    value: string;
    label: string;
  };
  date: {
    value: string;
    label: string;
  };
  time: {
    value: string;
    label: string;
  };
};

export const BookingForm: FC = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const result = {
      ...data,
      date: data.date.value,
      time: data.time.value,
      cinema: data.cinema.value,
    };
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="booking__title title">Select Seats</h1>
      <div className="booking__inner">
        <SelectField
          options={cinema}
          caption="Cinema"
          errors={errors}
          control={control}
        />
        <SelectField
          options={time}
          caption="Time"
          errors={errors}
          control={control}
        />
        <SelectField
          options={date}
          caption="Date"
          errors={errors}
          control={control}
        />
      </div>
      <Seats register={register} errors={errors} />
      <Btn
        className="booking__btn"
        type="submit"
        model="primary"
        text="Pay Now"
      />
    </form>
  );
};
