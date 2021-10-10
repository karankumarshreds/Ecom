import React from 'react';
import Category from '../components/Category/Category';
import Logo from '../assets/logo.png';
const HomePage = () => {
  return (
    <div className="HomePage">
      <br />
      <br />
      <br />
      <div style={{ textAlign: 'center', maxWidth: 750, margin: 'auto' }}>
        <img style={{ width: 200 }} src={Logo} />
        <div style={{ fontSize: 40, margin: 10, fontWeight: 600 }}>
          Quality Is remembered long after price is forgotten
        </div>
      </div>
      <Category />
    </div>
  );
};

export default HomePage;
