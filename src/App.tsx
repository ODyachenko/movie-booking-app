import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import supabase from './config/supabaseClient';
import { useAppDispatch } from './hooks/hooks';
import { Booking } from './pages/Booking';
import { Details } from './pages/Details/Details';
import { ETicket } from './pages/ETicket/ETicket';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Register } from './pages/Register';
import { Settings } from './pages/Settings/Settings';
import { YourMovie } from './pages/YourMovie';
import { setTopMovies } from './redux/slices/moviesSlice';

function App() {
  const dispatch = useAppDispatch();

  const fetchMovies = async () => {
    try {
      const { data, error } = await supabase.from('movies').select();

      if (error) {
        throw error;
      }
      dispatch(setTopMovies(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
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
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
