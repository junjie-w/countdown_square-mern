import React, { useState } from 'react';
import './DateTimePicker.css';
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

export const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <MuiThemeProvider theme={customTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around" className="dateTimePicker">
          {/*<KeyboardDatePicker
            className="picker"
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />*/}
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}
