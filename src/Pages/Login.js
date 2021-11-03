import React from 'react';
import '../styles/Pages/login.css';


class Signup extends React.Component {
  state= {
    user : {
      email: "",
      phone_number: "",
      password: "",
      username: ''
    },
    submitted: false
  }


  render() { 
    const onChangeHandler = (e) =>{
      console.log(e.target.value)
    }

    const onSubmitHandle = (e) =>{
      
      e.preventDefault();
    }

    const { user, submitted } = this.state;
     
    return <div className="login"> 
        <div className="login__box">
        <div className="row" style={{margin : 0}}>
          <div className="col-lg-5 col-md-5 col-xs-12">
            <div className="login_tag">
              <h2>
                  Welcome back!
              </h2>
              <p>the most and common thing used to be very efficiient and go to work out to be tracked.  </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-xs-12">
            <div className="w-full ">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {onSubmitHandle}>
                <div className="mb-4">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" 
                    type="text" 
                    placeholder="Email"
                    onChange= {onChangeHandler}
                  />
                </div>
                  <p className="text-red-500 text-xs italic">
                    {submitted && !user.email &&
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                  }
                  </p>
                <div className="mb-4">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Username"
                    onChange= {onChangeHandler}
                  />
                </div>
                <div className="mb-4">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="phone_number" 
                    type="text" 
                    placeholder="Phone Number"
                    onChange= {onChangeHandler}
                  />
                </div>
                <div className="mb-6">
                  <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="******************"
                    onChange= {onChangeHandler}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/password">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
              </p>
            </div>
          </div>
        </div> 
        </div>
      </div>
  }
}
 
export default Signup;

