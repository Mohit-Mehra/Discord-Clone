import React from 'react'
import { LoginAPI } from "../api/AuthAPI";
import '../Sass/LoginComponent.scss'

const LoginComponents = () => {
  return (
    <div>
      <h1>LoginComponents</h1>
      <button className='login-btn'>Log in</button>
    </div>
  );
}

export default LoginComponents