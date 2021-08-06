import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { TextField } from '@material-ui/core';
import '../styles/Pages/signup.css';
import Button from '@material-ui/core/Button';
import {ReactComponent as Message} from '../assets/message.svg'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';



// VALIDATION
const validationSchema = yup.object({
  username: yup.string().min(3, "Password is too short - should be 8 chars minimum.").required("Username is reqired."),
  phone_number: yup.number(),
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: yup.string().when("password", {
    is: val=> (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")], "Password does not match")
  })
})


function SignUp() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values)=>{
    const {confirmPassword, ...data} = values;

    const response = await axios.post("https://trakkkr.herokuapp.com/user/register/", data)
      .catch(err=>{
        if(err && err.response)
        
          setSuccess(null);
          setError(err.response.data);
        
      })
      if(response){
        setError(null);
        setSuccess(response.data.status_message);
        formik.resetForm();
      }
  }

  // SETTING UP FORMIK
  const formik = useFormik({
    initialValues: {
      username: "",
      phone_number: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })
    
    return (
      <div className="signup">
            <h1>Welcome to Trakker.</h1>
            <p>The most efficient way to get your product from. Get notified when you are really set to go. Best place to make you comfortable 
              with the price. </p>

        <div className="row container">
            <div className="col-lg-5 col-md-5 col-xs-12"> 
            <div className="signup__fieldSuccess">
            </div>
              <form  noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                
                <h2>Sign Up</h2>
                  { !error && success ? <div className="signup__fieldSuccess">{success}</div> : ""}
                  { error && !success ? <div className="signup__fieldError">{error}</div> : ""}

                <div className="signup__fieldContainer">
                  <TextField 
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    id="standard-basic" 
                    label="Email" 
                    className="signup__email"
                    onBlur ={formik.handleBlur}
                  />
                  <span className="signup__fieldError">
                    {formik.touched.email && formik.errors.email ? formik.errors.email: ""}
                  </span>
                </div>
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
                    name="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    id="standard-basic" 
                    label="Phone Number" 
                    className="signup__email"
                    onBlur ={formik.handleBlur}
                  />
                  <span className="signup__fieldError">
                    {formik.touched.phone_number && formik.errors.phone_number ? formik.errors.phone_number: ""}
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
                <div className="signup__fieldContainer">
                  <TextField
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    id="standard-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    className="signup__password"
                    onBlur ={formik.handleBlur}
                  />
                  <span className="signup__fieldError">
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword: ""}
                  </span>
                </div>
                <Button 
                  type="submit" 
                  className="signup__btn"
                  disabled={!formik.isValid}
                  >
                    Sign Up
                  </Button>
                  <div className="signup__signin">
                    Already have an account?
                    <span>
                      <Link to='/signin'>Sign In</Link>
                    </span>
                  </div>
              </form>
            </div>
            <div className="col-lg-7 col-md-7 col-xs-12">
              <div className="signup__side">
                {/* <img
                  src={Message}
                  className="signup__img"
                  alt="message"
                /> */}
                <Message/>
              </div>
            </div>

        </div>

      </div>
            
    )
}

export default SignUp
