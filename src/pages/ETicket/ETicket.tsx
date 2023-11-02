import React, { FC } from 'react';
import { Ticket } from '../../components/Ticket/Ticket';
import { Btn } from '../../UI/Btn/Btn';
import './styles.scss';

export const ETicket: FC = () => {
  return (
    <section className="e-ticket block">
      <div className="container">
        <h1 className="e-ticket__title title">E-Ticket</h1>
        <h2 className="e-ticket__subtitle subtitle">Instruction</h2>
        <p className="e-ticket__instruction">
          Come to the cinema, show and scan the barcode to the space provided.
          Continue to comply with health protocols.
        </p>
        <Ticket />
        <Btn model="primary" text="Download E-Ticket" />
      </div>
    </section>
  );
};
