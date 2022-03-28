import React, { useState } from "react";
import "./App.css";
import { BsDoorOpen} from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
  

const App = () => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
  
  <div className="left">
     <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title"><BsDoorOpen/>Faça seu login</span>
          <span className="login-form-sub">Entre com suas informações de cadastro</span>

          <div className="wrap-input">
            <input className= {email !== "" ? 'hv input' : 'input'}
            type = "E-mail"
            value={email}
            onChange = {e => setEmail(e.target.value)} />
            <span className="focus-input" data-placeholder="E-mail"><BsFillEnvelopeFill/></span>
          </div>

          <div className="wrap-input">
            <input className={senha !== ""? 'hv input': 'input'}
            type ="password"
            value={senha}
            onChange = {e => setSenha(e.target.value)}></input>
            <span className="focus-input" data-placeholder="Senha"><RiLockPasswordFill/></span>
          </div>

          <div className="cs">
            <label className="switch">
              <span className="switch-text">Lembrar-se de mim</span>
              <div className="switch-wrapper"> 
                   <input type="checkbox" 
      id="checkbox"className = "checkbox"/>
      <span className="switchbtn"></span></div>

 </label>
          </div>

          <div className="esenha">           
            <a className="txt3" href="#">Esqueceu a sua senha? </a>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>
          <div className="text-center">
            <span className="txt1">Não possui cadastro?</span>
            <a className="txt2" href="#">Criar conta.</a>
          </div>

        </form> 
        <div className="rightd"></div>
      </div>
    </div>
    </div>

  );


};

export default App;
