import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { useStateValue } from '../../context/StateProvider';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../context/Reducer';
import { useLocation } from "react-router-dom";
import axios from '../../axios';


export const Login = () => {

  const data = useLocation();
  //console.log("ftferoufbvhgb", data)
  const timerId = data.state.timerId.id
  //console.log(timerId)

  const [{ }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
        const patchData = async () => await axios.patch(`/user/${timerId}`, { token: token })
          .then(response => console.log(response))
          .catch(error => console.log("error", error));
        patchData();
        console.log("updated user token!")

        console.log("userrrrr", result.user)


        const dispatchUserInfo = () => {
          dispatch(
            {
              type: actionTypes.SET_USER,
              user: result.user,
              userToken: token,
            },
            //{
            //  type: actionTypes.SET_TOKEN,
            //  userToken: token,
            //},
          )
        }
        dispatchUserInfo()
      }

      )
      .catch(error => alert(error.message));
  }

  return (
    //<div className="login">
    <div className="login__container">
      <div className="backgroundImg" >
        <img className="loginImg" src="/images/hourglass.jpg" alt="" />
      </div>
      <div className="login__text">
        <p>Sign in to My Countdown</p>
      </div>
      <Button className="login__button" type="submit" onClick={signIn}>Sign in with Google</Button>
    </div>
    //</div>
  )
}
