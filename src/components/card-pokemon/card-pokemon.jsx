import React from "react";
import "./card-pokemon.css";
import imagem from "../../assets/images/pikachu.png";
import imagem2 from "../../assets/images/pokebola.png";

export default function cards() {
  return (
    <>
      <div class="cards">
        <div class="conteudocards">
          <img class="pokemon" src={imagem} />
          <img class="pokebola" src={imagem2} />

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
