import React, { useEffect, useState } from "react";
import "./modal.css";

const Modal = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    document.getElementById("descricao").value = props.pokemon?.descricao || "";
  }, [props.pokemon]);

  return (
    <>
      <div id="addpokemon" className="fundo-modal">
        <div className="conteudo-modal">
          <div id="form">
            <h4 className="title"> {props.title} </h4>
            <form onSubmit={props.salvarPokemon} className="form">
              <input
                id="descricao"
                type="text"
                className="descricaodopokemon"
                placeholder="Descrição do Pokémon"
              />
              <input
                id="nome"
                type="text"
                className="nomedopokemon"
                placeholder="Nome do Pokémon"
              />
              <input
                id="elemento"
                type="text"
                placeholder="Elemento do Pokémon"
              />

              <div className="imagempokemon">
                <label htmlFor="imagem" className="custom-input">
                  <i className="fas fa-file-upload"></i> Imagem Pokémon
                </label>
                <input
                
                  type="file"
                  id="imagem"
                  onChange={(e) => setImage(e.target.files[0])}
                ></input>
                {image ? (
                  <img
                    id="imagempokemon"
                    className="previewimg"
                    src={URL.createObjectURL(image)}
                    alt="imagem"
                    width="100"
                    height="100"
                  />
                ) : (
                  <img
                    className="previewimg"
                    src="./icone_usuario.png"
                    alt="Imagem"
                    width="100"
                    height="100"
                  />
                )}
              </div>

              <div id="botoesform">
                <button type="submit" className="botaoenviar">
                  Enviar
                </button>
                <button
                  value="Cancelar"
                  className="botaocancelar"
                  onClick={props.close}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
