import React from "react";
import "./card-pokemon.css";
// import pokebola from "../../assets/images/pokebola.png";
import iconeremover from "../../assets/images/icone-remover.png";

const Cards = (props) => {
  return (
    <>
      <div className="cards" id={props.idpokemon}>
        <div className="conteudocards">
          <img
            className="pokemon"
            src={props.imagem}
            alt="imagem"
            width="100"
            height="100"
          />
          <button
            id="removerpokemon"
            className="iconeremover"
            onClick={props.removerPokemon}
          >
            <img src={iconeremover} />
          </button>
          <div className="texto-cards">
            <h1> {props.name} </h1>

            <div className="elementos">
              <span className="cor-elemento">{props.elemento}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
