import React, { createContext, useState, useContext } from "react";
import "./card-pokemon.css";
import iconeremover from "../../assets/images/icone-remover.png";
import { Link } from "react-router-dom";
import { getPokemon } from "../context/mycontext";

const Cards = (props) => {
  const { setPokemons } = getPokemon();
  const path = "/pokemon/" + props.idpokemon;

  return (
    <>
      <div className="cards" id={props.idpokemon}>
        <button
          id="removerpokemon"
          className="iconeremover"
          onClick={props.removerPokemon}
        >
          <img src={iconeremover} />
        </button>
        <Link to={path} onClick={() => setPokemons(props.pokemon)}>
          <div className="conteudocards">
            <img
              className="pokemon"
              src={props.imagem}
              alt="imagem"
              width="100"
              height="100"
            />

            <div className="texto-cards">
              <h1> {props.name} </h1>

              <div className="elementos">
                <span className="cor-elemento">{props.elemento}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
