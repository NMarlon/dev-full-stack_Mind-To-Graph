import graphAbstracts from '../../img/image_2-1-Woman-Typing.svg';
import sliderPresents from '../../img/image_1-3.svg';
import nuclearWoman from '../../img/image_3-2.svg';



function vizualize() {
	return (
		
        <div>
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

                                <path id="Caminho_814" d="M419.35,247.464l5.5,5.57-5.57,5.5" transform="translate(-419.28 -242.053)" fill="none" stroke="#7833ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
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

                                <path id="Caminho_814"  d="M419.35,247.464l5.5,5.57-5.57,5.5" transform="translate(-419.28 -242.053)" fill="none" stroke="#7833ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
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

                                <path id="Caminho_814"  d="M419.35,247.464l5.5,5.57-5.57,5.5" transform="translate(-419.28 -242.053)" fill="none" stroke="#7833ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                            </g>
                        </svg><p className="texto-learn-more">LEARN MORE</p></a>

                    </div>


                </div>
            </div>
		</div>
		);
}
export default vizualize;