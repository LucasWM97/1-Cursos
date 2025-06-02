import "./styles.css";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { toastError } from "../../helpers/ToastError";
import UseUser from "../../hooks/useUser";
import { UpdateAllCharges } from "../../services/UpdateAllCharges";
import { setLocalStorageItem } from "../../helpers/localStorage";
import { UpdateAllClientsStatus } from "../../services/UpdateAllClientStatus";

function SignIn() {
  const { signUpForm, setSignUpForm } = UseUser();
  const navigate = useNavigate();

  const { email, password } = signUpForm;

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      toastError("Preencha todos os campos");
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      if (response.status == 200) {
        const { name } = response.data.user;
        const { token } = response.data;

        setLocalStorageItem("name", name);
        setLocalStorageItem("token", token);

        await UpdateAllCharges(token);
        await UpdateAllClientsStatus(token);
      }

      navigate("/home");
    } catch (error) {
      toastError("Email ou senha incorreta");
    }
  }

  function handleChangeInput(event) {
    setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value });
  }

  return (
    <div className="signIn_container">
      <h1>Faça seu login!</h1>
      <form className="signUp_form" onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
          placeholder="Digite o seu e-mail"
          type="text"
          name="email"
          value={email}
          onChange={handleChangeInput}
        />
        <div className="forgot-password">
          <label>Senha</label>
          <div id="forgot_password">
            <a href="#">Esqueceu a senha?</a>
          </div>
        </div>
        <input
          placeholder="Digite a sua senha"
          type="password"
          name="password"
          value={password}
          onChange={handleChangeInput}
        />
        <button style={{ border: "none" }} type="submit">
          Entrar
        </button>
      </form>

      <div className="go-to-register">
        <span>Ainda não possui uma conta? </span>
        <Link to={"/register"}>Cadastre-se</Link>
      </div>
    </div>
  );
}

export default SignIn;
