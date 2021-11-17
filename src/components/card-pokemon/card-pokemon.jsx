import React from "react";
import "./card-pokemon.css";
import pokemons from "../../assets/images/pikachu.png";


export default function cards(propies) {
  return (
    <>
      <div class="cards">
        <div class="conteudocards">
          <img class="pokemon" src={pokemons} />
          <img class="pokebola" src={propies.imagem} />

          <div class="texto-cards">
            <h1> {propies.name} </h1>

            <div class="elementos">
              <span class="cor-eletric">{propies.elementoEletric}</span>
              <span class="cor-water">{propies.elementoWater}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
