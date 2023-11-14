import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Ticket } from '../../components/Ticket/Ticket';
import './styles.scss';

const ETicket: FC = () => {
  let [searchParams] = useSearchParams();

  return (
    <section className="e-ticket block">
      <div className="container">
        <h1 className="e-ticket__title title">E-Ticket</h1>
        <h2 className="e-ticket__subtitle subtitle">Instruction</h2>
        <p className="e-ticket__instruction">
          Come to the cinema, show and scan the barcode to the space provided.
          Continue to comply with health protocols.
        </p>
        <div className="e-ticket__list">
          <Ticket
            name={searchParams.get('name')}
            cinema={searchParams.get('cinema')}
            date={searchParams.get('date')}
            time={searchParams.get('time')}
            seats={searchParams.get('seats')}
          />
        </div>
      </div>
    </section>
  );
};
export default ETicket;
