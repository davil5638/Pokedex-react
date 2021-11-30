import React, { createContext, useContext, useState } from "react";

const Context = createContext()

const PokemonContext = (props) => {
  const [pokemon, setPokemons] = useState([])

  return (
    <Context.Provider value={{ pokemon, setPokemons }}>
      {props.children}
    </Context.Provider>
  )
}

export function getPokemon() {
  const savedContext = useContext(Context)
  const {pokemon, setPokemons} = savedContext 
  return {pokemon, setPokemons}
}

export default PokemonContext;