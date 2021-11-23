import React from "react";
import "./buttonmodal.css";
import addicon from "../../assets/images/add-icon2.png";

const buttonmodal = (props) => {
  return (
    <>
      <div id="addnewpokemon">
        <button
          className="botaonewpokemon"
          onClick={() => {
            props.abrirModal();
          }}
        >
          <img className="addicon" src={addicon} />
          <span className="textnewpokemon">New Pokémon</span>
        </button>
      </div>
    </>
  );
};

export default buttonmodal;
