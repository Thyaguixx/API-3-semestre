import logo from '../img/visiona_logo.png';
import LT from "../img/little_tech.png"
import './ValidarTokenSenha.css';
import { useState } from "react";

function ValidarTokenSenha() {
const [token, setToken] = useState("");
const camposPreenchidos = () => {
  if (token === "") {
    return alert("Preencha todos os campos.");
  }
  // Código para cadastrar o usuário
};
return (
  <div className="container-vts">
    <div className="container-token-vts">
      <div className="wrap-vts">
        <form className="vts-form">
          <span className="vts-form-title">
            <img src={logo} alt="logo visiona"/>
          </span>
          <div className="wrap-input-vts">
            <input
              className={token !== "" ? "has-val input" : "input"}
              type="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <span className="focus-input-vts" data-placeholder="Token"></span>
          </div>         
          <div className="container-vts-form-btn">
            <button className="vts-form-btn" onClick={camposPreenchidos}>Validar Token</button>
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

export default ValidarTokenSenha;