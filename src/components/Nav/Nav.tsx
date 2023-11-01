import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import logo from '../../assets/img/logo.png';
import './styles.scss';

export const Nav: FC = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <NavLink to={'/'}>
          <img className="nav__logo" src={logo} alt="Logo" />
        </NavLink>
        <NavLinks />
      </div>
    </nav>
  );
};
