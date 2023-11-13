import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Booking } from '../pages/Booking';
import { Details } from '../pages/Details/Details';
import { ETicket } from '../pages/ETicket/ETicket';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { PaymentInfo } from '../pages/PaymentInfo/PaymentInfo';
import { PersonalData } from '../pages/PersonalData/PersonalData';
import { Register } from '../pages/Register';
import { Settings } from '../pages/Settings/Settings';
import { YourMovie } from '../pages/YourMovie/YourMovie';
import { Nav } from './Nav/Nav';

export const Routing: FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/your-movie" element={<YourMovie />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/e-ticket" element={<ETicket />} />
        <Route path="/paymentInfo" element={<PaymentInfo />} />
        <Route path="/personal-data" element={<PersonalData />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
