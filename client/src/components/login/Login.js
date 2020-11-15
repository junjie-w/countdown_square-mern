import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { useStateValue } from '../../context/StateProvider';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../context/Reducer';
import { useLocation } from "react-router-dom";
import axios from '../../axios';


export const Login = () => {

  //const useData = useLocation();
  //const timerId = useData.state.timerId.id

  //console.log("uuuuu", timerId)


  const [state, dispatch] = useStateValue();


  const { timerId } = state.countdownInfo

  console.log("peacock", state)

  //const { timerId } = state.countdownInfo;
  //console.log("ddd", timerId)

  //const [data, setData] = useState(null);
  //const [timerId, setTimerId] = useState("")

  //const checkData = () => {
  //  if (useData) {
  //    setData(useData)
  //    setTimerId(data.state.timerId.id);
  //  }
  //}

  //checkData()

  //console.log("ftferoufbvhgb", data)
  //console.log(timerId)

  //const [loginUser, setUser] = useState({})
  //const [userToken, setUserToken] = useState("")
  //const [userName, setUserName] = useState("")

  //console.log("dispatch", loginUser, userToken, userName)

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log("tiger", result)
        const token = result.credential.accessToken;
        //setUserToken(token)
        const loginUser = result.user;
        console.log("useruser", result.user)
        //setUser(loginUser);
        const displayName = result.user.displayName

        const userEmail = result.user.email
        //setUserName(displayName)
        console.log("kkkkkk", token, displayName, loginUser, userEmail)
        if (timerId) {
          const patchData = async () => await axios.patch(`/user/${timerId}`, { token: token, userName: displayName, userEmail: userEmail })
            .then(response => console.log(response))
            .catch(error => console.log("error", error));
          patchData();
        }

        console.log("updated user token!")

        console.log("userrrrr", result.user)

        //const dispatchInfo = () => {
        dispatch(
          {
            type: actionTypes.SET_USER,
            userInfo: {
              user: loginUser,
              userToken: token,
              userName: displayName,
              userEmail: userEmail,
            }
          },
          //{
          //  type: actionTypes.SET_TOKEN,
          //  userToken: token,
          //},
        )
        //}
        console.log("11222www", timerId)

        //dispatchInfo()

      }

      )
      .catch(error => alert(error.message));
  }






  return (
    //<div className="login">
    <div className="login__container">
      <div className="backgroundImg" >
        <img className="loginImg" src="images/hourglass.jpg" alt="" />
      </div>
      <div className="login__text">
        <p>Sign in to My Countdown</p>
      </div>
      <Button className="login__button" type="submit" onClick={signIn}>Sign in with Google</Button>
    </div>
    //</div>
  )
}
