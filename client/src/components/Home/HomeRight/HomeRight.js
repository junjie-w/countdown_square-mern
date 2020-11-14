import React, { useEffect, useState } from 'react';
import './HomeRight.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
//import { Countdown } from '../../countdownLink/Countdown';
import { v4 as uuidv4 } from 'uuid';
import { useStateValue } from '../../../context/StateProvider';
import { actionTypes } from '../../../context/Reducer';
import AlarmIcon from '@material-ui/icons/Alarm';

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(137, 187, 159)',
      light: 'rgb(219, 190, 190)',
      dark: '#68b0ab',
    },
    secondary: {
      main: '#f7f2e7',
    },
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const HomeRight = () => {
  const formRef = React.useRef();
  const key = uuidv4();


  const [{ }, dispatch] = useStateValue();

  const makeData = () => {
    dispatch({
      //  type: actionTypes.SET_TITLE,
      //  title: title,
      //}, {
      //  type: actionTypes.SET_DATE,
      //  selectedDate: selectedDate,
      type: actionTypes.SET_INFO,
      countdownInfo: {
        //selectedDate: selectedDate,
        title: title,
        timerId: key
      }
    })
  }


  const classes = useStyles();

  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log("llllll", selectedDate)

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;
  const day = selectedDate.getDate();
  const hour = selectedDate.getHours();
  const minute = selectedDate.getMinutes();
  const second = selectedDate.getSeconds();
  const toDate = {
    year,
    month,
    day,
    hour,
    minute,
    second
  }

  const selectedDateString = selectedDate.toString();
  const timezoneString = selectedDateString.substr(24, 24).substr(1, 3)
  console.log("timezone!!!", timezoneString)

  //console.log("butterfly", selectedDateString)

  //const selectedDateToString = `${year} ${month} ${day} ${hour} ${minute} ${second} ${timezoneString}`

  //console.log("tostring", selectedDateToString)


  const dateMilliseconds = new Date(selectedDate).getTime();
  console.log("milliseconds", dateMilliseconds)

  //const calculateTimeLeft = () => {
  //  let difference = +selectedDate - +new Date()
  //  let timeLeft = {};
  //  if (difference > 0) {
  //    timeLeft = {
  //      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //      minutes: Math.floor((difference / 1000 / 60) % 60),
  //      seconds: Math.floor((difference / 1000) % 60)
  //    }
  //  }
  //  return timeLeft;
  //}

  //const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  //useEffect(() => {
  //  const timer = setTimeout(() => {
  //    setTimeLeft(calculateTimeLeft());
  //  }, 1000);

  //  return () => clearTimeout(timer)
  //});


  //const [timerComponents, setTimerComponents] = useState([])

  //Object.keys(timeLeft).forEach((interval) => {
  //  if (!timeLeft[interval]) {
  //    return;
  //  }
  //  //setTimerComponents(timerComponents.push(
  //  //  <span>
  //  //    {timeLeft[interval]} {interval} {" "}
  //  //  </span>
  //  //))
  //  setTimerComponents(prev => [
  //    ...prev,
  //    <span>
  //      {timeLeft[interval]} {interval} {" "}
  //    </span>
  //  ])
  //});

  //console.log(timerComponents)

  //const [sendData, setSendData] = useState(false)

  //const sendData = e => {
  //e.preventDefault();
  //const year = selectedDate.getUTCFullYear();
  //const month = selectedDate.getUTCMonth() + 1;
  //const day = selectedDate.getUTCDate();
  //const hour = selectedDate.getUTCHours();
  //const minute = selectedDate.getUTCMinutes();
  //const second = selectedDate.getUTCSeconds();

  //  setTitle(input)
  //  //console.log(timeLeft)
  //}

  useEffect(() => {

    setTitle(input)

  }, [input])

  //console.log("title >>>", title);


  return (
    <div className="home_right">
      <form className={`form ${classes.root}`} noValidate autoComplete="off" ref={formRef}>
        <TextField
          onChange={e => setInput(e.target.value)}
          value={input}
          className="input"
          id="filled-basic"
          label="I want to create a countdown for..."
          variant="filled"
        //required
        />
        <div className="dateTimePicker">
          <MuiThemeProvider theme={customTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <div className="dateTimePicker">
                  <div className="datePicker">
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Pick a date"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </div>
                  <div className="timePicker">
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Pick a time"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                      keyboardIcon={<AlarmIcon />}
                    />
                  </div>
                </div>
              </Grid>
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
        </div>
        {/*<Countdown title={title} selectedDate={selectedDate} />*/}
        <Link to={{
          //pathname: `/countdown/${selectedDateToString}`,
          pathname: `/countdown/${timezoneString}/${dateMilliseconds}`,
          state: {
            key: key,
            id: key,
            title: { title },
            selectedDate: { selectedDate }
          }
        }}>
          {/*<Button onClick={setSendData(true)} type="submit" className="button" variant="contained" >*/}
          <Button onClick={() => makeData(selectedDate, title)} type="submit" className="homeRight__button" variant="contained" >
            Create
        </Button>
        </Link>
      </form >
    </div >
  )
}
