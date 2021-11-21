import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import lupa from "../../assets/images/lupa.png";

const Navbar = (props) => {
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
        {props.children}
      </nav>
    </>
  );
};

export default Navbar;
