import React, { FC } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { Btn } from '../../UI/Btn/Btn';

export const NavLinks: FC<any> = ({ onClickHandler }) => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const onCLickSignIn = () => {
    navigate('/login');
  };

  return (
    <>
      <ul className="nav__links" onClick={onClickHandler}>
        <li className="nav__links-item">
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
                fill="#636882"
              />
            </svg>
            <span>Home</span>
          </NavLink>
        </li>
        {isAuth && (
          <li className="nav__links-item">
            <NavLink to="/your-movie">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.07 2C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2H15.07ZM15.75 8.04H8.22C7.79 8.04 7.44 8.39 7.44 8.83C7.44 9.269 7.79 9.62 8.22 9.62H15.75C16.18 9.62 16.53 9.269 16.53 8.83C16.53 8.39 16.18 8.04 15.75 8.04Z"
                  fill="#636882"
                />
              </svg>
              <span>Your Movie</span>
            </NavLink>
          </li>
        )}
        {isAuth ? (
          <li className="nav__links-item">
            <NavLink to="/settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739ZM12 2C14.9391 2 17.294 4.35402 17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2Z"
                  fill="#636882"
                />
              </svg>
              <span>Settings</span>
            </NavLink>
          </li>
        ) : (
          <li className="nav__links-item">
            <Btn
              className="nav__btn"
              text="Sign In"
              model="primary"
              handler={onCLickSignIn}
            />
          </li>
        )}
      </ul>
    </>
  );
};
