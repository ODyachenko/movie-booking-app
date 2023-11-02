import React, { FC } from 'react';
import { BookingForm } from '../components/BookingForm/BookingForm';

export const Booking: FC = () => {
  return (
    <section className="booking block">
      <div className="container">
        <BookingForm />
      </div>
    </section>
  );
};
