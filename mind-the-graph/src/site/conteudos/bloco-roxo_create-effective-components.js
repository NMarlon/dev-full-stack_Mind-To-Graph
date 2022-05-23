import ico_drag from '../../img/ico_drag.svg';
import ico_multiple from '../../img/ico_multiple.svg';
import ico_odemand from '../../img/ico_odemand.svg';
import ico_platform from '../../img/ico_platform.svg';
import ico_premade from '../../img/ico_premade.svg';
import ico_share from '../../img/ico_share.svg';

function BlocoRoxoCreaEffectiveComp() {
    return (
        


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


                <a href="nothingForAWhile.js" className="link-botao" ><div className="botao-borda-branca-fundo-transparente"><span>EXPLORE MIND THE GRAPH</span></div></a>

                <div className="Spacing"></div>

            </div>
        </div>
        
        )

}
export default BlocoRoxoCreaEffectiveComp;