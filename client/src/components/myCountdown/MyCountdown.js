import React, { useEffect } from 'react';
import './MyCountdown.css';
import axios from '../../axios';
import { useState } from 'react';
import { useStateValue } from '../../context/StateProvider';
import { TimerCard } from '../countdownLink/TimerCard';
import { EachPublicCard } from '../countdownPublic/EachPublicCard';
import { useLocation } from "react-router-dom";
import Loader from 'react-loader-spinner';

export const MyCountdown = () => {
  //console.log("yuyuyuyuyu", title, untilDate)
  const [timerCards, setTimerCards] = useState([])
  const [info, dispatch] = useStateValue();
  const { timerId, title, deleted } = info.countdownInfo;


  const { userToken } = info.userInfo;
  console.log("infooooo", userToken)
  const { userEmail } = info.userInfo;



  const data = useLocation();
  console.log("jijij", data)

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/countdown/public');
      setTimerCards(req.data);
    }
    fetchData();
    //return () => fetchData();
  }, [deleted])

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

  //const reversedPersonalTimerCards = timerCards.reverse();

  //const personalTimerCards = timerCards.reverse().filter(card => card.userEmail === userEmail && card.personalCountdown === true)
  //const personalTimerCards = reversedPersonalTimerCards.filter(card => card.userEmail === userEmail && card.personalCountdown === true)
  const personalTimerCards = timerCards.filter(card => card.userEmail === userEmail && card.personalCountdown === true)

  console.log("guagua", personalTimerCards)

  let eachTimer = personalTimerCards.map(card => {
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

  console.log("eachTimer", eachTimer)
  console.log("timerCards", timerCards)

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

  const randomLoader = Math.floor(Math.random() * 3) + 1;

  const type = ["ThreeDots", "Grid", "Oval"]

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
    <>
      {timerCards.loading
        ?
        <div className="publicCard__loading">
          <Loader
            //type="ThreeDots"
            //type="Grid"
            //type="Oval"
            type={type[randomLoader - 1]}
            color="#84b99b"
            height={63}
            width={63}
          //timeout={3000} //3 secs
          />
          <p className="publicCard__loadingText">Loading...</p>
        </div>
        :
        <div className="cardContainer">
          {personalTimerCards.reverse().map((card, index) =>
            <EachPublicCard
              //className="eachPublicCard"
              id={card._id}
              title={card.title}
              days={card.timeLeft.days}
              hours={card.timeLeft.hours}
              minutes={card.timeLeft.minutes}
              seconds={card.timeLeft.seconds}
              year={card.toDateYear}
              month={card.toDateMonth}
              day={card.toDateDay}
              hour={card.toDateHour}
              minute={card.toDateMinute}
              second={card.toDateSecond}
              index={index}
            />
          )}
        </div>
      }
    </>
  )
}
