import React, { useContext, useState } from "react";
import Navbar from "../components/navbar/navbar";
import "./pokemondetails.css";
import { getPokemon } from "../components/context/mycontext";
import Editdetails from "./editdetails";


const Details = () => {
  const [name, setName] = useState("Davi");
  const [last, setLast] = useState ('Lima')


  return (
    <>
      <Editdetails value={name} onChangeValue={setName}>
      <Editdetails value = {last} onChangeValue = {setLast}>
      </Editdetails>
      </Editdetails>
    </>
  );
};
export default Details;
