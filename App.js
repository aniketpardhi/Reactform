import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </>
  );
};

export default App;
