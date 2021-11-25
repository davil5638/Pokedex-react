import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./global.css";
import Home from "./pages/home.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Pokemondetails from "./pages/pokemondetails.jsx";
import { Navigate } from "react-router-dom";



ReactDOM.render(


  <Router>
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/pokemon" element={<Pokemondetails />} />
      </Routes>
    </>
  </Router>,

  document.getElementById("root")
);
