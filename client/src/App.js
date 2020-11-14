import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeRight } from './components/Home/HomeRight/HomeRight';
import { HomeLeft } from './components/Home/HomeLeft';
import { Countdown } from './components/countdownLink/Countdown';
import { CountdownPublic } from './components/countdownPublic/CountdownPublic';
import { Login } from './components/login/Login';
import { PublicCard } from './components/countdownPublic/PublicCard';
import { useStateValue } from './context/StateProvider';
import { MyCountdown } from './components/myCountdown/MyCountdown';
import { LinkPastedCountdown } from './components/linkPastedCountdown/LinkPastedCountdown';

function App() {
  const [state, dispatch] = useStateValue();
  const { user } = state.userInfo
  const { userName } = state.userInfo
  console.log("nulloruser", user, state)

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>

          {/*Homepage*/}
          <Route exact path="/">
            <div className="home">
              <HomeLeft />
              <HomeRight />
            </div>
          </Route>

          {/*After an user creates a countdown*/}
          {/*<Route exact path="/countdown/:countdownId/:selectedDate">*/}
          <Route exact path="/countdown/:timezone/:selectedDate">
            <Countdown />
          </Route>

          {/*After an user saves a public countdown*/}
          {/*<Route exact path="/public">
            <div className="home">
              <CountdownPublic />
            </div>
          </Route>*/}
          <Route exact path="/countdownSquare">
            <div className="countdownSquare">
              <PublicCard />
            </div>
          </Route>
          {/*<Route path="/user/:userId">
            {!user
              ?
              <div className="loginPage">
                <Login />
              </div>
              :
              <div className="countdownSquare">
                <MyCountdown />
              </div>}
          </Route>*/}

          {/*After a user saves a personal countdown*/}
          {/*{!user
            ?
            <Route path="/user/:timerId">
              <div className="loginPage">
                <Login />
              </div>
            </Route>
            :
            <Route path="/user/:timerId">
              <div className="countdownSquare">
                <MyCountdown />
              </div>
            </Route>}*/}
          <Route path="/user/:timerId">
            {!user
              ?
              (<div className="loginPage">
                <Login />
              </div>)
              :
              (<div className="countdownSquare">
                <MyCountdown />
              </div>)
            }
            {/*{!user
              ?
              (<div className="loginPage">
                <Login />
              </div>)
              :
              <Redirect exact to={`/user/${userName}`} />
            }*/}
          </Route>
          {/*When a user clicks My Countdown button */}
          {/*{!user
            ?
            <Route path="/login">
              <div className="loginPage">
                <Login />
              </div>
            </Route>
            :
            <Route path="/user/:userName">
              <div className="countdownSquare">
                <MyCountdown />
              </div>
            </Route>}*/}

          <Route exact path="/login">
            {!user ?
              (<div className="loginPage">
                <Login />
              </div>)
              :
              <Redirect exact to={`/user/${userName}`} />
            }
          </Route>

          {/*<Redirect exact to="/user/:userName" />*/}


          {/*<Route exact path="/user/:userName">
            <div className="countdownSquare">
              <MyCountdown />
            </div>
          </Route>*/}
          {/*<Route exact path="/user/:userName">*/}
          <Route exact path={`/user/${userName}`}>
            {user ?
              (<div className="countdownSquare">
                <MyCountdown />
              </div>)
              :
              <Redirect exact to="/login" />
            }
          </Route>

          <Route exact path="/countdown/:timezone/:selectedDate/:title/square">
            <LinkPastedCountdown />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
