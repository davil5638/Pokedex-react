import React, { createContext, useState, useContext, useEffect } from "react";
import "./card-pokemon.css";
import iconeremover from "../../assets/images/icone-remover.png";
import { Link } from "react-router-dom";
import { getPokemon } from "../context/mycontext";
import Pokebola from "../../assets/images/pokebola.png";

const Cards = (props) => {
  const { setPokemons } = getPokemon();
  const path = "/pokemon/" + props.idpokemon;
  
  const [api, setApi] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((r) => r.json())
      .then((json) => {
        setApi(json);
      });
  }, []);

  return (
    <>
      <div className="cards" id={props.idpokemon}>
        <img className="pokebola" src={Pokebola} alt="" />
        <Link to={path} onClick={() => setPokemons(api)}>
          <div className="conteudocards">
            <img
              className="pokemon"
              src={api ? api.sprites.other.dream_world.front_default : null}
              alt="imagem"
              width="100"
              height="100"
            />

            <div className="texto-cards">
              <h1> {props.name} </h1>

              <div className="elementos">
                {api
                  ? api.abilities.map((item) => (
                      <span className="cor-elemento">{item.ability.name}</span>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
