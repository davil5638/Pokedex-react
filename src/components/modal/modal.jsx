import React from "react";
import "./modal.css";

const Modal = (props) => {
  return (
    <>
      <div id="addpokemon" className="fundo-modal">
        <div className="conteudo-modal">
          <div id="form">
            <h4 className="title">Adicione o Pokémon</h4>
            <form onSubmit={props.enviarPokemon} className="form">
              <input
                id="nome"
                type="text"
                className="nomedopokemon"
                placeholder="Nome do Pokémon"
              />
              <input
                id="elemento"
                type="text"
                placeholder="Elemento do Pokémon"
              />
              <div className="imagempokemon">
                <label htmlFor="imagem" className="custom-input">
                  <i className="fas fa-file-upload"></i> Upload
                </label>
                <input type="file" id="imagem"></input>
              </div>
              <div id="botoesform">
                <button type="submit" className="botaoenviar">
                  Enviar
                </button>
                <button
                  value="Cancelar"
                  className="botaocancelar"
                  onClick={props.close}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
