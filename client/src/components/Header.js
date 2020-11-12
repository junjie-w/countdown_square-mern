import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';

export const Header = () => {

  const [info, dispatch] = useStateValue();

  const { user } = info.userInfo;
  const { userName } = info.userInfo;

  //useEffect(() => {
  //  if (info.user) {
  //    const { displayName } = info.user;
  //    return displayName;
  //  }
  //}, [info.user])

  //const [userExist, setUserExist] = useState(false)
  //const [userName, setUserName] = useState(null)

  ////const checkUser = () => {
  //if (info.user) {
  //  setUserExist(true);
  //  const { user, userToken } = info;
  //  const { displayName } = info.user;
  //  console.log("here!!!", info, displayName)
  //  setUserName(displayName)
  //}
  //}
  //checkUser();


  //const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
  //  ? <Link to={to}>{children}</Link>
  //  : <>{children}</>;


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
      {/*<ConditionalLink to={{
        pathname: `/user/${displayName}`,
        state: {
          userToken: { userToken },
        }
      }} condition={user}>*/}
      <Link to={user ? `/user/${userName}` : "/login"} >
        <p className="header__title header__titleUser">My Countdown</p>
      </Link>
      {/*</ConditionalLink>*/}
    </nav >
  )
}
