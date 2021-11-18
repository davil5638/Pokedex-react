import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import lupa from "../../assets/images/lupa.png";
import addicon from "../../assets/images/add-icon2.png";

export default function Navbar() {
  function OpenModal() {
    document.getElementById("addpokemon").classList.add("ativar");
  }
 
  return (
    <>
      <nav id="menu">
        <div className="logo">
          <img className="imglogo" src={logo} />
          <span className="logo-nome">
            {" "}
            <h1>Poké.Search</h1>{" "}
          </span>
        </div>

        <div className="barra-search">
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Buscar Pokémon..."
              aria-label="Search"
            />
            <button className="botao-search" type="submit">
              <img className="imagemlupa" src={lupa} />
            </button>
          </form>
        </div>

        <div id="addnewpokemon">
          <button className="botaonewpokemon" onClick={OpenModal}>
            <img className="addicon" src={addicon} />
            <span className="textnewpokemon">New Pokémon</span>
          </button>
        </div>
      </nav>
    </>
  );
}
[];
