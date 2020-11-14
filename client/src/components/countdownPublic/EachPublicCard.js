import React, { useState } from 'react';
import './EachPublicCard.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import axios from '../../axios';
import { useEffect } from 'react';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/Reducer';

export const EachPublicCard = ({ id, timerId, title, days, hours, minutes, seconds, year, month, day, hour, minute, second, index }) => {
  //const deleteTimer = async () => {
  //  console.log(">>>>>>", timerId)
  //  await axios.delete(`/countdown/${timerId}`)
  //    .then(response => console.log(response))
  //    .catch(error => console.log("error", error));
  //}

  //const deleteTimer = async (id) => {
  //  console.log(">>>>>>", id)
  //  await axios.delete("/timer/delete", { id: id })
  //    .then(response => console.log(response))
  //    .catch(error => console.log("error", error));
  //}

  const [info, dispatch] = useStateValue();


  const [deleted, setDeleted] = useState(false)

  const deleteTimer = async () => {
    console.log(">>>>>>", id)
    await axios.delete(`/timer/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log("error", error));
    //window.location.reload()
    setDeleted(!deleted)
    dispatch(
      {
        type: actionTypes.SET_INFO,
        countdownInfo: {
          deleted: deleted,
        }
      }
    )
  }


  const [justLoaded, setJustLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setJustLoaded(false), 43.5)
    //clearTimeout(timer)

    console.log("setTimeOut")
    return () => clearTimeout(timer)
  }, [])


  //console.log("id", id)

  //const [timerCards, setTimerCards] = useState([])

  //useEffect(() => {
  //  const fetchData = async () => {
  //    const req = await axios.get('/countdown/public');
  //    setTimerCards(req.data);
  //  }
  //  fetchData();
  //  return () => fetchData();
  //}, [deleteTimer()])

  return (
    //<div className="eachCard__addDeleteButton">
    //<div className="eachCard__deleteButton">
    //  <IconButton>
    //    <DeleteOutlineIcon />
    //  </IconButton>
    //</div>

    <div className={`eachCard ${justLoaded && index === 0 && "firstCard__justLoaded"}`} >

      <div className="eachCard__dots">
        <div className="eachCardDot"></div>
        <div className="eachCardDot"></div>
      </div>
      {/*<div className="cardLine">*/}
      <div className="eachCard__title">
        {/*<span className="titleCountdown">Countdown</span>*/}
        {/*<p className="eachCard__titleText">{title} {" "} <span>Countdown</span> </p>*/}
        <p className="eachCard__titleText">{title} <span>{" "}</span> <span>Countdown</span> </p>
      </div>

      {days || hours || minutes || seconds
        ?
        (
          <div className="eachCard__timerText">
            <p><span className="eachTextDays"> {days}</span> {days > 1 ? "days" : "day"}</p>
            <p><span className="eachTextHours"> {hours}</span> {hours > 1 ? "hours" : "hour"}</p>
            <p><span className="eachTextMinutes"> {minutes}</span> {minutes > 1 ? "minutes" : "minute"}</p>
            <p><span className="eachTextSeconds"> {seconds}</span> {seconds > 1 ? "seconds" : "second"}</p>
          </div>
        )
        :
        <span className="eachCard__upText">Time's up!</span>
      }

      <div className="eachCard__until">
        <p className="textUntil">until</p>
        <div className="eachCard__deleteButton">
          {/*<IconButton className="deleteButton" onClick={() => deleteTimer(id)}>*/}
          <IconButton className="deleteButton" onClick={() => deleteTimer(id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </div>

      <div className="eachCard__untilDate">
        <p className="textUntilDate1">{year}.{`${month < 10 ? `0${month}` : month}`}.{`${day < 10 ? `0${day}` : day}`} {" "} </p>
        <p className="textUntilDate2"> {" "} {`${hour < 10 ? `0${hour}` : hour}`}:{`${minute < 10 ? `0${minute}` : minute}`}:{`${second < 10 ? `0${second}` : second}`}</p>
        {/*<div>
          <IconButton className="iconButton" onClick={() => deleteTimer(id)} >
            <DeleteOutlineIcon />
          </IconButton>
        </div>*/}
      </div>

    </div>
    //</div>
  )
}
