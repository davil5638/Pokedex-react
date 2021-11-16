import React from "react";
import "./card-pokemon.css";
import pokemons from "../../assets/images/pikachu.png";
import pokebola from "../../assets/images/pokebola.png";

export default function cards() {
  return (
    <>
      <div class="cards">
        <div class="conteudocards">
          <img class="pokemon" src={pokemons} />
          <img class="pokebola" src={pokebola} />

          <div class="texto-cards">
            <h1> Pikachu </h1>

            <div class="elementos">
              <span class="cor-eletric">Eletric</span>
              <span class="cor-water">Water</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
