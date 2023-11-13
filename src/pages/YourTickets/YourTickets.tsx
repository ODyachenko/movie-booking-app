import { FC } from 'react';
import { Ticket } from '../../components/Ticket/Ticket';
import { useAppSelector } from '../../hooks/hooks';

export const YourTickets: FC = () => {
  const { bookedMovies } = useAppSelector((state) => state.booking);

  return (
    <section className="e-ticket block">
      <div className="container">
        <h1 className="e-ticket__title title">Your Tickets</h1>
        {bookedMovies.length ? (
          <div className="e-ticket__list">
            {bookedMovies.map((movie) => (
              <Ticket key={movie.id} {...movie} />
            ))}
          </div>
        ) : (
          <h2>You don't have save tickets</h2>
        )}
      </div>
    </section>
  );
};
