/*import React, { Component } from 'react';
import './primeira.css';
import { useRef } from 'react';
//import { Link } from 'react-router-dom';


export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    const dropDrownRef = useRef(null);
    const [isActive, setIsActive] = click (dropDrownRef, false)
    const onClick = () => setIsActive(!isActive)

    console.log(isActive)

    return (
        <div className="container">

            <div className="cabecalho">
                <img className="logo"src="/img/logo.png"/>
                <h1 className="nome"><span className="palavra">Porto Fino</span> Contabilidade</h1>
            </div>

            <nav ref={dropDrownRef}>
              <button onClick={onClick} className="click">
                <img className="img-menu" src="https://img2.gratispng.com/20180422/uve/kisspng-hamburger-button-computer-icons-menu-clip-art-5adcc45cad2da2.9774904315244176287094.jpg" alt="menu"></img>
              </button>

              <ul>
                <li><a href="#">item 1</a></li>
                <li><a href="#">item 2</a></li>
                <li><a href="#">item 3</a></li>
                <li><a href="#">item 4</a></li>
              </ul>

            </nav>

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
}

*/