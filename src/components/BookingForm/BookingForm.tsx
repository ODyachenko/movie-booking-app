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
import { SelectFieldOptions, BookingFormData } from '../../../@types';
import './styles.scss';

type AvailableData = {
  dates: SelectFieldOptions[];
  time: SelectFieldOptions[];
  seats: string[];
};

export const BookingForm: FC = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BookingFormData>();

  const { booking, bookingInfo, cinema } = useAppSelector(
    (state) => state.booking
  );

  const [availableData, setAvailableData] = useState<AvailableData>({
    dates: [],
    time: [],
    seats: [],
  });
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookingInfo(id));
  }, [id, dispatch]);

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
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
    setAvailableData({
      ...availableData,
      dates: getAvailableDates(bookingInfo, event),
    });
  };
  const onChangeDates = (
    event: SingleValue<SelectFieldOptions>,
    callback: (event: SingleValue<SelectFieldOptions>) => void
  ) => {
    callback(event);
    dispatch(setBooking({ ...booking, date: event?.value }));
    setAvailableData({
      ...availableData,
      time: getAvailableTime(bookingInfo, event, booking.cinema),
    });
  };

  const onChangeTime = (
    event: SingleValue<SelectFieldOptions>,
    callback: (event: SingleValue<SelectFieldOptions>) => void
  ) => {
    callback(event);
    dispatch(setBooking({ ...booking, time: event?.value }));
    setAvailableData({
      ...availableData,
      seats: getAvailableSeats(
        bookingInfo,
        event,
        booking.cinema,
        booking.date
      ),
    });
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
            options={availableData.dates}
            caption="Date"
            errors={errors}
            control={control}
            onChangeHandler={onChangeDates}
          />
        )}
        {booking.date && (
          <SelectField
            options={availableData.time}
            caption="Time"
            errors={errors}
            control={control}
            onChangeHandler={onChangeTime}
          />
        )}
      </div>

      {booking.time && (
        <Seats
          register={register}
          errors={errors}
          availableSeats={availableData.seats}
        />
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
