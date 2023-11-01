import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinksType } from '../../../@types';

export const NavLinksItem: FC<NavLinksType> = ({ icon, text, path }) => {
  return (
    <li className="nav__links-item">
      <NavLink to={path}>
        {icon}
        <span>{text}</span>
      </NavLink>
    </li>
  );
};
