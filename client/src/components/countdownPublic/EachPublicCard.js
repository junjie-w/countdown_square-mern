import React from 'react';
import './EachPublicCard.css'

export const EachPublicCard = ({ title, days, hours, minutes, seconds, year, month, day, hour, minute, second }) => {
  return (
    <div className="card">
      <h3>{title} Countdown</h3>
      <p> {days} days {hours} hours {minutes} minutes {seconds} seconds </p>
      <p>until {year}.{month}.{day} {hour}:{minute}:{second}   </p>
    </div>
  )
}
