import lifeGrowing from './img/head-02.png';
import { slide as Menu } from 'react-burger-menu';
import logo from './img/logo_mindthegraph.svg';

//import MenuGeral from './Menu.js';

function Main() {
    return (
        <div>



            <div id="outer-container">
                <Menu right width={'400px'} >
                    <div className="menu-login-group">
                        <a href="nothingForAWhile.js" className="botao-login botao-login-menu-items-hamburger menu-items-hamburger" ><span>Login</span></a>

                        <a className="Button-Sign-Up-menu Button-Sign-Up-menu-items-hamburger menu-items-hamburger" href="nothingForAWhile.js" ><span>Sign up free</span></a>

                    </div>
                    <div className="Spacing"></div>
                    <div className="Spacing"></div>

                    <div className="" >
                        <a className="Menu-Item menu-items-hamburger" href="nothingForAWhile.js" >Templates</a>
                    </div>
                    <div className="">
                        <a className="Menu-Item menu-items-hamburger" href="nothingForAWhile.js" >Pricing</a>
                    </div>
                    <div className="">
                        <a className="Menu-Item menu-items-hamburger" href="nothingForAWhile.js" >Blog</a>
                    </div>
                    <div className="">
                        <a className="Menu-Item menu-items-hamburger" href="nothingForAWhile.js" >Jobs</a>
                    </div>

                </Menu>
            </div>
            <div className="main">
                <div className="center">







                    <div className="menu">
                        <div className="logo">
                            <img src={logo} alt="Mind The Graph" />
                        </div>

                        <div className="lista-itens-menu">
                            <div className="item-menu">
                                <a className="Menu-Itens" href="nothingForAWhile.js" >Templates</a>
                            </div>
                            <div className="item-menu">
                                <a className="Menu-Itens" href="nothingForAWhile.js" >Pricing</a>
                            </div>
                            <div className="item-menu">
                                <a className="Menu-Itens" href="nothingForAWhile.js" >Blog</a>
                            </div>
                            <div className="item-menu">
                                <a className="Menu-Itens" href="nothingForAWhile.js" >Jobs</a>
                            </div>
                            <div className="item-menu">
                                <a href="nothingForAWhile.js" className="botao-login" >Login</a>
                            </div>
                            <div className="item-menu">
                                <a className="Button-Sign-Up" href="nothingForAWhile.js" >Sign up free</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="conteudo-apresentacao-menu">
                    <div className="conteudo-esquerda-menu">
                        <p>Discover all possibilities of using this powerfull tool and create science, figures, posters and infographics.</p>
                        <div className="item-menu">
                            <a className="Button-Sign-Up" href="nothingForAWhile.js" >Start creating now</a>
                        </div>
                    </div>
                    <div className="capa-menu">
                        <img src={lifeGrowing} alt="Life growing process" />
                    </div>
                </div>
            </div>
            </div>
            );
}

            export default Main;