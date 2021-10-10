import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = ({ history }) => {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img style={{ width: ' 100%' }} src={logo} />
          </Link>
        </div>
        <div className="buttons">
          <Link to="/register">REGISTER</Link>
          <Link to="/register">LOGIN</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
