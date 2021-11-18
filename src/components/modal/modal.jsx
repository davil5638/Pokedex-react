import React from "react";
import "./modal.css";
import Card from "../card-pokemon/card-pokemon";
import { useState } from "react";

export default function modal(props) {
  function cancelar() {
    document.getElementById("addpokemon").classList.remove("ativar");
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
                <input
                  type="button"
                  value="Enviar"
                  className="botaoenviar"
                  onClick={props.adicionarPokemon}
                />
                <input
                  type="button"
                  value="Cancelar"
                  className="botaocancelar"
                  onClick={cancelar}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
