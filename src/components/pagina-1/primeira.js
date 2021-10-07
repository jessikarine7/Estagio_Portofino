import React from 'react';
import './primeira.css';
import { useRef } from 'react';
import { useOutsideClick } from './useOutsideClick.js';
//import { Link } from 'react-router-dom';


export default function Main () {
  
  const dropDrownRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick (dropDrownRef, false)
  const onClick = () => setIsActive(!isActive)

  console.log(isActive)
  
  return (

    <div className="container">

      <div className="topo">

        <div className="cabecalho">
            <img className="logo"src="/img/logo.png"/>
            <h1 className="nome"><span className="palavra">Porto Fino</span> Contabilidade</h1>
        </div>

        <div className="menu-container">
          <button onClick={onClick} className="menu-button">
            <img className="img-m" width="40px" height="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsZj_u_adaZgB1garqMpcgiDYsJ-t1T68ukqiwx2t_Sg0LJ_2IPV_cKcNyPl2JmLGoEg&usqp=CAU" alt="menu"></img>
          </button>
          <nav className={`menu ${isActive ? "active" : "inactive"}`} ref={dropDrownRef}>
            <ul className="navegacao">
              <li><a href="#">item 1</a></li>
              <li><a href="#">item 2</a></li>
              <li><a href="#">item 3</a></li>
              <li><a href="#">item 4</a></li>
            </ul>
          </nav>
        </div>
      
      </div>

      <div className="container2">
          <div className="corpo">
              <h1 className="texto">Não perca tempo com <br/>cálculos de <span className="frase">Revisão do<br/> FGTS</span> no seu escritório </h1>
              <button type="button" className="button">Quero o cálculo do FGTS</button>
          </div>

          <div className="imagem">
              <img className="desing"src="/img/desing.jpg" width="500px"/>
          </div>

      </div>

    </div>

  );
  
  
}