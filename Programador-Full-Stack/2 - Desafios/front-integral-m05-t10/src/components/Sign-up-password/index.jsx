import { useState } from "react";
import { api } from "../../lib/axios";
import "./styles.css";
import showPassword from "../../assets/showPassword.svg";
import hidePassword from "../../assets/hidePassword.svg";

import { useNavigate, Link } from "react-router-dom";
import { toastError } from "../../helpers/ToastError";
import UseUser from "../../hooks/useUser";

function SignUpPassword() {
  const [password, setPassword] = useState(false);
  const [repeatPassword,setRepeatPassword] = useState(false);
  const { signUpForm, setSignUpForm } = UseUser();
  const navigate = useNavigate();

  async function handleSubmmit(event) {
    event.preventDefault();

    const { name, email, password, confirmPassword } = signUpForm;
    if (password !== confirmPassword) {
      toastError("Senhas precisam ser iguais");
      return;
    }

    if (password.length <= 4 || confirmPassword.length <= 4) {
      toastError("Senha precisa ser maior que 4 dígitos");
      return;
    }

    const teste = await api.post("/users/register", {
      name,
      email,
      password,
    });

    if (teste.status === 201) {
      navigate("/registerCompleted");
    }
  }

  function handleChangeInput(event) {
    setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value });
  }

  const handleToggleSenhaVisivel = () => {
    setPassword(!password);
  };

  const handleToggleRepeatPassword  = ()=>{
    setRepeatPassword(!repeatPassword)
  }

  return (
    <div className="signUp_container">
      <h1>Escolha uma senha</h1>
      <form className="signUp_form" onSubmit={handleSubmmit}>
        <label>Senha*</label>
        <div className="input_password">
          <input
            type={password ? "text" : "password"}
            name="password"
            id="input_pass"
            onChange={handleChangeInput}
          />
          {!password ? (
            <img
              src={showPassword}
              id="btn-password"
              onClick={handleToggleSenhaVisivel}
            />
          ) : (
            <img
              src={hidePassword}
              id="btn-password"
              onClick={handleToggleSenhaVisivel}
            />
          )}
        </div>
        <label>Repita a senha*</label>
        <div className="input_password">
          <input
            type={repeatPassword ? "text" : "password"}
            name="confirmPassword"
            id="input_pass"
            onChange={handleChangeInput}
          />
          {!repeatPassword ? (
            <img
              src={showPassword}
              id="btn-password"
              onClick={handleToggleRepeatPassword}
            />
          ) : (
            <img
              src={hidePassword}
              id="btn-password"
              onClick={handleToggleRepeatPassword}
            />
          )}
        </div>
        <button style={{ border: "none" }} id="finalRegister">
          Finalizar Cadastro
        </button>
      </form>
      <div className="go-to-login-page2">
        <span>Já possui uma conta? Faça seu</span>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default SignUpPassword;
