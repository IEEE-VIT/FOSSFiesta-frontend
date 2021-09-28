import React, { useState, useEffect } from "react";
import axios from "axios";

import RegisterBrandFont from "../../assets/svg/register-svg/register-brandfont.svg";
import DesignLeft from "../../assets/svg/register-svg/register-left.svg";
import DesignRight from "../../assets/svg/register-svg/register-right.svg";
import "./register.css";


import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button/button";

import TextField from "@mui/material/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FormControl, Radio, RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormLabel } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
    "& .MuiFormControl-root": {
      margin: "10px",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "orange",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .PrivateSwitchBase-input": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiFormHelperText-root": {
      color: "red",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E5E5E5",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "grey",
      },
    },
  },
}));

const Register = () => {

  const [isRegistered, setRegistered] = useState(!true);
  const [isExistingUser, setExistinguser] = useState(false);
 
  const initialValues = {
    id: 0,
    name: "",
    email: "",
    phone: "",
    vitian: "",
  };
  const [values, setvalues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const classes = useStyle();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
  };

  const givedefaultNumberCode = (e) => {
    e.preventDefault();
    setvalues({
      ...values,
      phone: 91,
    });
    values.phone = 91;
    console.log(values.phone, "phone number trig");
  };

  const validate = () => {
    let temp = {};
    temp.name = values.name ? "" : "Required";
    temp.email = (/$^|.+@.+..+/.test(values.email))&&(values.email!="") ? "" : "Email is not valid.";
    temp.phone = values.phone.length > 9 ? "" : "Invalid number";
    temp.vitian =
      values.vitian == "yes" || values.vitian == "no" ? "" : "Required";
    setErrors({ ...temp });
    console.log("validate ran", temp.email);
    return Object.values(temp).every((x) => x == "");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const config = {
        method: "post",
        url: "http://52.190.60.170:3000/register/new",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          vit: values.vitian,
        },
      };
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data.hasOwnProperty("msg")) {
            console.log("Already registered!", isRegistered);
            setExistinguser(true);
            // isExistingUser = true;
            setRegistered(true);
          } else if (response.data.hasOwnProperty("name")) {
            // console.log("Successfully registered!", isRegistered);
            setRegistered(true);
          } else {
            window.alert("Submission unsuccessful!");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      window.alert("Submission failed");
    }
  };
  const Form = (
    <div className="register-container">
      <div className="register-heading">
        <h1>REGISTER FOR</h1>
        <img src={RegisterBrandFont} alt="" />
      </div>

      <div className="register-form-container">
        <form action="" className={classes.root}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            required
            error={errors.name}
            helperText={errors.name}
            className="register-field-item"
            borderColor="white"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            required
            variant="outlined"
            value={values.email}
            onChange={handleInputChange}
            required
            error={errors.email}
            helperText={errors.email}
            className="register-field-item"
            color="secondary"
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            name="phone"
            variant="outlined"
            value={values.phone}
            onChange={handleInputChange}
            onClick={givedefaultNumberCode}
            required
            error={errors.phone}
            helperText={errors.phone}
            className="register-field-item"
            color="primary"
            style={{ color: "white" }}
          />
          <FormControl>
            <FormLabel>Are you a VITIAN?</FormLabel>
            <RadioGroup
              name="vitian"
              value={values.gender}
              onChange={handleInputChange}
              required
              error={errors.vitian}
              helperText={errors.vitian}
              className="register-vitian-options"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <FormHelperText>{errors.vitian}</FormHelperText>
          </FormControl>

          <div onClick={handleOnSubmit} className="register-regbtn">
            <Button > REGISTER </Button>
          </div>
        </form>
      </div>
    </div>
  );
  const message1 = "Successfully Registered for FOSSfiesta'21";
  const message2 = "Oh, I see you have already registered!";


  const PostRegister = (
    <div className="postregister-container">
      <img src={DesignLeft} alt="" className="bg bg-1"/>
      <div className="postregister-middle">
      <div className="brand">
        <img src={RegisterBrandFont} alt="" />
      </div>
      <div className="message">
        <h2>{isExistingUser ? message2 : message1}</h2>
        <h1>See you there!</h1>
        {/* <button>JOIN CODESPRINT</button> */}
      </div>
      </div>
      
      <img src={DesignRight} alt="" className="bg bg-2"/>
    </div>
  );

 
  return <div>{isRegistered ? PostRegister : Form}</div>;
};

export default Register;