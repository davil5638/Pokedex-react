import React, { useContext } from "react";
import Navbar from "../components/navbar/navbar";
import "./pokemondetails.css";
import Imagempokemon from "../assets/images/bulbasaur.png";
import { getPokemon } from "../components/context/mycontext";

const Details = (props) => {
  const { pokemon, setPokemons } = getPokemon();
  console.log(pokemon);
  return (
    <>
      <Navbar></Navbar>

      <div id="detalhesPokemon">
        <div className="imagem">
          <div className="nomePokemon">{pokemon.nome}</div>{" "}
          <img src={pokemon.imagem} alt="" />
        </div>
        <div id="colunadetalhes">
          <div className="descricao">
            <p>
              {pokemon.descricao}
            </p>
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
        <button className="botaoeditar">Editar</button>
      </div>
    </>
  );
};
export default Details;
