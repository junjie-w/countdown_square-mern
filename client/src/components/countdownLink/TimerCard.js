import React from 'react';
import './TimerCard.css';
import Button from '@material-ui/core/Button';

export const TimerCard = ({ title, timerComponents, year, month, day, hour, minute, second }) => {
  return (
    <div>
      <div className="textAndButton">

        <div className="text">
          <p>{title} Countdown </p>
          {console.log(timerComponents)}
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          <p> until {year}.{month}.{day} {hour}:{minute}:{second}  </p>
        </div>
        <Button type="submit" variant="contained" className="countdownButton linkButton"  >
          Copy<br />The<br />Link
          </Button>
      </div>
    </div>
  )
}
