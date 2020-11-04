import React from 'react';
import { DateTimePicker } from './DateTimePicker';
import './UserInput.css';

export const UserInput = () => {
  return (
    <div className="useInput">

      <div className="backgroundImg" >
        <img className="hourglass" src="/images/hourglass.jpg" alt="" />
      </div>

      <div className="dateTimePicker">
        <form action="">
          <DateTimePicker />
          {/*<input type="text" />*/}
        </form>
      </div>

    </div>
  )
}
