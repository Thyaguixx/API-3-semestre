import React, { useState } from "react";
import "./EnviarToken.css";
import logo from "../img/visiona_logo.png"
import LT from "../img/little_tech.png"



function EnviarToken() {
  const [email, setEmail] = useState("");


  const camposPreenchidos = () => {
    if (email === "") {
      return alert("Preencha todos os campos.");
    }
    // Código para cadastrar o usuário
  };
  return (
    <div className="container-tk">
      <div className="container-token">
        <div className="wrap-token">
          <form className="token-form">
            <span className="token-form-title">
              <img src={logo} alt="logo visiona"/>
            </span>
            <span className="text-center"> Digite o seu E-mail para recuperar a sua conta:</span>
            <div className="wrap-input-tk">
              <input
                className={email !== "" ? "has-val input" : "input-tk"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input-tk" data-placeholder="Email"></span>
            </div>         
            <div className="container-token-form-btn">
              <button className="token-form-btn" onClick={camposPreenchidos}>Enviar</button>
            </div>
            <div className="text-center">
              <a className="txt1" href="#">
                Voltar para a página de login
              </a>
            </div>
          </form>
        </div>
        <div className='logo'>
          <img src={LT} alt="little_tech"></img>
        </div>
      </div>
    </div>
  );
}

export default EnviarToken;
