import React from "react";
import "./navbar.css";
import imagem from "../../assets/images/logo.svg";
import imagem2 from "../../assets/images/lupa.png";

export default function Navbar() {
  return (
    <>
      <nav id="menu">
        <div class="logo">
          <img class="imglogo" src={imagem} />
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
              <img class="imagemlupa" src={imagem2} />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
[];
