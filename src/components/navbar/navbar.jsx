import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import lupa from "../../assets/images/lupa.png";
import addicon from "../../assets/images/add-icon2.png";

export default function Navbar() {
  return (
    <>
      <nav id="menu">
        <div class="logo">
          <img class="imglogo" src={logo} />
          <span class="logo-nome">
            {" "}
            <h1>Poké.Search</h1>{" "}
          </span>
        </div>

        <div class="barra-search">
          <form class="d-flex">
            <input
              class="form-control"
              type="search"
              placeholder="Buscar Pokémon..."
              aria-label="Search"
            />
            <button class="botao-search" type="submit">
              <img class="imagemlupa" src={lupa} />
            </button>
          </form>
        </div>

        <div id="addnewpokemon">
          <button class="botaonewpokemon">
            <img class="addicon" src={addicon} />
            <span class="textnewpokemon">New Pokémon</span>
          </button>
        </div>
      </nav>
    </>
  );
}
[];
