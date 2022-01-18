import React, { useState } from "react";
import Home from "./pages/home.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Pokemondetails from "./pages/pokemondetails.jsx";
import { Navigate } from "react-router-dom";
import Contextpokemon from "./components/context/mycontext";
import PokemonContext from "./components/context/mycontext";



const App = () => {
  
  return (
    <PokemonContext>
      <Router>
        <>
          <Contextpokemon>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/pokemon/:id" element={<Pokemondetails />} />
            </Routes>
          </Contextpokemon>
        </>
      </Router>
    </PokemonContext>
  );
};
export default App;
