import React, { useState } from "react";
import "./Form.css";
import SignupForm from "../src/Components/SignupForm";
import Success from "./Success";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? <SignupForm submitForm={submitForm} /> : <Success />}
      </div>
    </>
  );
};

export default Form;
