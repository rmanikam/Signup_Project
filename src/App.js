// import React, { Component } from "react";
// import { MultiLang, withLang } from "react-multilang";
// const MyComponent = withLang({
//   fr: {
//     HW: "Bonjour le monde",
//   },
//   en: {
//     HW: "How are you?",
//   },
// })((props) => (
//   <div>
//     <p>{props.lang}</p>
//     <p>{props.langProps.HW}</p>
//   </div>
// ));
// class App extends Component {
//   state = {
//     lang: "en",
//   };
//   changeLang = () => {
//     this.setState((state) => ({
//       lang: state.lang === "en" ? "fr" : "en",
//     }));
//   };
//   render() {
//     return (
//       <>
//         <div onClick={this.changeLang}>
//           <MyComponent />
//           <MultiLang lang={this.state.lang} />
//         </div>
//         <div className="App">
//           <SignupForm />
//         </div>
//       </>
//     );
//   }
// }

// export default App;

import React from "react";
import SignupForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
