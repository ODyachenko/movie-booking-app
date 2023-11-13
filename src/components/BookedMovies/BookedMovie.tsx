import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingType } from '../../../@types';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteBooking } from '../../redux/slices/bookingSlice';
import { Btn } from '../../UI/Btn/Btn';

export const BookedMovie: FC<BookingType> = ({
  id,
  cinema,
  date,
  time,
  seats,
  name,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickRemove = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Do you want to delete the booking?')) {
      dispatch(deleteBooking(id));
    }
  };

  const onClickTickets = () => {
    navigate({
      pathname: '/e-ticket',
      search: `?name=${name}&cinema=${cinema}&date=${date}&time=${time}&seats=${seats}`,
    });
  };

  return (
    <li className="booked__movies-item">
      <div className="booked__movies-wrapper">
        <div className="booked__movies-details">
          <h2 className="booked__movies-name">{name}</h2>
          <h3 className="booked__movies-cinema">{cinema}</h3>
          <span className="booked__movies-info">{date}</span>
          <span className="booked__movies-info">{time}</span>
          <span className="booked__movies-info">{seats}</span>
        </div>
        <div className="booked__movies-actions">
          <Btn
            className="booked__movies-btn"
            model="primary"
            text="Tickets"
            handler={onClickTickets}
          />
          <button className="booked__movies-remove" onClick={onClickRemove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M25.2521 11.5962C25.5179 11.5962 25.7591 11.7122 25.9497 11.9082C26.1274 12.1175 26.2169 12.3775 26.1909 12.6522C26.1909 12.7429 25.4803 21.7294 25.0744 25.5121C24.8203 27.8334 23.3238 29.2427 21.0792 29.2814C19.3532 29.32 17.6662 29.3334 16.0051 29.3334C14.2415 29.3334 12.5168 29.32 10.8427 29.2814C8.67331 29.2294 7.17558 27.7947 6.93439 25.5121C6.51684 21.7161 5.81919 12.7429 5.80622 12.6522C5.79326 12.3775 5.88144 12.1175 6.06038 11.9082C6.23674 11.7122 6.4909 11.5962 6.75803 11.5962H25.2521ZM18.753 2.66669C19.9317 2.66669 20.9847 3.48935 21.2894 4.66267L21.5072 5.63599C21.6836 6.42932 22.3709 6.99064 23.1619 6.99064H27.0495C27.5682 6.99064 28 7.42131 28 7.9693V8.47596C28 9.01062 27.5682 9.45462 27.0495 9.45462H4.9518C4.43181 9.45462 4 9.01062 4 8.47596V7.9693C4 7.42131 4.43181 6.99064 4.9518 6.99064H8.83942C9.62913 6.99064 10.3164 6.42932 10.4941 5.63732L10.6976 4.728C11.014 3.48935 12.0553 2.66669 13.247 2.66669H18.753Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};
