import React from "react";
import "./modal.css";
import Card from "../card-pokemon/card-pokemon";

export default function modal() {
  function cancelar() {
    document.getElementById("addpokemon").classList.remove("ativar");
  }

  // function adicionarPokemon() {
  //   const container = document.getElementById("container");
  //   const pokemon = {
  //     name: "Bulbassauro",
  //     elemento: "Planta",
  //     imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  //   };
  //   const cardpokemon = (
  //     <Card
  //       name={pokemon.name}
  //       elemento={pokemon.elemento}
  //       imagem={pokemon.imagem}
  //     />
  //   );
    
  //   container.insertAdjacentHTML("beforeend", cardpokemon);
  //   cardpokemon;
  // }

  return (
    <>
      <div id="addpokemon" class="fundo-modal">
        <div class="conteudo-modal">
          <div id="form">
            <h4 class="title">Adicione o Pokémon</h4>

            <form action="" class="form">
              <input type="text" placeholder="Nome do Pokémon" />

              <input
                type="text"
                placeholder="Elementos Ex: Water Eletric Fire"
              />

              <div class="imagempokemon">
                <label> Escolha a imagem do pokémon </label>
                <input type="file" class="file" />
              </div>

              <div id="botoesform">
                <input
                  type="button"
                  value="Enviar"
                  class="botaoenviar"
                  // onClick={adicionarPokemon}
                />
                <input
                  type="button"
                  value="Cancelar"
                  class="botaocancelar"
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
