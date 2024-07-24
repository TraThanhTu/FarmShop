import React, { useState } from 'react';
import './CSS/LoginSignUpPage.css';
import axios from 'axios';
import { url_backend } from '../services';
const LoginSignUpPage = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log('login', formData);

    const resLogin = await axios.post(`${url_backend}/login`, formData);
    console.log(resLogin);
    if (resLogin.data.success) {
      localStorage.setItem('auth-token', resLogin.data.token);
      window.location.replace('/');
    } else {
      alert(resLogin.data.errors);
    }
  };
  const signUp = async () => {
    console.log('sign', formData);

    const resSignUp = await axios.post(`${url_backend}/signup`, formData);
    console.log(resSignUp.data);
    if (resSignUp.data.success) {
      localStorage.setItem('auth-token', resSignUp.data.token);
      window.location.replace('/');
    } else {
      alert(resSignUp.data.errors);
    }
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'Sign Up' ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === 'Login' ? login() : signUp();
          }}
        >
          Continue
        </button>
        {state === 'Sign Up' ? (
          <p className="loginsignup-login">
            Already have an account?{' '}
            <span
              onClick={() => {
                setState('Login');
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{' '}
            <span
              onClick={() => {
                setState('Sign Up');
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
