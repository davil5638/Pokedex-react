import React from "react";
import "./navbar.css";
import imagem from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <>
      <nav id="menu">
        <div class="logo">
          <a href="#">
            <img src={imagem} />
          </a>
        </div>
      </nav>
    </>
  );
}
[]