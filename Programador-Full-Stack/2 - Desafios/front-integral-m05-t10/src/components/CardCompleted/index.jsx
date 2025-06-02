import "./styles.css";
import approvedIcon from "../../assets/approvedIcon.svg";
import { useNavigate } from "react-router-dom";

function CardCompleted() {
  const navigate = useNavigate();

  const handleNavigateToOtherScreen = () => {
    navigate("/login");
  };

  return (
    <div className="container_cardCompleted">
      <div className="card_completed">
        <img src={approvedIcon}></img>
        <h1>Cadastro realizado com sucesso!</h1>
      </div>
      <button onClick={handleNavigateToOtherScreen}>Ir para Login</button>
    </div>
  );
}

export default CardCompleted;
