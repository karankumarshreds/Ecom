import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <img style={{ width: 60 }} src={logo} />
        </div>
      </div>
    </header>
  );
};

export default Header;
