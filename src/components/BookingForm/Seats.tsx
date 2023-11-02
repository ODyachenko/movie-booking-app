import React, { FC } from 'react';
import screen from '../../assets/img/screen.svg';

type SeatsProps = {
  register: any;
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
    },
    {
      value: 'a2',
      type: 'seat',
    },
    {
      value: 'a3',
      type: 'seat',
    },
    {
      value: 's2',
      type: 'empty',
    },
    {
      value: 'a4',
      type: 'seat',
    },
    {
      value: 'a5',
      type: 'seat',
    },
    {
      value: 'a6',
      type: 'seat',
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
    },
    {
      value: 'b2',
      type: 'seat',
    },
    {
      value: 'b3',
      type: 'seat',
    },
    {
      value: 'b4',
      type: 'seat',
    },
    {
      value: 's4',
      type: 'empty',
    },
    {
      value: 'b5',
      type: 'seat',
    },
    {
      value: 'b6',
      type: 'seat',
    },
    {
      value: 'b7',
      type: 'seat',
    },
    {
      value: 'b8',
      type: 'seat',
    },
  ],
  [
    {
      value: 'c1',
      type: 'seat',
    },
    {
      value: 'c2',
      type: 'seat',
    },
    {
      value: 'c3',
      type: 'seat',
    },
    {
      value: 'c4',
      type: 'seat',
    },
    {
      value: 's5',
      type: 'empty',
    },
    {
      value: 'c5',
      type: 'seat',
    },
    {
      value: 'c6',
      type: 'seat',
    },
    {
      value: 'c7',
      type: 'seat',
    },
    {
      value: 'c8',
      type: 'seat',
    },
  ],
  [
    {
      value: 'd1',
      type: 'seat',
    },
    {
      value: 'd2',
      type: 'seat',
    },
    {
      value: 'd3',
      type: 'seat',
    },
    {
      value: 'd4',
      type: 'seat',
    },
    {
      value: 's6',
      type: 'empty',
    },
    {
      value: 'd5',
      type: 'seat',
    },
    {
      value: 'd6',
      type: 'seat',
    },
    {
      value: 'd7',
      type: 'seat',
    },
    {
      value: 'd8',
      type: 'seat',
    },
  ],
  [
    {
      value: 'e1',
      type: 'seat',
    },
    {
      value: 'e2',
      type: 'seat',
    },
    {
      value: 'e3',
      type: 'seat',
    },
    {
      value: 'e4',
      type: 'seat',
    },
    {
      value: 's7',
      type: 'empty',
    },
    {
      value: 'e5',
      type: 'seat',
    },
    {
      value: 'e6',
      type: 'seat',
    },
    {
      value: 'e7',
      type: 'seat',
    },
    {
      value: 'e8',
      type: 'seat',
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
    },
    {
      value: 'f2',
      type: 'seat',
    },
    {
      value: 'f3',
      type: 'seat',
    },
    {
      value: 's9',
      type: 'empty',
    },
    {
      value: 'f4',
      type: 'seat',
    },
    {
      value: 'f5',
      type: 'seat',
    },
    {
      value: 'f6',
      type: 'seat',
    },
    {
      value: 's10',
      type: 'empty',
    },
  ],
];

export const Seats: FC<SeatsProps> = ({ register }) => {
  return (
    <>
      <img className="booking__screen" src={screen} alt="screen" />
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
        <span className="booking__footer-label">Avialable</span>
      </div>
    </>
  );
};
