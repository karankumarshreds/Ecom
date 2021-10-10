import React from 'react';
import { signinWithGoogle } from '../../../../config/utils';

const Signin = () => {
  return (
    <div className="Login">
      <h2>LOGIN</h2>
      <button onClick={signinWithGoogle}>Signin With Google</button>
    </div>
  );
};

export default Signin;
