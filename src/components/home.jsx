import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import Card from "./card-pokemon/card-pokemon";
import Modal from "./modal/modal";

import Buttonmodal from "./buttonmodal/buttonmodal";

export default (props) => {
  const [listapokemons, addPokemon] = useState([]);
  const [openmodal, setOpenModal] = useState(false);

  function isFormValid() {
    const nome = document.getElementById("nome");
    const elemento = document.getElementById("elemento");
    const imagem = document.getElementById("imagem");

    if (nome.value != "" && elemento.value != "" && imagem.value != "") {
      return true;
    } else {
      return false;
    }
  }

  function abrirModal() {
    setOpenModal(true);
  }

  function enviarPokemon() {
    if (!isFormValid()) {
      alert("Preencher os campos com valores válidos");
    } else {
      const pokemon = {
        nome: document.getElementById("nome").value,
        elemento: document.getElementById("elemento").value,
        imagem: document.getElementById("imagem").value,
      };
      console.log(listapokemons);

      addPokemon([...listapokemons, pokemon]);
      setOpenModal(false);
    }
  }
    
  return (
    <div>
      <Navbar>
        <Buttonmodal abrirModal={abrirModal}> </Buttonmodal>
      </Navbar>
      <div id="container">
        {listapokemons.map((pokemon, i) => (
          <Card key={i}
            name={pokemon.nome}
            elemento={pokemon.elemento}            
            imagem={pokemon.imagem}
          ></Card>
        ))}
      </div>
      <Modal open={openmodal} enviarPokemon={enviarPokemon}></Modal>
    </div>
  );
};
