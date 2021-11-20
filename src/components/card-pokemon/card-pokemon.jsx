import React from "react";
import "./card-pokemon.css";

import pokebola from "../../assets/images/pokebola.png";
export default function cards(propies) {
  return (
    <>
      <div className="cards">
        <div className="conteudocards">
          <img className="pokemon" src={propies.imagem} />
          <img className="pokebola" src={pokebola} />

          <div className="texto-cards">
            <h1> {propies.name} </h1>

            <div className="elementos">
              <span className="cor-eletric">{propies.elemento}</span>

            
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
