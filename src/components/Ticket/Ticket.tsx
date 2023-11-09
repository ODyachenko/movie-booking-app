import React, { FC } from 'react';
import Barcode from 'react-barcode';
import { useSearchParams } from 'react-router-dom';
import { Margin, Resolution, usePDF } from 'react-to-pdf';
import { Btn } from '../../UI/Btn/Btn';
import './styles.scss';

export const Ticket: FC = () => {
  let [searchParams] = useSearchParams();
  const { toPDF, targetRef } = usePDF({
    filename: 'ticket.pdf',
    resolution: Resolution.NORMAL,
    page: { margin: Margin.MEDIUM, format: 'letter' },
  });

  return (
    <div className="e-ticket__list-item">
      <div ref={targetRef} className="e-ticket__ticket ticket">
        <div className="ticket__header">
          <h3 className="ticket__movie">Film: {searchParams.get('name')}</h3>
          <span className="ticket__label">e-ticket</span>
        </div>
        <div className="ticket__content">
          <div className="ticket__info">
            <span>Date</span>
            <strong>{searchParams.get('date')}</strong>
          </div>
          <div className="ticket__info">
            <span>Seats</span>
            <strong>{searchParams.get('seats')}</strong>
          </div>
          <div className="ticket__info">
            <span>Location</span>
            <strong>{searchParams.get('cinema')}</strong>
          </div>
          <div className="ticket__info">
            <span>Time</span>
            <strong>{searchParams.get('time')}</strong>
          </div>
          <div className="ticket__info">
            <span>Payment</span>
            <strong>Successful</strong>
          </div>
          <div className="ticket__info">
            <span>Order</span>
            <strong>1904566</strong>
          </div>
        </div>
        <div className="ticket__footer">
          <Barcode
            width={2.5}
            height={50}
            value="1904566"
            displayValue={false}
          />
        </div>
      </div>
      <Btn model="primary" text="Download E-Ticket" handler={toPDF} />
    </div>
  );
};
