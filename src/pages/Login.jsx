import React from 'react';
import 'styles/Login.scss';
import logo from 'logos/logo_yard_sale.svg'

const Login = () => {
  return (
    <div className="login">
      <div className="form-container border-test">
        <img src={logo} alt="logo" className="logo" />

        <form action="/" className="form">
          <label htmlFor="email" className="label">Email address</label>
          <input type="email" name="email" id="email" placeholder="juan@example.com" className="input input-email" />

          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" id="password" placeholder="*********"
            className="input input-password" />

          <input type="submit" value="Log in" className="primary-button login-button" />
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button">Sign up</button>
      </div >
    </div >
  );
}

export { Login }