import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/Pages/login.css';
import IlluSvg from '../assets/illsvg.svg';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmitHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };

    const res = await axios.post('https://trakkkr.herokuapp.com/user/login/', data).catch((err) => {});

    if (res) {
      setSuccess(true);
      const { token } = res.data;
      localStorage.setItem('token', token);
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Redirect to="/product" />;
  }
  return (
    <div className="login">
      <div className="login__box">
        <div className="row" style={{ margin: 0 }}>
          <div className="col-lg-5 col-md-5 col-xs-12">
            <div className="login_tag">
              <h2 className='font-sans text-5xl '>Welcome back!</h2>
              <p className='font-mono tracking-wide'>The most and common thing used to be very efficient and go to work out to be tracked. </p>
            </div>
            <div className="login__ill">
              <img src={IlluSvg} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-xs-12">
            <div className="w-full ">
              <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmitHandle}>
                {success ? (
                  <div className="font-sans italic text-xs text-green-500 pb-2">You're successfully logged in</div>
                ) : (
                  <div></div>
                )}
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    name="password"
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="/password"
                  >
                    Forgot Password?
                  </a>
                </div>
                <p className="text-center text-gray-500 text-xs mt-5">
                  Not yet registered?
                  <Link to="/register"> Sign Up</Link>
                </p>
              </form>
              <p className="text-center text-gray-500 text-xs mt-5">&copy;2020 Acme Corp. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
