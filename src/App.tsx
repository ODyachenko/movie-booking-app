import { useEffect } from 'react';
import { Routing } from './components/Routing';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchMovies } from './redux/slices/moviesSlice';
import { setAuthUser, setIsAuth } from './redux/slices/userSlice';

function App() {
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.getItem(String(process.env.REACT_APP_TOKEN))
      ? dispatch(setIsAuth(true))
      : dispatch(setIsAuth(false));
  }, [dispatch, isAuth]);

  useEffect(() => {
    const json = localStorage.getItem(String(process.env.REACT_APP_TOKEN));

    if (json) {
      const user = JSON.parse(json);
      dispatch(
        setAuthUser({
          email: user.user.email,
          fullname: user.user.user_metadata.fullname,
          avatarUrl: user.user.user_metadata.avatarUrl,
        })
      );
      return;
    }
  }, [isAuth, dispatch]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <Routing />;
}

export default App;
