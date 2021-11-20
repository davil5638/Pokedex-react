import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Card from "../components/card-pokemon/card-pokemon";
import Modal from "../components/modal/modal";

import Buttonmodal from "../components/buttonmodal/buttonmodal";

const Home = () => {
  const [listaPokemons, addPokemon] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const isFormValid = (inputData) => {
    return (
      inputData.nome.value != "" &&
      inputData.elemento.value != "" &&
      inputData.imagem.value != ""
    );
  };

  const abrirModal = () => {
    setOpenModal(true);
  };

  const fecharModal = () => {
    setOpenModal(false);
  };

  const enviarPokemon = (event) => {
    event.preventDefault();
    const inputData = event.target;

    if (!isFormValid(inputData)) {
      alert("Preencher os campos com valores válidos");
    } else {
      const pokemon = {
        nome: inputData.nome.value,
        elemento: inputData.elemento.value,
        imagem: inputData.imagem.value,
      };

      addPokemon([...listaPokemons, pokemon]);
      setOpenModal(false);
    }
  };

  return (
    <div>
      <Navbar>
        <Buttonmodal abrirModal={abrirModal}> </Buttonmodal>
      </Navbar>
      <div id="container">
        {listaPokemons.map((pokemon, i) => (
          <Card
            key={i}
            name={pokemon.nome}
            elemento={pokemon.elemento}
            imagem={pokemon.imagem}
          ></Card>
        ))}
      </div>
      {openModal ? (
        <Modal close={fecharModal} enviarPokemon={enviarPokemon} />
      ) : null}
    </div>
  );
};

export default Home;
