import React, { FC } from 'react';
import screen from '../../assets/img/screen.svg';

type SeatsProps = {
  register: any;
  errors: any;
};

const seatsList = [
  [
    {
      value: 's1',
      type: 'empty',
    },
    {
      value: 'a1',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'a2',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'a3',
      type: 'seat',
      reserved: false,
    },
    {
      value: 's2',
      type: 'empty',
    },
    {
      value: 'a4',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'a5',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'a6',
      type: 'seat',
      reserved: false,
    },
    {
      value: 's3',
      type: 'empty',
    },
  ],
  [
    {
      value: 'b1',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'b2',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'b3',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'b4',
      type: 'seat',
      reserved: false,
    },
    {
      value: 's4',
      type: 'empty',
    },
    {
      value: 'b5',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'b6',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'b7',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'b8',
      type: 'seat',
      reserved: false,
    },
  ],
  [
    {
      value: 'c1',
      type: 'seat',
      reserved: true,
    },
    {
      value: 'c2',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'c3',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'c4',
      type: 'seat',
      reserved: false,
    },
    {
      value: 's5',
      type: 'empty',
    },
    {
      value: 'c5',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'c6',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'c7',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'c8',
      type: 'seat',
      reserved: false,
    },
  ],
  [
    {
      value: 'd1',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'd2',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'd3',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'd4',
      type: 'seat',
      reserved: false,
    },
    {
      value: 's6',
      type: 'empty',
    },
    {
      value: 'd5',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'd6',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'd7',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'd8',
      type: 'seat',
      reserved: false,
    },
  ],
  [
    {
      value: 'e1',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'e2',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'e3',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'e4',
      type: 'seat',
      reserved: false,
    },
    {
      value: 's7',
      type: 'empty',
    },
    {
      value: 'e5',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'e6',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'e7',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'e8',
      type: 'seat',
      reserved: false,
    },
  ],
  [
    {
      value: 's8',
      type: 'empty',
    },
    {
      value: 'f1',
      type: 'seat',
      reserved: true,
    },
    {
      value: 'f2',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'f3',
      type: 'seat',
      reserved: false,
    },
    {
      value: 's9',
      type: 'empty',
    },
    {
      value: 'f4',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'f5',
      type: 'seat',
      reserved: false,
    },
    {
      value: 'f6',
      type: 'seat',
      reserved: false,
    },
    {
      value: 's10',
      type: 'empty',
    },
  ],
];

export const Seats: FC<SeatsProps> = ({ register, errors }) => {
  return (
    <>
      <img className="booking__screen" src={screen} alt="screen" />
      {errors.seats && (
        <span className="booking__error">{errors.seats.message}</span>
      )}
      <table className="booking__seats">
        <tbody>
          {seatsList.map((row, index) => {
            return (
              <tr key={index} className="booking__seats-row">
                {row.map((cell) => {
                  return (
                    <td key={cell.value} className="booking__seats-cell">
                      {cell.type === 'seat' ? (
                        <>
                          <label className="booking__seats-field">
                            <input
                              type="checkbox"
                              disabled={cell.reserved}
                              value={cell.value}
                              {...register('seats', {
                                required: 'Choose the seat',
                              })}
                            />
                            <span></span>
                          </label>
                        </>
                      ) : (
                        ''
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="booking__footer">
        <span className="booking__footer-label">Selected</span>
        <span className="booking__footer-label">Reserved</span>
        <span className="booking__footer-label">Avialable 250 uah</span>
      </div>
    </>
  );
};
