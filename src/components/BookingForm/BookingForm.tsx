import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SelectField } from '../../UI/SelectField/SelectField';
import { Seats } from './Seats';
import './styles.scss';
import { Btn } from '../../UI/Btn/Btn';
import { useAppSelector } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import { BookingInfo } from '../../../@types';

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

  const { id } = useParams();
  const [bookingInfo, setBookingInfo] = useState<any | null>(null);
  const { topMovies } = useAppSelector((state) => state.movies);

  useEffect(() => {
    setBookingInfo(
      topMovies.filter((movie) => movie.id === id)[0]?.bookingInfo
    );
  }, [topMovies, id]);

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
      {bookingInfo && (
        <div className="booking__inner">
          <SelectField
            options={bookingInfo.cinemas}
            caption="Cinema"
            errors={errors}
            control={control}
          />
          <SelectField
            options={bookingInfo.dates}
            caption="Date"
            errors={errors}
            control={control}
          />
          <SelectField
            options={bookingInfo.time}
            caption="Time"
            errors={errors}
            control={control}
          />
        </div>
      )}
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
