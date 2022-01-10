import React, { useState, FormEvent, ChangeEvent } from 'react';
import '../styles/Pages/signup.css';
import Axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [success, setSuccess] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone_number(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onSubmitHandle = async (e: FormEvent<HTMLFormElement>) => {
    const data = {
      email,
      phone_number,
      password,
      username,
    };

    e.preventDefault();
    console.log('submitted');
    const res = await Axios.post('https://trakkkr.herokuapp.com/user/register/', data);
    try {
      if (res) {
        setSuccess(res.data.status_message);
        setRedirect(true);
      }
    } catch (error) {
      setFailure(true);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register">
      <div className="register__box">
        <div className="row" style={{ margin: 0 }}>
          <div className="col-lg-5 col-md-5 col-xs-12">
            <div className="signup_tag">
              <h2 className="font-sans text-5xl">SignUp</h2>
              <p className="font-mono tracking-wide">
                The most and common thing used to be very efficiient and go to work out to be tracked.{' '}
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-xs-12">
            <div className="w-full ">
              <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmitHandle}>
                <div className="font-sans italic text-xs text-green-500 pb-2">{success}</div>
                {failure ? (
                  <div className="font-sans italic text-xs text-red-500 pb-2">Operation Failed. Pls try again</div>
                ) : (
                  <div></div>
                )}
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone_number"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone_number}
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Must be 8 more than 8 char"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="/password"
                  >
                    Forgot Password?
                  </a>
                </div>
                <p className="text-center text-gray-500 text-xs mt-5">
                  Already have an account?
                  <Link to="/"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// class Signup extends React.Component {
//   state= {
//       email: "",
//       phone_number: "",
//       password: "",
//       username: '',
//       success: "",
//       redirect: false,
//       failure: false
//   }

//   render() {
//     const onChangeHandler = (field, e) =>{
//       this.setState({
//         ...this.state,
//         [field]: e.target.value
//       })
//     }

//     const { user, submitted } = this.state;

//     const {redirect} = this.state;

//

//     return
//   }
// }

export default Signup;
