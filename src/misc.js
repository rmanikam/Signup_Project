//import React from "react";

// import useForm from "../useForm";
// import validate from "../validation";
// import "../Form.css";
// const SignupForm = (submitForm) => {
//   const { values, handleChange, handleSubmit, errors } = useForm(
//     submitForm,
//     validate
//   );
//   return (
//     <div className="main bg-primary">
//       <section>
//         <div className="container bg-warning">
//           <div className="row">
//             <div className="col-sm-12 col-lg-6 col-md-6 col-12 d-flex justify-content-center;">
//               <h2 className="title ">Sign Up</h2>
//               <form
//                 className="needs-validation noValidate my-3 ms-0 demo-form "
//                 onSubmit={handleSubmit}
//                 noValidate
//               >
//                 <div className="mb-3 mt-3 mw-100 form-inputs">
//                   <label htmlFor="name" className="form-label"></label>
//                   <input
//                     type="name"
//                     className="form-control border-0"
//                     placeholder="Your Name"
//                     name="name"
//                     border-0
//                     defaultValue={values.name}
//                     onChange={handleChange}
//                   />
//                   {errors.name && <p>{errors.name}</p>}
//                 </div>
//                 <hr />
//                 <div className="mb-3 mt-3 form-inputs">
//                   <label htmlFor="email" className="form-label"></label>
//                   <input
//                     type="email"
//                     className="form-control border-0"
//                     id="email"
//                     placeholder="Your email"
//                     name="email"
//                     defaultValue={values.email}
//                     onChange={handleChange}
//                   />
//                   {errors.email && <p>{errors.email}</p>}
//                 </div>
//                 <hr />
//                 <div className="mb-3 mt-3 form-inputs">
//                   <label htmlFor="password" className="form-label"></label>
//                   <input
//                     type="password"
//                     className="form-control border-0 pr-password"
//                     id="password"
//                     placeholder="Password"
//                     name="password"
//                     defaultValue={values.password}
//                     onChange={handleChange}
//                   />
//                   {errors.password && <p>{errors.password}</p>}
//                 </div>
//                 <hr />
//                 <div className="mb-3 mt-3 form-inputs">
//                   <label htmlFor="password1" className="form-label"></label>
//                   <input
//                     type="password"
//                     className="form-control border-0"
//                     id="password1"
//                     placeholder="Repeat your Password"
//                     name="password1"
//                     defaultValue={values.password1}
//                     onChange={handleChange}
//                   />
//                   {errors.password1 && <p>{errors.password1}</p>}
//                 </div>
//                 <hr />
//                 <div className="form-check mb-3 mt-3">
//                   <input
//                     className="form-check-input"
//                     value=""
//                     id="flexCheckDefault"
//                     type="checkbox"
//                   />
//                   <span className="text">
//                     I agree all statements in <u>Terms of service</u>
//                   </span>
//                 </div>
//                 <div>
//                   <button type="submit" className="btn btn-primary register">
//                     Register
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <div className="col-sm-12 col-lg-6 col-md-6 col-12 d-flex justify-content-center">
//               <img
//                 className="img"
//                 src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
//                 alt="signup_image"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SignupForm

//  const valid = (item, v_icon, inv_icon) => {
//    let text = document.querySelector(`#${item} `);
//    console.log(text);
//    text.style.opacity = "1";

//    let valid_icon = document.querySelector(`#${item} .${v_icon} `);
//    valid_icon.style.opacity = "1";

//    let invalid_icon = document.querySelector(`#${item} .${inv_icon} `);
//    invalid_icon.style.opacity = "0";
//  };

//  const invalid = (item, v_icon, inv_icon) => {
//    let text = document.querySelector(`#${item} `);
//    console.log(text);
//    text.style.opacity = "0.5";

//    let valid_icon = document.querySelector(`#${item} .${v_icon} `);
//    valid_icon.style.opacity = "0";

//    let invalid_icon = document.querySelector(`#${item} .${inv_icon} `);
//    invalid_icon.style.opacity = "1";
//  };

//const passwordInputChange = (e) => {
//   const password = e.target.value;
//   if (!password) {
//     invalid("Empty", "fa-check", "fa-times");
//   } else {
//     valid("Empty", "fa-check", "fa-times");
//   }

//   if (!isValidLength.test(password)) {
//     invalid("# of characters", "fa-check", "fa-times");
//   } else {
//     valid("# of characters", "fa-check", "fa-times");
//   }
//   if (isWhitespace.test(password)) {
//     invalid("Whitespaces", "fa-check", "fa-times");
//   } else {
//     valid("Whitespaces", "fa-check", "fa-times");
//   }

//   if (!isContainsUppercase.test(password)) {
//     invalid("Capital letter", "fa-check", "fa-times");
//   } else {
//     valid("Capital letter", "fa-check", "fa-times");
//   }
//   if (!isContainsLowercase.test(password)) {
//     invalid("Lowercase letter", "fa-check", "fa-times");
//   } else {
//     valid("Lowercase letter", "fa-check", "fa-times");
//   }
//   if (!isContainsLowercase.test(password)) {
//     invalid("Lowercase letter", "fa-check", "fa-times");
//   } else {
//     valid("Lowercase letter", "fa-check", "fa-times");
//   }

//   if (!isContainsNumber.test(password)) {
//     invalid("Number", "fa-check", "fa-times");
//   } else {
//     valid("Number", "fa-check", "fa-times");
//   }
//   if (!isContainsNumber.test(password)) {
//     invalid("Number", "fa-check", "fa-times");
//   } else {
//     valid("Number", "fa-check", "fa-times");
//   }
//   if (!isContainsSymbol.test(password)) {
//     invalid("Special Character", "fa-check", "fa-times");
//   } else {
//     valid("Special Character", "fa-check", "fa-times");
//   }

// e.target.type === "checkbox" ? e.target.check : e.target.value;

//   <p id="empty">
//                     <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
//                     <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
//                     <span> "Empty" </span>
//                   </p>
//                   <p id="length">
//                     <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
//                     <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
//                     <span>"# of characters"</span>
//                   </p>
//                   <p id="whiteSpaces">
//                     <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
//                     <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
//                     <span> "Whitespaces"</span>
//                   </p>
//                   <p id="capital">
//                     <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
//                     <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
//                     <span> "Capital letter"</span>
//                   </p>
//                   <p id="lowerCase">
//                     <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
//                     <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
//                     <span> "Lowercase Letter"</span>
//                   </p>
//                   <p id="number">
//                     <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
//                     <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
//                     <span> "Number"</span>
//                   </p>
//                   <p id="specialCharacter">
//                     <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
//                     <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
//                     <span> "Special Character"</span>
//                   </p>
