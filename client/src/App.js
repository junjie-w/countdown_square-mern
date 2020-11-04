import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { UserInput } from './components/UserInput';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <UserInput />
            {/*<CountdownTimer />*/}
          </Route>

          <Route path="/countdown/:user">
            {/*<UserRecord />*/}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
