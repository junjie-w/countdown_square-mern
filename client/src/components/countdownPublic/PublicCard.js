import React, { useEffect } from 'react';
import './PublicCard.css';
import axios from '../../axios';
import { useState } from 'react';
import { useStateValue } from '../../context/StateProvider';
import { TimerCard } from '../countdownLink/TimerCard';
import { EachPublicCard } from './EachPublicCard';


export const PublicCard = () => {
  //console.log("yuyuyuyuyu", title, untilDate)
  const [timerCards, setTimerCards] = useState([])
  const [info, dispatch] = useStateValue();
  const { timerId, title, deleted } = info.countdownInfo;
  //const [deleted, setDeleted] = useState(false)

  //const deleteTimer = async () => {
  //  console.log(">>>>>>", timerId)
  //  await axios.delete(`/timer/${timerId}`)
  //    .then(response => console.log(response))
  //    .catch(error => console.log("error", error));
  //  //window.location.reload()
  //  setDeleted(true)
  //}

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/countdown/public');
      setTimerCards(req.data);
    }
    fetchData();
    return () => fetchData();
  }, [deleted])

  //const [justLoaded, setJustLoaded] = useState(false);

  //useEffect(() => {
  //  setJustLoaded(true)
  //  const timer = setTimeout(setJustLoaded(false), 100)
  //  return () => {
  //    clearTimeout()
  //  }
  //}, [])

  console.log("timerCards", timerCards);
  console.log("info", info)
  //console.log(selectedDate, title)

  //const year = selectedDate.getUTCFullYear();
  //const month = selectedDate.getUTCMonth() + 1;
  //const day = selectedDate.getUTCDate();
  //const hour = selectedDate.getUTCHours();
  //const minute = selectedDate.getUTCMinutes();
  //const second = selectedDate.getUTCSeconds();



  //const { days, hours, minutes, seconds } = timeLeft
  //console.log("timercards", timerCards)

  //const reversedTimerCards = timerCards.reverse()
  //console.log("reversed", reversedTimerCards)
  const publicTimerCards = timerCards.filter(card => card.publicCountdown === true)
  console.log("lalala", publicTimerCards)

  let eachTimer = publicTimerCards.map(card => {
    //console.log("card?", new Date(card.selectedDate));
    //console.log("new", new Date())
    const selectedDate = new Date(card.selectedDate);
    let difference = +selectedDate - +new Date()
    //console.log("d", difference)
    let timeLeftEach = {};
    if (difference > 0) {
      timeLeftEach = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    } else {
      timeLeftEach = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }

    return card.timeLeft = timeLeftEach
    //   timerCards.map(card => {
    //  prev => ({
    //    ...prev,
    //    timeLeft: timeLeft
    //  }

    //  )

    //})

    //const [UpdatedCards, setUpdatedCards] = useState(timerCards)

  })

  console.log("ppppppppppp", eachTimer)
  console.log("new222", timerCards)

  const [timeLeft, setTimeLeft] = useState(eachTimer)

  console.log("...oo", eachTimer)


  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(eachTimer);
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  })



  console.log("timeleft", timeLeft)



  //const timerComponents = timeLeft.map(i => Object.keys(i).forEach(interval => {
  //  let timerComponent = []
  //  if (!timeLeft[interval]) {
  //    return 0;
  //  }
  //  timerComponents.push(
  //    <span>
  //      {timeLeft[interval]} {interval} {" "}
  //    </span>
  //  )
  //  return timerComponent
  //})
  //)

  //console.log("mer", timerComponents)


  //const { title, toDateYear, toDateMonth, toDateDay, toDateHour, toDateMinute, toDateSecond } = timerCards

  return (
    <div className="cardContainer">
      {publicTimerCards.reverse().map((card, index) =>
        <EachPublicCard
          //className="eachPublicCard"
          id={card._id}
          title={card.title}
          days={card.timeLeft.days}
          hours={card.timeLeft.days}
          minutes={card.timeLeft.minutes}
          seconds={card.timeLeft.seconds}
          year={card.toDateYear}
          month={card.toDateMonth}
          day={card.toDateDay}
          hour={card.toDateHour}
          minute={card.toDateMinute}
          second={card.toDateSecond}
          timerId={card.timerId}
          index={index}
        //deleteTimer={() => deleteTimer(timerId)}
        />
      )}
    </div>
  )
}
