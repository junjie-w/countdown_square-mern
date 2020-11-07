import React, { useEffect, useState } from 'react';
import './Countdown.css';
import '../Home/HomeLeft';
import { HomeLeft } from '../Home/HomeLeft';
import { useLocation } from "react-router-dom";
//import { HomeButton } from '../Home/HomeRight/HomeButton';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { TimerCard } from './TimerCard';
import axios from '../../axios';

export const Countdown = () => {

  const data = useLocation();
  console.log("000", data)

  //console.log("222", title);
  //console.log("333", selectedDate);

  //const { key } = data;
  const { id } = data.state.key;
  const { selectedDate } = data.state.selectedDate;
  const { title } = data.state.title;
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

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return 0;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval} {" "}
      </span>
    )
  })
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
  const saveToDb = () => {
    const timerInfo = {
      title: title,
      toDateYear: year,
      toDateMonth: month,
      toDateDay: day,
      toDateHour: hour,
      toDateMinute: minute,
      toDateSecond: second,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      selectedDate: selectedDate
    }

    const postData = async () => await axios.post('/countdown/public', timerInfo)
      .then(response => console.log(response))
      .catch(error => console.log("error", error));
    postData();
  }

  return (
    <div className="countdown">

      <div className="timer">
        <div className="textAndButton">
          <TimerCard title={title} timerComponents={timerComponents} year={year} month={month} day={day} hour={hour} minute={minute} second={second} />
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

        <div className="buttons">
          <Link to={{
            pathname: '/public',
            state: {
              title: { title },
              untilDate: { untilDate },
              key: { id },
              //publicTimerCards: publicTimerCards
            }
          }}>
            {/*<Button onClick={() => addToPublic(title, untilDate, id)} type="submit" variant="contained" className="countdownButton"  >*/}
            <Button onClick={saveToDb} type="submit" variant="contained" className="countdownButton"  >
              {/*Add to public square*/}
              Add to Timer Square
         </Button>
          </Link>
          <Link to="/user/:userId">
            <Button type="submit" variant="contained" className="countdownButton"  >
              Save to My Countdown
         </Button>
          </Link>
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
