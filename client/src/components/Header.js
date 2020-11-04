import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <p className="header__title header__titleHome">Home</p>
      </Link>
      <Link to="/countdown">
        <p className="header__title header__titleCountdown">My Countdown</p>
      </Link>
    </nav >
  )
}
