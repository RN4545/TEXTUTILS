import { useState } from "react";
import React from "react";

import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "blue";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "Textutils-Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText =" About TextUtils "/> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-5 ">
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
