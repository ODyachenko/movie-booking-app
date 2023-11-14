import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import logo from '../../assets/img/logo.png';
import './styles.scss';

export const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    document.documentElement.classList.toggle('hidden');
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav block ${isOpen ? 'show' : ''}`}>
      <div className="nav__wrapper container">
        <NavLink to={'/'}>
          <img
            className="nav__logo"
            src={logo}
            alt="Logo"
            width={50}
            height={50}
          />
        </NavLink>
        <button
          className={`nav__burger ${isOpen ? 'active' : ''}`}
          onClick={onClickHandler}
        >
          <span className="nav__burger-item"></span>
        </button>
        <span className={`nav__overlay`} onClick={onClickHandler}></span>
        <NavLinks onClickHandler={onClickHandler} />
      </div>
    </nav>
  );
};
