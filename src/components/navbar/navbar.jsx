import React from "react";
import "./navbar.css";
import imagem from "../../assets/images/logo.png";
import imagem2 from "../../assets/images/fundo2.jpg";

export default function Navbar() {
  return (
    <>
      <nav id="menu">
        <img class="teste" src={imagem2} />
        <div class="logo">
          <a href="#">
            <img class="fundo" src={imagem} />
          </a>
        </div>
      </nav>
    </>
  );
}
[];
