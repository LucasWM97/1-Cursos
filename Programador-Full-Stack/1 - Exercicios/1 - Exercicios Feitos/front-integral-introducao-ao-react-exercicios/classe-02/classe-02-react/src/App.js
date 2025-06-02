import Drawers from "./assets/drawers.jpg";
import Avatar from "./assets/avatar-michelle.jpg";
import './App.css';


function App() {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap" rel="stylesheet"/>
        </head>
    <body>
    <div className="content-wrapper">
    <article className="card">
      <div className="card__img">
        <img src={Drawers} alt="furniture"/>
      </div>
      <div className="card__text-wrapper">
        <h1 className="card__heading">Mude a aparência geral adicionando esses toques maravilhosos aos móveis de sua casa
        </h1>
        <p className="card__paragraph">Já esteve em uma sala e sentiu como se algo estivesse faltando? Talvez um pouco vazia
          e convidativa. Tenho algumas dicas simples para tornar qualquer ambiente completo.</p>
        <div className="card__footer-wrapper">
          <img src={Avatar} alt="author" class="author__img"/>
          <div className="author__info">
            <div className="author__name">Michele Campos</div>
            <div className="author__date">28 Jun 2020</div>
          </div>
          <button className="card__btn">
            <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'>
              <title>Seta</title>
              <path d='M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z' fill='none' />
            </svg>
          </button>
        </div>
      </div>
    </article>
  </div>
  </body>
  </html>

  );
}

export default App;
