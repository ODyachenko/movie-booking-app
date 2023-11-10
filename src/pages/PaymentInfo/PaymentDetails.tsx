import React, { FC } from 'react';
import { Field } from '../../UI/InputField/Field';

type PaymentDetailsProps = {
  email: string;
  fullname: string;
};

export const PaymentDetails: FC<PaymentDetailsProps> = ({
  email,
  fullname,
}) => {
  return (
    <div className="payment__details">
      <h2 className="payment__subtitle">Payment Details</h2>
      <fieldset>
        <Field
          className="payment__field"
          type="text"
          text="Your Email"
          value={email}
          disabled={true}
        />
        <Field
          className="payment__field"
          type="text"
          text="Cardholder Name"
          value={fullname}
          disabled={true}
        />
        <Field
          className="payment__field"
          type="text"
          text="Card Number"
          value="**** **** **** 51446"
          disabled={true}
        />
        <Field
          className="payment__field"
          type="text"
          text="Date"
          value="02 Nov 2025"
          disabled={true}
        />
        <Field
          className="payment__field"
          type="text"
          text="Type"
          value="Debit"
          disabled={true}
        />
        <Field
          className="payment__field"
          type="password"
          text="CVV"
          value="***"
          disabled={true}
        />
      </fieldset>
    </div>
  );
};
