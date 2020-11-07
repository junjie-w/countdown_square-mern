import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="header">
      <div className="header__right">
        <Link to="/">
          <p className="header__title header__titleHome">Home</p>
        </Link>
        <Link to="/countdownSquare">
          <p className="header__title header__titleCountdown">
            Countdown Square
            {/*Timer Square*/}
            {/*Timer Town*/}
          </p>
        </Link>
      </div>
      <Link to="/user/:userId">
        <p className="header__title header__titleUser">My Countdown</p>
      </Link>

    </nav >
  )
}
