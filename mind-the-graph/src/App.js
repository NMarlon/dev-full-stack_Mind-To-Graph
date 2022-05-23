import './App.css';
import Main from './Main';
import Vizualize from './site/conteudos/vizualize-what-MTG-can-do-4u.js';
import BlocoRoxo from './site/conteudos/bloco-roxo_create-effective-components.js';




import './fonts/Lato-Bold.ttf';
import './fonts/Lato-Light.ttf';
import './fonts/Lato-Regular.ttf';

function App() {

    return (


        <div className="App">

            <Main />
            <div className="Spacing"></div>
            <div className="Spacing"></div>
            <div className="Spacing"></div>
            <Vizualize />

            <BlocoRoxo />

        </div>
    );
}

export default App;
