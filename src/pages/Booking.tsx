import { FC } from 'react';
import { BookingForm } from '../components/BookingForm/BookingForm';

const Booking: FC = () => {
  return (
    <section className="booking block">
      <div className="container">
        <BookingForm />
      </div>
    </section>
  );
};
export default Booking;
