import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';


const validationSchema = yup.object({
  // username: yup.string().required("Username is reqired."),
  // password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
      url: yup.string().required("Input url."),
      requestedPrice: yup.number().required("Pls, enter your targetted price.")
 
})


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  let headers =  {}
    
  if (sessionStorage.token) {
      headers = { 'Authorization': `Token ${sessionStorage.token}` }
  }
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values)=>{
    const response = await axios.post("https://trakkkr.herokuapp.com/",{
      headers: headers
    }, values)
        .catch(err =>{
          if(err & err.response)
            console.log(err);
        })

      if(response){
        console.log(response)
      }


  }

  const formik = useFormik({
    initialValues: {
      url: "",
      requestedPrice: 0
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema
  })

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <inpu/>
              <form  noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                
                <h2>Add Product</h2>
                <div className="signup__fieldContainer">
                  <TextField 
                    name="url"
                    value={formik.values.url}
                    onChange={formik.handleChange}
                    id="standard-basic" 
                    label="url" 
                    className="signup__email"
                    onBlur ={formik.handleBlur}
                  />
                </div>
                <div className="signup__fieldContainer">
                  <TextField 
                    name="requestedPrice"
                    value={formik.values.requestedPrice}
                    onChange={formik.handleChange}
                    id="standard-basic" 
                    label="requestedPrice" 
                    className="signup__email"
                    onBlur ={formik.handleBlur}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="signup__btn"
                  >
                    Sign Up
                  </Button>
              </form>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}