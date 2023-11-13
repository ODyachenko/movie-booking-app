import { FC } from 'react';
import { Card } from '../../components/PaymentCard/Card';
import { useAppSelector } from '../../hooks/hooks';
import { PaymentDetails } from './PaymentDetails';
import './styles.scss';

export const PaymentInfo: FC = () => {
  const { authUser } = useAppSelector((state) => state.user);

  return (
    <section className="payment block">
      <div className="container">
        <h1 className="payment__title title">Payment Info</h1>
        <div className="payment__wrapper">
          <Card className="payment__card" fullname={authUser.fullname} />
          <PaymentDetails {...authUser} />
        </div>
      </div>
    </section>
  );
};
