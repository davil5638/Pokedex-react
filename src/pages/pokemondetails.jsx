import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/navbar";
import "./pokemondetails.css";
import { getPokemon } from "../components/context/mycontext";
import Modal from "../components/modal/modal";

const Details = (props) => {
  const { pokemon } = getPokemon();
  const [showModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      {showModal ? (
        <Modal
          pokemon={pokemon}
          className="modal"
          title="Editar Pokémon"
          close={() => setOpenModal(false)}
        />
      ) : null}
      <div id="detalhesPokemon">
        <div className="imagem">
          <div className="nomePokemon">{pokemon.name}</div>{" "}
          <img src={pokemon.imagem} alt="" />
        </div>
        <div id="colunadetalhes">
          <div className="descricao">
            <p>{pokemon.descricao}</p>
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
            <span className="textoelemento">{pokemon.elemento}</span>
          </div>
        </div>
      </div>
      <div className="editar">
        <button className="botaoeditar" onClick={() => setOpenModal(true)}>
          Editar
        </button>
      </div>
    </>
  );
};
export default Details;
