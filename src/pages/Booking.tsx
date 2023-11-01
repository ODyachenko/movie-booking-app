import React, { FC } from 'react';
import { Field } from '../UI/Field/Field';

export const Booking: FC = () => {
  return (
    <section className="booking">
      <div className="container">
        <h1 className="booking__title title">Select Seats</h1>
        <Field text="Date" type="date" />
        <Field text="Time" type="time" />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="251"
            height="19"
            viewBox="0 0 251 19"
            fill="none"
          >
            <path
              d="M2 17C21.5707 11.6667 74.2172 2 126.237 2C178.258 2 228.588 11.6667 249 17"
              stroke="#54A8E5"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="315"
            height="88"
            viewBox="0 0 315 88"
            fill="none"
          >
            <path
              d="M0 88L32.1944 16.3429C51.3427 10.8952 102.643 0 154.659 0C206.675 0 261.51 11.0524 281.5 16.5L315 88C315 88 217.786 63.4857 157.5 63.4857C97.2144 63.4857 0 88 0 88Z"
              fill="url(#paint0_linear_2_438)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_438"
                x1="157.5"
                y1="6.67694e-08"
                x2="157.5"
                y2="44"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#54A8E5" stopOpacity="0.5" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
