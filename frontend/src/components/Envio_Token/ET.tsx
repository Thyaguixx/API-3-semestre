import React, { useState } from "react";
import "./ET.css";
import logo from "../img/visiona_logo.png";
import LT from "../img/little_tech.png";
import email from "../img/email.png";




function Envio_Token() {

  const email_enviado = "email@hotmail.com";

  return (
    <div className="container-et">
      <div className="container-enviar_token">
        <div className="wrap-et">
          <form className="et-form">
            <span className="et-form-title">
              <img src={logo} alt="logo visiona"/>
              <div className='email'>
             <img src={email} alt="email_icon"></img>
             </div>
            </span>
            <span className="text-center">Token de recuperação de senha enviado para: {email_enviado}</span>
            <div className="container-et-form-btn">
              <button className="et-form-btn">Confirmar token</button>
            </div>
            <div className="text-center">
              <a className="txt2" href="#">
                Reenviar token
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

export default Envio_Token;
