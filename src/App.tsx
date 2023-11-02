import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Booking } from './pages/Booking';
import { Details } from './pages/Details/Details';
import { ETicket } from './pages/ETicket/ETicket';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Settings } from './pages/Settings/Settings';
import { YourMovie } from './pages/YourMovie';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/your-movie" element={<YourMovie />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/e-ticket" element={<ETicket />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
