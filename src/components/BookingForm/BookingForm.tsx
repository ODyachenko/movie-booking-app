import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SingleValue } from 'react-select';
import supabase from '../../config/supabaseClient';
import { SelectField } from '../../UI/SelectField/SelectField';
import { Seats } from './Seats';
import { Btn } from '../../UI/Btn/Btn';
import { getAvailableDates } from '../../utils/getAvailableDates';
import { getAvailableTime } from '../../utils/getAvailableTime';
import { getAvailableSeats } from '../../utils/getAvailableSeats';
import {
  BookingType,
  BookingInfo,
  SelectFieldOptions,
  BookingItem,
} from '../../../@types';
import './styles.scss';

type FormData = {
  cinema: SelectFieldOptions;
  date: SelectFieldOptions;
  time: SelectFieldOptions;
  seats: string[];
};

export const BookingForm: FC = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const { id } = useParams<string>();
  const [booking, setBooking] = useState<BookingType>({
    cinema: '',
    date: '',
    time: '',
    name: '',
  });
  const [bookingInfo, setBookingInfo] = useState<BookingInfo[]>([]);
  const [cinema, setCinema] = useState<SelectFieldOptions[]>([]);
  const [dates, setDates] = useState<SelectFieldOptions[]>([]);
  const [time, setTime] = useState<SelectFieldOptions[]>([]);
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookingInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchBookingInfo = async () => {
    try {
      const { data, error } = await supabase
        .from('booking')
        .select()
        .eq('movieId', id);

      if (error) {
        throw error;
      }
      setBookingInfo(data[0].bookingInfo);
      setBooking({ ...booking, name: data[0].name });
      setCinema(data[0].bookingInfo.map((item: BookingItem) => item.option));
    } catch (error) {
      console.error(error);
    }
  };

  const postBooking = async (obj: BookingType) => {
    const location = {
      pathname: '/e-ticket',
      search: `?name=${obj.name}&cinema=${obj.cinema}&date=${obj.date}&time=${obj.time}&seats=${obj.seats}`,
    };

    try {
      const { error } = await supabase.from('booked movie').insert(obj);

      if (error) {
        throw error;
      }
      navigate(location);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const result = {
      ...data,
      date: data.date.value,
      time: data.time.value,
      cinema: data.cinema.value,
      name: booking.name,
    };
    console.log(result);
    postBooking(result);
  };
  const onChangeCinema = (
    event: SingleValue<SelectFieldOptions>,
    callback: (event: SingleValue<SelectFieldOptions>) => void
  ) => {
    callback(event);
    setBooking({ ...booking, cinema: event?.value });
    setDates(getAvailableDates(bookingInfo, event));
  };
  const onChangeDates = (
    event: SingleValue<SelectFieldOptions>,
    callback: (event: SingleValue<SelectFieldOptions>) => void
  ) => {
    callback(event);
    setBooking({ ...booking, date: event?.value });
    setTime(getAvailableTime(bookingInfo, event, booking.cinema));
  };

  const onChangeTime = (
    event: SingleValue<SelectFieldOptions>,
    callback: (event: SingleValue<SelectFieldOptions>) => void
  ) => {
    callback(event);
    setBooking({ ...booking, time: event?.value });
    setSeats(
      getAvailableSeats(bookingInfo, event, booking.cinema, booking.date)
    );
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
          onChangeHandler={onChangeCinema}
        />
        {booking.cinema && (
          <SelectField
            options={dates}
            caption="Date"
            errors={errors}
            control={control}
            onChangeHandler={onChangeDates}
          />
        )}
        {booking.date && (
          <SelectField
            options={time}
            caption="Time"
            errors={errors}
            control={control}
            onChangeHandler={onChangeTime}
          />
        )}
      </div>

      {booking.time && (
        <Seats register={register} errors={errors} availableSeats={seats} />
      )}
      <Btn
        className="booking__btn"
        type="submit"
        model="primary"
        text="Pay Now"
      />
    </form>
  );
};
