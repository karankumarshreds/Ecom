import React from 'react';
import Category from '../components/Category';

const HomePage = () => {
  return (
    <div className="HomePage">
      <div style={{ textAlign: 'center' }}>
        <h1>Quality Is remembered long after price is forgotten</h1>
      </div>
      <Category />
    </div>
  );
};

export default HomePage;
