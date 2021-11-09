import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar/navbar";
import Card from "./components/card-pokemon/card-pokemon";

ReactDOM.render(
  <div>
    <Navbar></Navbar>
    <div class="container">
      <Card name="Card1" />
      <Card name="Card2" />
      <Card name="Card3" />
      <Card name="Card4" />
      <Card name="Card5" />
      <Card name="Card6" />
      <Card name="Card7" />
      <Card name="Card8" />
      <Card name="Card9" />
      <Card name="Card10" />
    </div>
  </div>,

  document.getElementById("root")
);
