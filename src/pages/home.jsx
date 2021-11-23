import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Card from "../components/card-pokemon/card-pokemon";
import Modal from "../components/modal/modal";
import Buttonmodal from "../components/buttonmodal/buttonmodal";
import "./home.css";

const Home = () => {
  const [listaPokemons, addPokemon] = useState([]);
  const [showModal, setOpenModal] = useState(false);

  const validaForm = (inputData) => {
    return (
      inputData.nome.value != "" &&
      inputData.elemento.value != "" &&
      inputData.imagem.value != ""
    );
  };

  const salvarPokemon = (event) => {
    const inputData = event.target;

    if (!validaForm(inputData)) {
      alert("Preencher todos os campos");
    } else {
      const pokemon = {
        nome: inputData.nome.value,
        elemento: inputData.elemento.value,
        imagem: inputData.imagempokemon.src,
        id: Math.floor(Math.random() * 10000),
      };

      addPokemon([...listaPokemons, pokemon]);
      setOpenModal(false);
    }
  };

  const removerPokemon = (id) => {
    const listupdate = listaPokemons.filter((pokemon) => pokemon.id != id);
    addPokemon(listupdate);
  };

  return (
    <div>
      <Navbar>
        <Buttonmodal abrirModal={() => setOpenModal(true)}> </Buttonmodal>
      </Navbar>
      <div id="container">
        {listaPokemons.map((pokemon, i) => (
          <Card
            key={i}
            idpokemon={pokemon.id}
            name={pokemon.nome}
            elemento={pokemon.elemento}
            imagem={pokemon.imagem}
            removerPokemon={() => removerPokemon(pokemon.id)}
          ></Card>
        ))}
        <div className="cardvazio"></div>
        <div className="cardvazio"></div>
        <div className="cardvazio"></div>
        <div className="cardvazio"></div>
      </div>
      {showModal ? (
        <Modal
          close={() => setOpenModal(false)}
          salvarPokemon={salvarPokemon}
        />
      ) : null}
    </div>
  );
};

export default Home;
