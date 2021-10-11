import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth, handleUserProfile } from '../config/utils';
import Header from './Layout/Header/Header';
// pages
import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(async (userData) => {
      const handled = await handleUserProfile(userData);
      if (handled) {
        setUser({ ...userData });
      }
    });
  }, [auth]);
  return (
    <Router>
      <React.Fragment>
        <Header user={user} />
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
