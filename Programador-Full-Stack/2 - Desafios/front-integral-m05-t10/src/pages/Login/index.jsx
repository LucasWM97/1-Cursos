import SignIn from "../../components/Sign-in";
import "./styles.css";

export function Login() {
  return (
    <div className="container_register">
      <div className="banner">
        <h1>Gerencie todos os pagamentos da sua empresa em um só lugar.</h1>
      </div>
      <SignIn />
    </div>
  );
}
