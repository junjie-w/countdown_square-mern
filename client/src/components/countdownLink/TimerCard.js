import React, { useState } from 'react';
import './TimerCard.css';
import Button from '@material-ui/core/Button';

export const TimerCard = ({ title, year, month, day, hour, minute, second, days, hours, minutes, seconds, selectedDate }) => {

  const untilDateObject = {
    year,
    month,
    day,
    hour,
    minute,
    second
  }
  console.log("!???!!", selectedDate)

  const [copyText, setCopyText] = useState(<> Copy < br /> The < br /> Link </>)


  const url = window.location.href;
  const copyLink = (url) => {
    navigator.clipboard.writeText(url);
    setCopyText(<> Link < br /> Copied! < br /> :) </>)
  }


  return (
    <div className="textAndButton">
      <div className="text">
        <div className="dots">
          <div className="leftTop dot"></div>
          <div className="rightTop dot"></div>
        </div>
        <p className="cardTitle">{title} {" "} <span>Countdown</span> </p>
        {/*{console.log(timerComponents)}*/}
        {/*{timerComponents.length ? timerComponents : <span className="upText" >Time's up!</span>}*/}
        {days || hours || minutes || seconds
          ?
          (
            <div className="timerText">
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
      <Button type="submit" variant="contained" className="countdownButton linkButton" onClick={() => copyLink(url)} >
        <div className="copyText">
          {copyText}
          {/*Copy<br />The<br />Link*/}
        </div>
      </Button>
    </div>
  )
}
