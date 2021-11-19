import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import Card from "./card-pokemon/card-pokemon";
import Modal from "./modal/modal";
import pokebola from "../assets/images/pokebola.png";


export default () => {

  const [listapokemon, setlistapokemon] = useState([])
  
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
  function adicionarPokemon() {
    if (!isFormValid()) {
      alert("Preencher os campos com valores válidos");
    } else {
      const pokemon = {
        'nome': nome.value,
        'elemento': elemento.value,
        'imagem': imagem.value, 
      }
    }
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <div id="container">
        <Card
          name="Pikachu"
          elementoEletric="Eletric"
          elementoWater="Water"
          imagem={pokebola}
        ></Card>
        <div className="cardvazio"></div>
        <div className="cardvazio"></div>
        <div className="cardvazio"></div>
        <div className="cardvazio"></div>
      </div>
      <Modal adicionarPokemon={adicionarPokemon}></Modal>
    </div>
    
  );
};
