import React from "react";
import "./navbar.css";
import imagem from "../../assets/images/logo.png";
import imagem2 from "../../assets/images/fundo3.png";

export default function Navbar() {
  return (
    <>
      <nav id="menu">
        <img class="imgfundo" src={imagem2} />
        <div class="logo">
          <a href="#">
            <img src={imagem} />
          </a>
        </div>
      </nav>
    </>
  );
}
[];
