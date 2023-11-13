import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { fetchBookedMovies } from '../redux/slices/bookingSlice';
import { fetchMovies } from '../redux/slices/moviesSlice';
import { setAuthUser, setIsAuth } from '../redux/slices/userSlice';

export const useBaseQueries = () => {
  const { isAuth, authUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

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
          id: user.user.id,
          email: user.user.email,
          fullname: user.user.user_metadata.fullname,
          avatarUrl: user.user.user_metadata.avatarUrl,
        })
      );
      return;
    }
  }, [isAuth, dispatch]);

  useEffect(() => {
    authUser.id && dispatch(fetchBookedMovies(authUser.id));
  }, [authUser.id, dispatch]);
};
