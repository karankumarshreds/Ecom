import React from 'react';

import Header from './Header/Header';
// pages
import HomePage from '../pages/HomePage';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <HomePage />
      </div>
    </React.Fragment>
  );
};

export default App;
