import React from "react";
import useForm from "../useForm";
//import validate from "../validation";
import "../Form.css";
import validate from "../validation";
import Tooltip from "./Tooltip";
import { Link } from "react-router-dom";

// imported icons from Font Awesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faTwitterSquare, faGooglePlusSquare);

// Component name is always Uppercase but normal function is always camel case
const LoginForm = () => {
  //const showHide = () => {};
  // Initialized value to variables name, email, password and repeat password
  const name = useForm("");
  const password = useForm("");

  return (
    <section>
      <div className="main d-flex justify-content-center align-items-center py-5 my-5">
        <div className="container d-flex justify-content-center align-items-center rounded my-2 ">
          <div className="row my-2 border row_padding">
            <div className=" col-md-6 col-sm-12 col-12 col-lg-6 image">
              <img
                className="img mw-100 me-5"
                src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
                alt="signup_image"
              />
              <Link to="/" class="signup-image-link-1">
                Create an account
              </Link>
            </div>
            <div className="col-md-6 col-sm-12 col-12 col-lg-6  mb-3 signup_form">
              <h2 className="title"> Sign In</h2>
              <form className="needs-validation" noValidate>
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
                </div>

                <div class="mb-3 mt-3 form-group">
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
                    placeholder="Password"
                    name="password"
                    value={password.value}
                    onChange={password.onChange}
                  />
                </div>

                <div className="form-group  mt-3">
                  <input
                    className="form-check-input"
                    value=""
                    id="flexCheckDefault"
                  />
                  <span className="text">Remember me</span>
                </div>
                <div>
                  <button type="button" class=" mb-1 register">
                    Log in
                  </button>
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon="fa-brands fa-twitter-square" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon="fa-brands fa-google-plus-square" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
