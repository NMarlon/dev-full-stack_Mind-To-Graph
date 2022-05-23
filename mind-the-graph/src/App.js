import './App.css';
import logo from './img/logo_mindthegraph.svg';
import './fonts/Lato-Bold.ttf';
import './fonts/Lato-Light.ttf';
import './fonts/Lato-Regular.ttf';
import lifeGrowing from './img/head-02.png';
import graphAbstracts from './img/image_2-1-Woman-Typing.svg';
import nuclearWoman from './img/image_3-2.svg';
import sliderPresents from './img/image_1-3.svg';
import ico_drag from './img/ico_drag.svg';
import ico_multiple from './img/ico_multiple.svg';
import ico_odemand from './img/ico_odemand.svg';
import ico_platform from './img/ico_platform.svg';
import ico_premade from './img/ico_premade.svg';
import ico_share from './img/ico_share.svg';

//import Hamburger from 'hamburger-react';


function App() {
    return (
        <div className="App">
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
            <div className="Spacing"></div>
            <div className="Spacing"></div>
            <div className="Spacing"></div>
            <div className="body-things">
                <h3>Vizualize what Mind the Graph can do for you</h3>
            </div>
            <div className="conteudo tres-infomacoes-graphical-Abstracts">
                <div className="center">
                    <div className="conteudo-single">
                        <div className="organizador">
                            <img src={graphAbstracts} alt="Woman typing a new idea in your computer" />
                            <h4>Graphical Abstracts and Infographics</h4>
                            <p>Improve your papers' impact and visibility through quality visual communication</p>
                        </div>
                        <a className="link-imagem-learn_more" href="Wait_weAreInProgress.js"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 10 19">
                            <g id="bt_learnmore" transform="translate(1.768)">

                                <path id="Caminho_814" data-name="Caminho 814" d="M419.35,247.464l5.5,5.57-5.57,5.5" transform="translate(-419.28 -242.053)" fill="none" stroke="#7833ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                            </g>
                        </svg><p className="texto-learn-more">LEARN MORE</p></a>

                    </div>
                    <div className="conteudo-single ">
                        <div className="organizador">

                            <img src={nuclearWoman} alt="A woman presents a cool new nuclear idea" />
                            <h4>Scientific Poster in a few clicks</h4>
                            <p>Add visual impact to your posters with scientific illustrations and graphics</p></div>
                        <a className="link-imagem-learn_more" href="Wait_weAreInProgress.js"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 10 19">
                            <g id="bt_learnmore" transform="translate(1.768)">

                                <path id="Caminho_814" data-name="Caminho 814" d="M419.35,247.464l5.5,5.57-5.57,5.5" transform="translate(-419.28 -242.053)" fill="none" stroke="#7833ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                            </g>
                        </svg><p className="texto-learn-more">LEARN MORE</p></a>

                    </div>
                    <div className="conteudo-single">
                        <div className="organizador">

                            <img src={sliderPresents} alt="Just a man presenting too..." />
                            <h4>Make better Slide Presentation</h4>
                            <p>Transform your lectures, meetings and classes into high-impact visual experiences</p>
                        </div>
                        <a className="link-imagem-learn_more" href="Wait_weAreInProgress.js"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 10 19">
                            <g id="bt_learnmore" transform="translate(1.768)">

                                <path id="Caminho_814" data-name="Caminho 814" d="M419.35,247.464l5.5,5.57-5.57,5.5" transform="translate(-419.28 -242.053)" fill="none" stroke="#7833ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                            </g>
                        </svg><p className="texto-learn-more">LEARN MORE</p></a>

                    </div>


                </div>
            </div>

            <div className="conteudo">
                <div className="bloco-roxo">
                    <h3>Create effective science figures in minutes</h3>
                    <p>We built Mind the Graph for simplicity. The platform is easy to use and just about anybody can use it to create great infographics and presentations - from beginners to professionals, individuals to groups and small labs to large organisations</p>
                    <div className="center">

                        <div className="conteudo-single">
                            <div className="organizador">
                                <img src={ico_drag} alt="Trying to move something around..." />
                                <h4>Drag and Drop</h4>
                                <p>Easily select and manage illustrations, text and templates</p>
                            </div>
                        </div>

                        <div className="conteudo-single">
                            <div className="organizador">
                                <img src={ico_premade} alt="Trying to move something around..." />
                                <h4>Pre-Made Resources</h4>
                                <p>Don't waste time! Use our templates and just customize colours, text etc</p>

                            </div>
                        </div>
                        <div className="conteudo-single">
                            <div className="organizador">
                                <img src={ico_platform} alt="Trying to move something around..." />
                                <h4>Online Platform</h4>
                                <p>Access your creations at any time and from anywhere</p>

                            </div>
                        </div>



                    </div>
                    <div className="center">

                        <div className="conteudo-single">
                            <div className="organizador">
                                <img src={ico_odemand} alt="Trying to move something around..." />
                                <h4>On-demand Illustrations</h4>
                                <p>Don't find exactly what you need? We will design it for you!</p>
                            </div>
                        </div>

                        <div className="conteudo-single">
                            <div className="organizador">
                                <img src={ico_multiple} alt="Trying to move something around..." />
                                <h4>Multiple Sizing Options</h4>
                                <p>Ready-to-go templates in all popular sizes</p>

                            </div>
                        </div>
                        <div className="conteudo-single">
                            <div className="organizador">
                                <img src={ico_share} alt="Trying to move something around..." />
                          
                                <h4>Share creations</h4>
                                <p>Share your creations with your team or other users</p>
                            </div>
                        </div>



                    </div>

                    
                    <a href="nothingForAWhile.js" className="link-botao" ><div className="botao-borda-branca-fundo-transparente">EXPLORE MIND THE GRAPH  </div></a>
                  

                </div>
            </div>
        </div>
    );
}
/*
<div className="">
</div>
*/
export default App;
//http://localhost:3000/
