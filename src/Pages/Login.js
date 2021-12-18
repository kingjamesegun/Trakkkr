import React from 'react';
import '../styles/Pages/login.css';
import IlluSvg from '../assets/illsvg.svg'
import axios from 'axios';
import { Redirect } from 'react-router'


class Signup extends React.Component {
  state= {
      password: "",
      username: '',
      redirect: false,
      success: false
  }

 
  render() { 
    const onChangeHandler = (field, e) =>{
      console.log(e.target.value)
      this.setState({
        ...this.state,
        [field] : e.target.value
      })
    }

    const onSubmitHandle = async (e) =>{
      e.preventDefault();
      console.log("submitted");
      const data = {
        username: this.state.username,
        password: this.state.password
      }
      console.log(data)

      const res = await axios.post("https://trakkkr.herokuapp.com/user/login/", data)
      .catch((err)=>{
        console.log(err);
      })

      if(res){
        this.setState({redirect: true, success: true});
        const {token} = res.data;
        localStorage.setItem('token', token);
        localStorage.getItem('token');
      }
    }

    const {redirect} = this.state;

    if(redirect){
      return <Redirect to="/product"/>
    }
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
            <div className="login__ill">
              <img src={IlluSvg} alt=""/>
            </div>

          </div>
          <div className="col-lg-7 col-md-7 col-xs-12">
            <div className="w-full ">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {onSubmitHandle}>
                {this.state.success ?
              <div className='font-sans italic text-xs text-green-500 pb-2'>You're successfully logged in</div>
              : <div></div>
              }
                <div className="mb-4">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange= {(e) => onChangeHandler("username", e)}
                  />
                </div>
                <div className="mb-6">
                  {console.log(this.state)}
                  <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="******************"
                    value={this.state.password}
                    name="password"
                    onChange= {(e) => onChangeHandler("password", e)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/password">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs mt-5">
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

