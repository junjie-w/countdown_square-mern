import React, { useEffect, useState } from 'react';
import { TimerCard } from '../countdownLink/TimerCard';
import './LinkPastedCountdown.css'

export const LinkPastedCountdown = () => {

  //const millisecondsString = window.location.pathname;
  //const milliseconds = millisecondsString.substr("11")
  //console.log(222, milliseconds)

  //const linkString = window.location.pathname;
  //console.log("linkString", linkString)

  //const dateString = linkString.substr(11)
  //console.log("dateString", dateString)

  //const dateStringSplit = dateString.split('%20')
  //console.log("dateStringSplit", dateStringSplit)

  //const [toDateYear, toDateMonth, toDateDay, toDateHour, toDateMinute, toDateSecond, toDateTimezone] = dateStringSplit;
  //console.log("yeeep", toDateYear, toDateMonth, toDateDay, toDateHour, toDateMinute, toDateSecond, toDateTimezone)


  //const untilDateMonth = `${toDateMonth < 10 ? `0${toDateMonth}` : toDateMonth}`
  //const untilDateDay = `${toDateDay < 10 ? `0${toDateDay}` : toDateDay}`;
  //const untilDateHour = `${toDateHour < 10 ? `0${toDateHour}` : toDateHour}`
  //const untilDateMinute = `${toDateMinute < 10 ? `0${toDateMinute}` : toDateMinute}`
  //const untilDateSecond = `${toDateSecond < 10 ? `0${toDateSecond}` : toDateSecond}`

  ////const userSelectedDate = new Date("2014-06-12T23:00:00 GMT+0200")
  ////const userSelectedDate = `${toDateYear}-${untilDateMonth}-${untilDateDay}T${untilDateHour}:${untilDateMinute}:${untilDateSecond} ${toDateTimezone}`
  //const userSelectedDate = new Date(`Date.${toDateTimezone}`(toDateYear, toDateMonth, toDateDay, toDateHour, toDateMinute, toDateSecond))


  //console.log("dragonfly", userSelectedDate);
  const pathname = window.location.pathname
  const pathnameSplitted = pathname.split('/')

  console.log("pppathname", pathnameSplitted)


  //const timezoneString = pathname.substring(11, 14);
  const timezoneString = pathnameSplitted[2];
  const millisecondsString = pathnameSplitted[3];
  const titleStringToDecode = pathnameSplitted[4].slice(1);
  const titleString = decodeURI(titleStringToDecode)

  //const millisecondsString = pathname.slice(14, -7)
  //console.log("pp", timezoneString, millisecondsString)
  //const userSelectedTime = new Date().getTime(millisecondsString);
  //console.log("why", userSelectedTime)
  //const userSelectedDate = new Date(userSelectedTime)

  const userSelectedDate = new Date(+millisecondsString)
  console.log("dragonfly", userSelectedDate);

  const year = userSelectedDate.getFullYear();
  const month = userSelectedDate.getMonth() + 1;
  const day = userSelectedDate.getDate();
  const hour = userSelectedDate.getHours();
  const minute = userSelectedDate.getMinutes();
  const second = userSelectedDate.getSeconds();

  const calculateTimeLeft = () => {
    let difference = +userSelectedDate - +new Date()
    //let difference = +userSelectedDate - +new Date()
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

  return (
    <div className="linkPastedCountdown">
      <div className="textAndButton linkPastedCountdown__textAndButton">
        <div className="text linkPastedCountdown__text">
          <div className="dots linkPastedCountdown__dots">
            <div className="leftTop dot"></div>
            <div className="rightTop dot"></div>
          </div>
          <p className="cardTitle linkPastedCountdown__cardTitle">
            <span className="linkPastedCountdown__cardTitle titleStringText ">{titleString} {" "} </span>
            <br />
            <span className="linkPastedCountdown__countdownText">Countdown</span>
          </p>
          {/*{console.log(timerComponents)}*/}
          {/*{timerComponents.length ? timerComponents : <span className="upText" >Time's up!</span>}*/}
          {days || hours || minutes || seconds
            ?
            (
              <div className="timerText linkPastedCountdown__timerText">
                <p><span className="textDays"> {days}</span> {days > 1 ? "days" : "day"}</p>
                <p><span className="textHours"> {hours}</span> {hours > 1 ? "hours" : "hour"}</p>
                <p><span className="textMinutes"> {minutes}</span> {minutes > 1 ? "minutes" : "minute"}</p>
                <p><span className="textSeconds"> {seconds}</span> {seconds > 1 ? "seconds" : "second"}</p>
              </div>
            )
            :
            <span className="upText" >Time's up!</span>
          }
          <div className="untilText">
            <p className="pText"> until </p>
          </div>
          <p className="dateText">
            <span className="dateText1">{year}.{`${month < 10 ? `0${month}` : month}`}.{`${day < 10 ? `0${day}` : day}`} {" "} </span>
            <span className="dateText2"> {" "} {`${hour < 10 ? `0${hour}` : hour}`}:{`${minute < 10 ? `0${minute}` : minute}`}:{`${second < 10 ? `0${second}` : second}`}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
