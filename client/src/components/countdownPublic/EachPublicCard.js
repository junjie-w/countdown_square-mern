import React from 'react';
import './EachPublicCard.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import axios from '../../axios';

export const EachPublicCard = ({ id, title, days, hours, minutes, seconds, year, month, day, hour, minute, second }) => {
  const deleteTimer = async () => {
    await axios.delete('/countdown/public', id)
      .then(response => console.log(response))
      .catch(error => console.log("error", error));
  }

  console.log("id", id)

  return (
    <div className="card">
      {/*<div className="cardLine">*/}
      <h3 className="title">
        <div className="titleText">{title}</div>
        {/*<span className="titleCountdown">Countdown</span>*/}
      </h3>
      <div className="timerText">
        <p>
          <span className="textDays"> {days}</span> days
          <span className="textHours"> {hours}</span> hours
        </p>
        <p>
          <span className="textMinutes"> {minutes}</span> minutes
         <span className="textSeconds"> {seconds}</span> seconds
        </p>
      </div>
      <div>
        <p className="textUntil">until</p>
        <div className="textAndIcon">
          <p className="textUntilDate"> {year}.{month}.{day} </p>
          <p className="textUntilDate">{hour}:{minute}:{second}</p>
          <div>
            <IconButton className="iconButton" onClick={() => deleteTimer(id)} >
              <DeleteOutlineIcon />
            </IconButton>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </div>
  )
}
