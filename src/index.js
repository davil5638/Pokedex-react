import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/navbar";
import Card from "./components/card-pokemon/card-pokemon";
import Modal from "./components/modal/modal";
import "./global.css";
import pokebola from "./assets/images/pokebola.png";

ReactDOM.render(
  <div>
    <Navbar></Navbar>
    <div id="container">
  
      <Card name="Pikachu" elementoEletric="Eletric" elementoWater="Water" imagem={pokebola} />
      {/* <Card name="Card2" />
      <Card name="Card3" />
      <Card name="Card4" />
      <Card name="Card5" />
      <Card name="Card6" />
      <Card name="Card7" />
      <Card name="Card8" />
      <Card name="Card9" />
      <Card name="Card10" />
      <Card name="Card11" />
      <Card name="Card12" />
      <Card name="Card13" />
      <Card name="Card14" />
      <Card name="Card15" />
      <Card name="Card16" /> */}

      <div class="cardvazio"></div>
      <div class="cardvazio"></div>
      <div class="cardvazio"></div>
      <div class="cardvazio"></div>
    </div>
    <Modal></Modal>
  </div>,

  document.getElementById("root")
);
