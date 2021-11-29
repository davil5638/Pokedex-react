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
  const context = useContext(Context)
  const {pokemon, setPokemons} = context 
  return {pokemon, setPokemons}
}

export default PokemonContext;