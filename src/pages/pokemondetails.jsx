import React from "react";
import Navbar from "../components/navbar/navbar";
import "./pokemondetails.css";
import Imagempokemon from "../assets/images/bulbasaur.png";

const Details = (props) => {
  return (
    <>
      <Navbar></Navbar>

      <div id="detalhesPokemon">
        <div className="imagem">
          <div className="nomePokemon">Bulbassaur</div>
          {" "}
          <img src={Imagempokemon} alt="" />
        </div>
        <div id="colunadetalhes">
          <div className="descricao">
            <p>
              Há uma semente de planta em suas costas desde o dia em que o
              Pokémon nasceu. A semente cresce lentamente.
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
            <h4>Type -</h4>
          </div>
          <div className="elementodetalhes">
            <span className="textoelemento"> Grass and Poison</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
