import React from 'react';
import './HomeButton.css';
import Button from '@material-ui/core/Button';

export const HomeButton = ({ text }) => {
  return (
    <Button type="submit" className="button" variant="contained" >
      {text}
    </Button>
  )
}
