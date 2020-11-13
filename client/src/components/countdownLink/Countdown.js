import React, { useEffect, useReducer, useState } from 'react';
import './Countdown.css';
import '../Home/HomeLeft';
import { HomeLeft } from '../Home/HomeLeft';
import { useLocation } from "react-router-dom";
//import { HomeButton } from '../Home/HomeRight/HomeButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { TimerCard } from './TimerCard';
import axios from '../../axios';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/Reducer';

export const Countdown = () => {

  const [info, dispatch] = useStateValue();

  console.log("rabbit", info)

  //const { user, userToken } = info;


  //const [userExist, setUserExist] = useState(null);
  //const [userToken, setUserToken] = useState(null)
  const { user } = info.userInfo;
  const { userName } = info.userInfo;
  const { userToken } = info.userInfo;
  const { userEmail } = info.userInfo;


  console.log("turtle", user, userName, userToken)

  //if (info.user) {
  //  const user = info.user;
  //  //setUserExist(user)
  //  const userName = info.user.displayName;
  //  const userToken = info.userInfo.userToken;
  //  //setUserToken(userToken)
  //}

  const data = useLocation();
  console.log("000", data)

  //console.log("222", title);
  //console.log("333", selectedDate);

  //const { key } = data;
  const { id } = data.state;
  const { selectedDate } = data.state.selectedDate;
  const { title } = data.state.title;
  console.log("999", title)
  //console.log("selectedDate", selectedDate)
  delete selectedDate.selectedDate;
  //console.log("new", selectedDate)
  //console.log(title)
  //console.log(key)
  console.log("okoko", selectedDate)
  const year = selectedDate.getUTCFullYear();
  const month = selectedDate.getUTCMonth() + 1;
  const day = selectedDate.getUTCDate();
  const hour = selectedDate.getUTCHours();
  const minute = selectedDate.getUTCMinutes();
  const second = selectedDate.getUTCSeconds();
  const untilDate = {
    year,
    month,
    day,
    hour,
    minute,
    second
  }

  console.log("butterfly", untilDate)

  const calculateTimeLeft = () => {
    let difference = +selectedDate - +new Date()
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  console.log("timeLeft", timeLeft)

  const { days, hours, minutes, seconds } = timeLeft

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer)
  });

  //const timerComponents = []

  //Object.keys(timeLeft).forEach(interval => {
  //  if (!timeLeft[interval]) {
  //    return 0;
  //  }
  //  timerComponents.push(
  //    <span>
  //      {timeLeft[interval]} {interval} {" "}
  //    </span>
  //  )
  //})
  //const timerComponents = [];

  //Object.keys(timeLeft).forEach((interval) => {
  //  if (!timeLeft[interval]) {
  //    return;
  //  }

  //  timerComponents.push(
  //    <span>
  //      {timeLeft[interval]} {interval}{" "}
  //    </span>
  //  );
  //setTimerComponents(prev => [
  //  ...prev,
  //  <span>
  //    {timeLeft[interval]} {interval} {" "}
  //  </span>
  //])

  const [savedToPublic, setSavedToPublic] = useState(false)
  const [savedToPersonal, setSavedToPersonal] = useState(false)

  const saveToDbPublic = () => {
    const timerInfo = {
      title: title,
      toDateYear: year,
      toDateMonth: month,
      toDateDay: day,
      toDateHour: hour,
      toDateMinute: minute,
      toDateSecond: second,
      //days: days,
      //hours: hours,
      //minutes: minutes,
      //seconds: seconds,
      selectedDate: selectedDate,
      publicCountdown: true,
      timerId: id,
    }

    const postData = async () => await axios.post('/countdown/public', timerInfo)
      .then(response => console.log(response))
      .catch(error => console.log("error", error));
    postData();

    console.log("saved to public countdown!")

    setSavedToPublic(true)
  }

  const saveToDbPersonal = () => {
    const timerInfo = {
      title: title,
      toDateYear: year,
      toDateMonth: month,
      toDateDay: day,
      toDateHour: hour,
      toDateMinute: minute,
      toDateSecond: second,
      //days: days,
      //hours: hours,
      //minutes: minutes,
      //seconds: seconds,
      selectedDate: selectedDate,
      personalCountdown: true,
      timerId: id,
      user: user,
      userToken: userToken,
      userEmail: userEmail
    }

    const postData = async () => await axios.post('/countdown/public', timerInfo)
      .then(response => console.log(response))
      .catch(error => console.log("error", error));
    postData();

    //const dispatchUserInfo = () => {
    dispatch(
      {
        type: actionTypes.SET_INFO,
        countdownInfo: {
          timerId: id,
          title: title,
        },
      },
      {
        type: actionTypes.SET_USER,
        userInfo: {
          user: user,
          userToken: userToken,
          userName: userName,
          userEmail: userEmail,
        }
      },

    )
    console.log("dispatched")
    //}
    //dispatchUserInfo();

    console.log("saved to my countdown!")

    setSavedToPersonal(true)
  }

  //let ConditionalLink = !savedToPublic ? Link : <Link to={{
  //  pathname: '/countdownSquare',
  //  state: {
  //    title: { title },
  //    untilDate: { untilDate },
  //    key: { id },
  //    //publicTimerCards: publicTimerCards
  //  }
  //}}></Link>;

  const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
    ? <Link to={to}>{children}</Link>
    : <>{children}</>;


  return (
    <div className="countdown">

      <div className="timer">
        <div className="timerContainer">
          {/*<TimerCard title={title} timerComponents={timerComponents} year={year} month={month} day={day} hour={hour} minute={minute} second={second} />*/}
          <TimerCard title={title} year={year} month={month} day={day} hour={hour} minute={minute} second={second} days={days} hours={hours} minutes={minutes} seconds={seconds} selectedDate={selectedDate} />
          {/*<div className="text">
            <p>{title} Countdown </p>
            {console.log(timerComponents)}
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
            <p> until {year}.{month}.{day} {hour}:{minute}:{second}  </p>
          </div>
          <Button type="submit" variant="contained" className="countdownButton linkButton"  >
            Copy<br />The<br />Link
          </Button>*/}
        </div>
        {/*<img className="backgroundImg" src="https://i.pinimg.com/474x/59/a4/3e/59a43e9d2831f3402c1a09c1f1560fa6.jpg" alt="" />*/}
        {/*<div className="text">
          <p>{days} days {hours} hours {minutes} minutes {seconds} seconds</p>
          <p>until</p>
          <p>{title}</p>
        </div>*/}

        <div className="buttonAndPublicText">
          <div className="buttons">
            {/*<Link to={{
            pathname: '/countdownSquare',
            state: {
              title: { title },
              untilDate: { untilDate },
              key: { id },
              //publicTimerCards: publicTimerCards
            }
          }}>*/}
            <ConditionalLink to="/countdownSquare" condition={savedToPublic}>
              {/*<Button onClick={() => addToPublic(title, untilDate, id)} type="submit" variant="contained" className="countdownButton"  >*/}
              {/*<Link path="/countdownSquare">*/}
              <Button onClick={!savedToPublic && saveToDbPublic} type="submit" variant="contained" className={`countdownButton ${savedToPublic && "savedButton"}`}>
                {/*Add to public square*/}
                <div className="purpleButtonText">
                  {!savedToPublic ? "Save to Countdown Square*" : "Check it in Countdown Square"}
                </div>
              </Button>
            </ConditionalLink>
            {/*</Link>*/}
            {/*</Link>*/}
            {/*<Link to={{
            pathname: `/user/${id}`,
            state: {
              timerId: { id },
              title: { title },
              selectedDate: { selectedDate }
            }
          }}>*/}
            <ConditionalLink to={{
              //pathname: !user ? "/login" : `/user/${id}`,
              pathname: `/user/${id}`,
              state: {
                timerId: { id },
                title: { title },
                selectedDate: { selectedDate }
              }
            }} condition={savedToPersonal}>
              {/*<ConditionalLink to={`/user/${id}`} condition={savedToPersonal}>*/}
              {/*<Button onClick={!savedToPersonal && saveToDbPersonal} type="submit" variant="contained" className={`countdownButton ${savedToPersonal && "savedButton"}`}  >*/}
              <Button onClick={!savedToPersonal && saveToDbPersonal} type="submit" variant="contained" className={`countdownButton ${savedToPersonal && "savedButton"}`}  >
                {/*{!savedToPersonal ? "Save to My Countdown" : "Check it in My Countdown"}*/}
                <div className="purpleButtonText">
                  {!savedToPersonal ? "Save to My Countdown" : "Check it in My Countdown"}
                </div>
              </Button>
            </ConditionalLink>
            {/*</Link>*/}
          </div>
          <div className="publicText">
            <p><em>*for public events, holidays, etc:)</em></p>
            {/*<p><em>*Countdown Square collects countdowns for public events, holidays, etc:)</em></p>*/}
          </div>
        </div>
      </div>
      {/*<div className="button">*/}
      {/*<div className="buttonVertical">

      </div>*/}
      <div className="timerImg">
        <HomeLeft />
      </div>
    </div >
  )
}
