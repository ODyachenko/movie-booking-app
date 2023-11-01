import React, { FC } from 'react';
import { NavLinks } from './NavLinks';
import logo from '../../assets/img/logo.png';
import './styles.scss';

export const Nav: FC = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <img className="nav__logo" src={logo} alt="Logo" />
        <NavLinks />
      </div>
    </nav>
  );
};
