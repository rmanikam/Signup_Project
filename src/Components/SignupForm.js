import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../useForm";
import validate from "../validation";
import Tooltip from "./Tooltip";
import { checkIcon, crossIcon } from "../icons";
import {
  isValidLength,
  isContainsUppercase,
  isContainsLowercase,
  isContainsNumber,
  isContainsSymbol,
} from "../passwordValidation";
// imported icons from Font Awesome;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faTwitterSquare, faGooglePlusSquare);

const SignupForm = () => {
  // Initialized value of " " for variables name, email, password and repeat password
  const name = useForm("");
  const email = useForm("");
  //const password = useForm("");
  const confirmPassword = useForm("");

  // sometimes for debugging comment out initializing every variable using object and do destructuring
  // individually

  const [validationRules, setValidationRules] = useState({
    validLength: false,
    containsLowercase: false,
    containsUppercase: false,
    containsNumber: false,
    containsSymbol: false,
  });

  // const [validLength, setValidLength] = useState(false);
  // const [containsLowercase, setContainsLowercase] = useState(false);
  // const [containsUppercase, setContainsUppercase] = useState(false);
  // const [containsNumber, setContainsNumber] = useState(false);
  // const [containsSymbol, setContainsSymbol] = useState(false);

  const [show, setShow] = useState(false);

  const [errors, setErrors] = useState({});
  const handleShowHide = () => {
    setShow(!show);
  };

  // Password regex

  const [password, setPassword] = useState("");

  // state is not imported in another page because they belong to that component. they are only
  //passed as props

  function handlePassword(e) {
    let new_Password = e.target.value;
    console.log(new_Password);
    let newObj;
    if (isValidLength.test(new_Password)) {
      console.log("validLength if", new_Password);
      newObj = {
        ...validationRules,
        validLength: true,
      };
      //setValidationRules(newObj);
      // setValidLength(true);
      console.log("valid length if", validationRules);
    } else {
      console.log("validLength else", new_Password);

      newObj = {
        ...validationRules,
        validLength: false,
      };
      //setValidationRules(newObj);
      console.log("valid length else", validationRules);
      // setValidationRules({
      //   ...validationRules,
      //   validLength: false,
      // });
      // setValidLength(false);
    }

    if (isContainsLowercase.test(new_Password)) {
      // setContainsLowercase(true);
      // setValidationRules({
      //   ...validationRules,
      //   containsLowercase: true,
      // });
      newObj = {
        ...validationRules,
        containsLowercase: true,
      };
      //setValidationRules(newObj);
      console.log("valid lowercase if", validationRules);
    } else {
      // setValidationRules({
      //   ...validationRules,
      //   containsLowercase: false,
      // });

      newObj = {
        ...validationRules,
        containsLowercase: false,
      };
      //setValidationRules(newObj);
      // setContainsLowercase(false);
      console.log("valid lowercase else", validationRules);
    }

    if (isContainsUppercase.test(new_Password)) {
      //  setValidationRules({
      //   ...validationRules,
      //   containsUppercase: true,
      //setContainsUppercase(true);
      newObj = {
        ...validationRules,
        containsUppercase: true,
      };
      //setValidationRules(newObj);
      console.log("valid uppercase if", validationRules);
    } else {
      newObj = {
        ...validationRules,
        containsUppercase: false,
      };
      //setValidationRules(newObj);
      // setContainsUppercase(false);
      console.log("valid lowercase else", validationRules);
    }

    if (isContainsNumber.test(new_Password)) {
      // setContainsNumber(true);
      newObj = {
        ...validationRules,
        containsNumber: true,
      };
      //setValidationRules(newObj);
      console.log("valid number if", validationRules);
    } else {
      //setContainsNumber(false);
      newObj = {
        ...validationRules,
        containsNumber: false,
      };
      //setValidationRules(newObj);
      console.log("valid number else", validationRules);
    }

    if (isContainsSymbol.test(new_Password)) {
      //setContainsSymbol(true);
      newObj = {
        ...validationRules,
        containsSymbol: true,
      };
      //setValidationRules(newObj);
      console.log("valid symbol if", validationRules);
    } else {
      //setContainsSymbol(false);
      newObj = {
        ...validationRules,
        containsSymbol: false,
      };
      //setValidationRules(newObj);
      console.log("valid symbol else", validationRules);
    }

    setValidationRules(newObj);
    setPassword(new_Password);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fields = {
      name: name.value,
      email: email.value,
      password: password,
      confirmPassword: confirmPassword.value,
    };

    const receivedError = validate(fields);
    setErrors(receivedError);
    // {name, email, password, confirmPassword} = '';
  }

  return (
    <section>
      <div className="main d-flex justify-content-center align-items-center py-5 my-5">
        <div className="container d-flex justify-content-center align-items-center rounded my-2 ">
          <div className="row my-2 border">
            <div className="col-md-6 col-sm-12 col-12 col-lg-6  mb-3 signup_form">
              <h2 className="title mb-5"> Sign Up</h2>
              <form
                className="needs-validation"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="mb-3 mt-3 form-group">
                  <label htmlFor="name">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="material-icon-name"
                    />
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    name="name"
                    value={name.value}
                    onChange={name.onChange}
                  />
                  <p> {errors.name} </p>
                </div>

                <div className="mb-3 mt-3 form-group">
                  <label htmlFor="email" className="form-label">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="material-icon-name"
                    />
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your email"
                    name="email"
                    value={email.value}
                    onChange={email.onChange}
                  />
                  <p> {errors.email} </p>
                </div>
                <div className="mb-3 mt-3 form-group">
                  <label htmlFor="password" className="form-label" id="pwd">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="material-icon-name-1"
                    />
                  </label>
                  <Tooltip
                    content={
                      <div className="outer-box">
                        <div>
                          <p>
                            The minimum password length is 8 characters and must
                            contain at least 1 lowercase letter, 1 capital
                            letter, 1 number and 1 special character
                          </p>
                        </div>
                        <div className="icon">
                          {validationRules.validLength ? checkIcon : crossIcon}

                          <p className="para"> # of characters</p>
                        </div>
                        <div className="icon">
                          {validationRules.containsLowercase
                            ? checkIcon
                            : crossIcon}

                          <p className="para"> Lowercase Letter</p>
                        </div>
                        <div className="icon">
                          {validationRules.containsUppercase
                            ? checkIcon
                            : crossIcon}

                          <p className="para"> Capital Letter</p>
                        </div>
                        <div className="icon">
                          {validationRules.containsNumber
                            ? checkIcon
                            : crossIcon}

                          <p className="para"> Number</p>
                        </div>
                        <div className="icon">
                          {validationRules.containsSymbol
                            ? checkIcon
                            : crossIcon}

                          <p className="para"> Special Character</p>
                        </div>
                      </div>
                    }
                    direction="bottom"
                  >
                    <input
                      type={show ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={handlePassword}
                    />

                    {show ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        id="show_hide"
                        onClick={handleShowHide}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        id="show_hide"
                        onClick={handleShowHide}
                      />
                    )}
                  </Tooltip>
                </div>

                <div className="mb-3 mt-3 form-group">
                  <label htmlFor="password" className="form-label">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="material-icon-name"
                    />
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Repeat your Password"
                    name="confirmPassword"
                    value={confirmPassword.value}
                    onChange={confirmPassword.onChange}
                  />
                  <p> {errors.confirmPassword} </p>
                </div>
                <div className="form-group  mt-3">
                  <input type="checkbox" className="form-check-input" />
                  <span className="text">
                    I agree all statements in <u>Terms of service</u>
                  </span>
                </div>
                <div>
                  <button type="submit" className=" mb-1 register">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className=" col-md-6 col-sm-12 col-12 col-lg-6 image">
              <img
                className="img mw-100 me-5"
                src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
                alt="signup_image"
              />
              <Link to="/login" className="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
