import React, { useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Message from '../assets/LOGIN.svg'
import { useFormik } from 'formik';
import '../styles/Pages/login.css';
import * as yup from 'yup';
import axios from 'axios';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types'

// const PASSWORD_REGEX = /^(?=.\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  username: yup.string().required("Username is reqired."),
  password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
 
})



function Login({setToken}) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values)=>{
    alert(JSON.stringify(values));
    const {...data} = values;
    alert(JSON.stringify(data))

    const response = await axios.post("https://trakkkr.herokuapp.com/user/login/", values)
      .catch(err=>{
        if(err && err.response)
          console.log("Error: ", err.response.data);
          setError(err.response.data);
        
      })
      if(response){ 
        sessionStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        Cookies.set("user", response.data.token);

        alert(JSON.stringify(response));
        // setSuccess(response.data.status_message);

      }
  }
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })
  // console.log("Errors: ", formik.errors);
    
    return (
      <div className="login">
            <h1>Welcome Back !</h1>
      
        <div className="row container">
            <div className="col-lg-5 col-md-5 col-xs-12"> 
            <div className="signup__fieldSuccess">
            </div>
              <form  noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                  { error && !success ? <div className="signup__fieldError">You have not signed up.</div> : ""}
                
                <h2>Sign In</h2>
                <div className="signup__fieldContainer">
                  <TextField 
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    id="standard-basic" 
                    label="Username" 
                    className="signup__email"
                    onBlur ={formik.handleBlur}
                  />
                  <span className="signup__fieldError">
                    {formik.touched.username && formik.errors.username ? formik.errors.username: ""}
                  </span>
                </div>

                <div className="signup__fieldContainer">
                  <TextField
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onBlur ={formik.handleBlur}
                    className="signup__password"
                  />
                  <span className="signup__fieldError">
                    {formik.touched.password && formik.errors.password ? formik.errors.password: ""}
                  </span>
                </div>
                <Button 
                  type="submit" 
                  className="signup__btn"
                  >
                    Sign Up
                  </Button>
              </form>
            </div>
            <div className="col-lg-7 col-md-7 col-xs-12">
              <div className="signup__side">
                <img
                  src={Message}
                  className="signup__img"
                  alt="message"
                />
              </div>
            </div>

        </div>

      </div>
            
    )
}

export default Login;

Login.propTypes= {
  setToken: PropTypes.func.isRequired
}

