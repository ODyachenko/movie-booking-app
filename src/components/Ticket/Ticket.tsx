import React, { FC } from 'react';
import Barcode from 'react-barcode';
import { Margin, usePDF } from 'react-to-pdf';
import { Btn } from '../../UI/Btn/Btn';
import './styles.scss';

export const Ticket: FC = () => {
  const { toPDF, targetRef } = usePDF({
    filename: 'ticket.pdf',
    page: { margin: Margin.MEDIUM },
  });

  return (
    <div className="e-ticket__list-item">
      <div ref={targetRef} className="e-ticket__ticket ticket">
        <div className="ticket__header">
          <h3 className="ticket__movie">Film: Shang-Chi</h3>
          <span className="ticket__label">e-ticket</span>
        </div>
        <div className="ticket__content">
          <div className="ticket__info">
            <span>Date</span>
            <strong>06/09/2021</strong>
          </div>
          <div className="ticket__info">
            <span>Seat</span>
            <strong>c4</strong>
          </div>
          <div className="ticket__info">
            <span>Location</span>
            <strong>Viva Cinema</strong>
          </div>
          <div className="ticket__info">
            <span>Time</span>
            <strong>09:00</strong>
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
