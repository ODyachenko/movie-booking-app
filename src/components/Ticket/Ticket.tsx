import React, { FC } from 'react';
import './styles.scss';

export const Ticket: FC = () => {
  return (
    <div className="e-ticket__ticket ticket">
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
          <span>Seats</span>
          <strong>c4, c5</strong>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="66"
          viewBox="0 0 250 66"
          fill="none"
        >
          <path
            d="M16 8.33331H21.1667V58.3333H16V8.33331ZM26.3333 8.33331H28.9167V58.3333H26.3333V8.33331ZM31.5 8.33331H36.6667V58.3333H31.5V8.33331ZM39.25 8.33331H44.4167V58.3333H39.25V8.33331ZM47 8.33331H52.1667V58.3333H47V8.33331ZM54.75 8.33331H57.3333V58.3333H54.75V8.33331ZM59.9167 8.33331H67.6667V58.3333H59.9167V8.33331Z"
            fill="black"
          />
          <path
            d="M126.833 8.33331H132V58.3333H126.833V8.33331ZM137.167 8.33331H139.75V58.3333H137.167V8.33331ZM142.333 8.33331H147.5V58.3333H142.333V8.33331ZM150.083 8.33331H155.25V58.3333H150.083V8.33331ZM157.833 8.33331H163V58.3333H157.833V8.33331ZM165.583 8.33331H168.167V58.3333H165.583V8.33331ZM170.75 8.33331H178.5V58.3333H170.75V8.33331Z"
            fill="black"
          />
          <path
            d="M71.8335 8H77.0002V58H71.8335V8ZM82.1668 8H84.7502V58H82.1668V8ZM87.3335 8H92.5002V58H87.3335V8ZM95.0835 8H100.25V58H95.0835V8ZM102.833 8H108V58H102.833V8ZM110.583 8H113.167V58H110.583V8ZM115.75 8H123.5V58H115.75V8Z"
            fill="black"
          />
          <path
            d="M182.667 8H187.834V58H182.667V8ZM193 8H195.584V58H193V8ZM198.167 8H203.334V58H198.167V8ZM205.917 8H211.084V58H205.917V8ZM213.667 8H218.834V58H213.667V8ZM221.417 8H224V58H221.417V8ZM226.584 8H234V58H226.584V8Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};
