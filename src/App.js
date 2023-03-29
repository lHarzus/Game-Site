import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Alert from "./components/layout/Alert";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";

//Redux imports
import { Provider } from "react-redux"; //so that every component can access state
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Alert />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
