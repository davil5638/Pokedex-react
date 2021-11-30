import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import { getPokemon } from "../components/context/mycontext";
import "./pokemondetails.css";
import Buttonmodal from "../components/modal/modal";
import Modal from "../components/modal/modal";


const EditInPlace = () => {
  const [listaPokemons, addPokemon] = useState([]);
  const [showModal, setOpenModal] = useState(false);
  const { pokemon, setPokemons } = getPokemon();

  const validaForm = (inputData) => {
    return (
      inputData.nome.value != "" &&
      inputData.elemento.value != "" &&
      inputData.imagem.value != "" &&
      inputData.descricao.value != ""
    );
  };

  const salvarPokemon = (event) => {
    event.preventDefault();
    const inputData = event.target;
    if (!validaForm(inputData)) {
      alert("Preencher todos os campos");
    } else {
      const pokemon = {
        nome: inputData.nome.value,
        elemento: inputData.elemento.value,
        imagem: inputData.imagempokemon.src,
        id: Math.floor(Math.random() * 10000),
        descricao: inputData.descricao.value,
      };
      
    }
    setOpenModal(false);
  };

  return (
    <>
      <Navbar></Navbar>

      <div id="detalhesPokemon">
        <div className="imagem">
          <div
            /*contenteditable="true"*/
            className="nomePokemon"
          >
            {pokemon.nome}
          </div>{" "}
          <img src={pokemon.imagem} alt="" />
        </div>

        <div id="colunadetalhes">
          {/* <div>
            <img id="editicon" src={Editicon} alt="" /> Editar{" "}
          </div> */}
          <div className="descricao">
            <p /*contenteditable="true"*/>{pokemon.descricao}</p>
          </div>
          <div className="quadrodetalhes">
            <div className="coluna1">
              <div>
                <p>
                  Height <span>0.7 m</span>{" "}
                </p>{" "}
              </div>
              <div>
                <p>
                  Weight <span>6.9 kg</span>{" "}
                </p>
              </div>
              <div>
                <p>
                  Genus <span>Seed</span>{" "}
                </p>
              </div>
            </div>
            <div className="coluna2">
              <div>
                <p>
                  Abilities <span>Overgrow</span>{" "}
                </p>
              </div>
              <div>
                <p>
                  Color <span>Green</span>{" "}
                </p>
              </div>
              <div>
                <p>
                  Shape<span>Quadruped</span>
                </p>
              </div>
            </div>
          </div>
          <div className="type">
            <h4>Type - </h4>
          </div>
          <div className="elementodetalhes">
            <span
              /*contenteditable="true"*/
              className="textoelemento"
            >
              {pokemon.elemento}
            </span>
          </div>
        </div>
      </div>
      <div className="editar">
        <button
          className="botaoeditar"
          onClick={() => {
            props.abrirModal(salvarPokemon);
          }}
        >
          Salvar
        </button>
        <Buttonmodal abrirModal={() => setOpenModal(true)}></Buttonmodal>
        {showModal ? (
          <Modal
            close={() => setOpenModal(false)}
            salvarPokemon={salvarPokemon}
          />
        ) : null}
        
        
      </div>
    </>
  );
};
export default EditInPlace;
