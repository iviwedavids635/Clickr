import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Home from "./container/Home";

const App = () => {
  return (
    <Routes>
      <Route />
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
