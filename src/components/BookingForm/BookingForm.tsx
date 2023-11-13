import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SingleValue } from 'react-select';
import { SelectField } from '../../UI/SelectField/SelectField';
import { Seats } from './Seats';
import { Btn } from '../../UI/Btn/Btn';
import {
  fetchBookingInfo,
  postBooking,
  setBooking,
} from '../../redux/slices/bookingSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAvailableDates } from '../../utils/getAvailableDates';
import { getAvailableTime } from '../../utils/getAvailableTime';
import { getAvailableSeats } from '../../utils/getAvailableSeats';
import { SelectFieldOptions } from '../../../@types';
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

  const { booking, bookingInfo, cinema } = useAppSelector(
    (state) => state.booking
  );
  const [dates, setDates] = useState<SelectFieldOptions[]>([]);
  const [time, setTime] = useState<SelectFieldOptions[]>([]);
  const [seats, setSeats] = useState([]);
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookingInfo(id));
  }, [id, dispatch]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const result = {
      ...data,
      date: data.date.value,
      time: data.time.value,
      cinema: data.cinema.value,
      name: booking.name,
    };
    dispatch(postBooking({ ...result, navigate }));
    dispatch(
      setBooking({
        cinema: '',
        date: '',
        time: '',
        name: '',
        seats: [],
      })
    );
  };
  const onChangeCinema = (
    event: SingleValue<SelectFieldOptions>,
    callback: (event: SingleValue<SelectFieldOptions>) => void
  ) => {
    callback(event);
    dispatch(setBooking({ ...booking, cinema: event?.value }));
    setDates(getAvailableDates(bookingInfo, event));
  };
  const onChangeDates = (
    event: SingleValue<SelectFieldOptions>,
    callback: (event: SingleValue<SelectFieldOptions>) => void
  ) => {
    callback(event);
    dispatch(setBooking({ ...booking, date: event?.value }));
    setTime(getAvailableTime(bookingInfo, event, booking.cinema));
  };

  const onChangeTime = (
    event: SingleValue<SelectFieldOptions>,
    callback: (event: SingleValue<SelectFieldOptions>) => void
  ) => {
    callback(event);
    dispatch(setBooking({ ...booking, time: event?.value }));
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
