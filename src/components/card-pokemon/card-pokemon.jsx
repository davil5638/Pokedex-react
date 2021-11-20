import React from "react";
import "./card-pokemon.css";
import pokebola from "../../assets/images/pokebola.png";

const Cards = (propies) => {
  return (
    <>
      <div className="cards">
        <div className="conteudocards">
          <img
            className="pokemon"
            src={propies.imagem}
            alt="imagem"
            width="100"
            height="100"
          />
          <img className="pokebola" src={pokebola} />

          <div className="texto-cards">
            <h1> {propies.name} </h1>

            <div className="elementos">
              <span className="cor-elemento">{propies.elemento}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
