import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="home">
              <HomeLeft />
              <HomeRight />
            </div>
          </Route>
          <Route exact path="/countdown/:countdownId">
            <Countdown />
          </Route>
          <Route exact path="/public">
            <div className="home">
              <CountdownPublic />
            </div>
          </Route>
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
          {!user
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
            </Route>}
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
