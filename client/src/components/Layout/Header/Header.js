import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../../config/utils';
import logo from '../../../assets/logo.png';

const Header = ({ user }) => {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img style={{ width: ' 100%' }} src={logo} />
          </Link>
        </div>
        {!user ? (
          <div className="buttons">
            <Link to="/register">REGISTER</Link>
            <Link to="/login">LOGIN</Link>
          </div>
        ) : (
          <div className="buttons">
            <Link to="#">👋 Hi {user.username.split(' ')[0]}</Link>
            <Link to="#" onClick={() => auth.signOut()}>
              LOGOUT
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
