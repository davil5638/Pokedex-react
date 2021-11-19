import React from "react";
import "./card-pokemon.css";
import pokemons from "../../assets/images/pikachu.png";

export default function cards(propies) {
  return (
    <>
      <div className="cards">
        <div className="conteudocards">
          <img className="pokemon" src={pokemons} />
          <img className="pokebola" src={propies.imagem} />

          <div className="texto-cards">
            <h1> {propies.name} </h1>

            <div className="elementos">
              <span className="cor-eletric">{propies.elementoEletric}</span>
              <span className="cor-water">{propies.elementoWater}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
