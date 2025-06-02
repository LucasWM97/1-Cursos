
import './App.css';
import PrevButton from "./assets/icon-prev.svg"
import NextButton from "./assets/icon-next.svg"
import Gabriela from "./assets/gabriela.jpg"
function App() {
  return (



    <div className="content-wrapper">
        <div className="text-wrapper">
            <p className="review-text">“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não
                consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro
                brilhante!”</p>
            <div className="author__content-wrapper">
                <div className="author__name">Gabriela da Silva</div>
                <div className="author__title">Desenvolvedora Fullstack</div>
            </div>
        </div>
        <div className="carousel">
            <div className="carousel__img-wrapper">
                <img src={Gabriela} alt="bootcamp graduate" class="carousel__img"/>
            </div>
            <div className="carousel__btn-wrapper">
                <button id="btn-prev" class="btn btn--previous"><img src={PrevButton}
                        alt="previous button"/></button>
                <button id="btn-next" class="btn btn--next"><img src={NextButton}
                        alt="next button"/></button>
            </div>
        </div>
    </div>


  );
}

export default App;
