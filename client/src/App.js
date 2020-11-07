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

function App() {
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
            <div>
              <CountdownPublic />
            </div>
          </Route>
          <Route exact path="/countdownSquare">
            <div>
              <PublicCard />
            </div>
          </Route>
          <Route path="/user/:userId">
            <Login />
            {/*<UserRecord />*/}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
