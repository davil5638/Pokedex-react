import React from "react";
import "./modal.css";


const modal = (props) => {
  if (!props.open) {
    return null;
  }

  return (
    <>
      <div id="addpokemon" className="fundo-modal">
        <div className="conteudo-modal">
          <div id="form">
            <h4 className="title">Adicione o Pokémon</h4>

            <form action="" className="form">
              <input
                id="nome"
                type="text"
                className="nomedopokemon"
                placeholder="Nome do Pokémon"

              />

              <input
                id="elemento"
                type="text"
                placeholder="Elementos Ex: Water Eletric Fire"
              />

              <div className="imagempokemon">
                <label> Escolha a imagem do pokémon </label>
                <input type="file" className="file" id="imagem" />
              </div>

              <div id="botoesform">
                <input type="button" value="Enviar" className="botaoenviar"
                onClick={props.enviarPokemon}
                 />
                <input
                  type="button"
                  value="Cancelar"
                  className="botaocancelar"
                  
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
