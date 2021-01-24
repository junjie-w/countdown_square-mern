import React, { useEffect, useState } from 'react';
import "./CountdownPublic.css";
import { useLocation } from "react-router-dom";
import { PublicCard } from './PublicCard';
//import { TimerCard } from '../countdownLink/TimerCard';

export const CountdownPublic = () => {
  const dataReceived = useLocation();

  console.log("dataReceived", dataReceived)
  //const { key } = dataReceived.state.key;
  const { title } = dataReceived.state.title;
  const { untilDate } = dataReceived.state.untilDate;

  //console.log(key, title, untilDate)


  //const [timerCards, setTimerCards] = useState([]);

  //useEffect((newCard) => {
  //  setTimerCards(prevCards => [
  //    ...prevCards,
  //    newCard
  //  ])
  //  //return () => {
  //  //}
  //}, [])

  const [publicTimerCards, setPublicTimerCards] = useState([])

  useEffect(() => {
    const addToPublic = (title, untilDate, id) => {
      setPublicTimerCards(prevCards => [
        ...prevCards,
        {
          title: title,
          untilDate: untilDate,
          id: id
        }
      ])
    }
    addToPublic()
    //return () => {
    //  addToPublic()
    //}
  }, [])
  console.log("publicTimerCards", publicTimerCards)


  return (
    <div>
      {publicTimerCards.map(card => (
        <div className="publicCard">
          <PublicCard title={title} untilDate={untilDate} />
        </div>
      ))}
      {/*<TimerCard title={title} timerComponents={timerComponents} year={year} month={month} day={day} hour={hour} minute={minute} second={second} />*/}
    </div>
  )
}

