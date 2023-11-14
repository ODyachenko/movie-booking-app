import { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './Nav/Nav';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Details = lazy(() => import('../pages/Details/Details'));
const ETicket = lazy(() => import('../pages/ETicket/ETicket'));
const PaymentInfo = lazy(() => import('../pages/PaymentInfo/PaymentInfo'));
const Booking = lazy(() => import('../pages/Booking'));
const PersonalData = lazy(() => import('../pages/PersonalData/PersonalData'));
const Settings = lazy(() => import('../pages/Settings/Settings'));
const YourMovie = lazy(() => import('../pages/YourMovie/YourMovie'));
const YourTickets = lazy(() => import('../pages/YourTickets/YourTickets'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const Routing: FC = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:id"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <Details />
            </Suspense>
          }
        />
        <Route
          path="/booking/:id"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <Booking />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/your-movie"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <YourMovie />
            </Suspense>
          }
        />
        <Route
          path="/settings"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path="/e-ticket"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <ETicket />
            </Suspense>
          }
        />
        <Route
          path="/paymentInfo"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <PaymentInfo />
            </Suspense>
          }
        />
        <Route
          path="/personal-data"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <PersonalData />
            </Suspense>
          }
        />
        <Route
          path="/your-tickets"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <YourTickets />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<p className="loader">loading...</p>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};
