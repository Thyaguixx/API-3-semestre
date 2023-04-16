import { useState } from "react";
import "./NS.css";
import LT from "../img/little_tech.png";
import logo from "../img/visiona_logo.png";
import eyeIconOpen from '../img/open.png';
import eyeIconClose from '../img/close.png';



function NS() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
 

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const showConfirmHandler = () => {
    setShowConfirm(!showConfirm);
  };

  const camposPreenchidos = () => {
    if (password === "" || confirm === "") {
      return alert("Preencha todos os campos.");
    }
    // Código para cadastrar o usuário
  };

  const passwordInputTypeSenha = showPassword ? "text" : "password";
  const passwordInputTypeConfirm = showConfirm ? "text" : "password";
  const passwordIconSrc = showPassword ?   eyeIconOpen : eyeIconClose;
  const confirmIconSrc = showConfirm ?   eyeIconOpen : eyeIconClose;


  return (
    <div className="container-ns">
      <div className="container-ns">
        <div className="wrap-ns">
          <form className="ns-form">
            <span className="ns-form-title">
             <img src={logo} alt="logo visiona"/>
            </span>
            <div className="wrap-input-ns">
              <input
                className={password !== "" ? "has-val input" : "input-ns"}
                type={passwordInputTypeSenha}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input-ns" data-placeholder="Nova senha"></span>
              <img src={passwordIconSrc} alt="eye icon" onClick={showPasswordHandler} />
            </div>
            <div className="wrap-input-ns">
              <input
                className={confirm !== "" ? "has-val input" : "input-ns"}
                type={passwordInputTypeConfirm}
                value={confirm}
                onChange={(e) => {
                setConfirm(e.target.value);
                setPasswordMatch(e.target.value === password);}
              }
             />
              <span className="focus-input-ns" data-placeholder="Confirmar senha"></span>
              <img src={confirmIconSrc} alt="eye icon" onClick={showConfirmHandler} />
              {confirm !== "" && !passwordMatch&& (
               <div className="balao-flutuante">
                 <p>As senhas não coincidem.</p>
               </div>
              )}
            </div>

            <div className="container-ns-form-btn">
              <button className="ns-form-btn" onClick={camposPreenchidos}>Atualizar senha</button> 
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

export default NS;