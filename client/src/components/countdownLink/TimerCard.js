import React from 'react';
import './TimerCard.css';
import Button from '@material-ui/core/Button';

export const TimerCard = ({ title, year, month, day, hour, minute, second, days, hours, minutes, seconds }) => {
  return (
    <div>
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
            <span className="dateText1">{year}.{month}.{day} {" "} </span>
            <span className="dateText2"> {" "} {hour}:{minute}:{second}</span>
          </p>
        </div>
        <Button type="submit" variant="contained" className="countdownButton linkButton"  >
          <div className="copyText">
            Copy<br />The<br />Link
        </div>
        </Button>
      </div>
    </div>
  )
}
