import React from 'react';
import '../styles/Pages/signup.css';
import { connect } from 'react-redux';
import {register} from '../redux/action/userAction';
import Axios from "axios";
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
  state= {
      email: "",
      phone_number: "",
      password: "",
      username: '',
      success: "",
      redirect: false,
      failure: false
  }
  componentDidMount(){
    // call the action when the page loads
    this.props.register();
}



  render() { 
    const onChangeHandler = (field, e) =>{
      this.setState({
        ...this.state,
        [field]: e.target.value
      })
    }
    

    const { user, submitted } = this.state;
     

    const onSubmitHandle = async (e) =>{
      const data = {
        email: this.state.email,
        phone_number: this.state.phone_number,
        password: this.state.password,
        username: this.state.username
      };

      e.preventDefault();
      console.log("submitted");
      const res = await Axios.post("https://trakkkr.herokuapp.com/user/register/", data)
      .catch((err)=>{
        this.setState({failure: true});
      })

      if(res){
        this.setState({success: res.data.status_message, redirect: true});
      }

    }

    const {redirect} = this.state;

    if(redirect){
      return <Redirect to="/"/>
    }
    
    return <div className="register"> 
        <div className="register__box">
        <div className="row" style={{margin : 0}}>
          <div className="col-lg-5 col-md-5 col-xs-12">
            <div className="signup_tag">
              <h2>
                  SignUp
              </h2>
              <p>the most and common thing used to be very efficiient and go to work out to be tracked.  </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-xs-12">
            <div className="w-full ">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit = {onSubmitHandle}>
              <div className='font-sans italic text-xs text-green-500 pb-2'>{this.state.success}</div>
              {this.state.failure?<div className='font-sans italic text-xs text-red-500 pb-2'>Operation Failed. Pls try again</div>: <div></div>}
                <div className="mb-4">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" 
                    type="text" 
                    name='email'
                    placeholder="Email"
                    value={this.state.email}
                    onChange= {(e) => onChangeHandler('email', e)}
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
                    name='username'
                    placeholder="Username"
                    value= {this.state.username}
                    onChange= {(e) => onChangeHandler('username', e)}
                  />
                </div>
                <div className="mb-4">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="phone_number" 
                    type="text" 
                    name='phone'
                    placeholder="Phone Number"
                    value= {this.state.phone_number}
                    onChange= {(e) => onChangeHandler('phone_number', e)}
                  />
                </div>
                <div className="mb-6">
                  <input 
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    name='password'
                    placeholder="Must be 8 more than 8 char"
                    value= {this.state.password}
                    onChange= {(e) => onChangeHandler('password', e)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/password">
                    Forgot Password?
                  </a>
                </div>
              <p className="text-center text-gray-500 text-xs mt-5">
                Already have an account?  
                <Link to='/'> Sign In</Link>
              </p>
              </form>
            </div>
          </div>
        </div> 
        </div>
      </div>
  }
}

const mapStateToProps =(state)=>{
  return {user: state.user}
}
 
export default connect(mapStateToProps, {register})(Signup);

