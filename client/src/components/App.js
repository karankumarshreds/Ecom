import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
// pages
import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegistrationPage';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegistrationPage} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
