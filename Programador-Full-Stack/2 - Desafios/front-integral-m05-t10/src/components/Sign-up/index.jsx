import { api } from "../../lib/axios";
import "./styles.css";

import { useNavigate, Link } from "react-router-dom";
import { toastError } from "../../helpers/ToastError";
import UseUser from "../../hooks/useUser";

function SignUp() {
  const { signUpForm, setSignUpForm } = UseUser();
  const navigate = useNavigate();

  async function handleSubmmit(event) {
    event.preventDefault();

    const { name, email } = signUpForm;

    if (!email || !name) {
      toastError("Preencha todos os campos");
    }

    try {
      await api.post("/users/check-email/", {
        name,
        email,
      });

      navigate("/registerPassword");
    } catch (error) {
      if (error.response.data.canRegister === false) {
        toastError("Email já registrado");
      }
    }
  }

  function handleChangeInput(event) {
    setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value });
  }

  return (
    <div className="signUp_containerPage1">
      <h1>Adicione seus dados</h1>
      <form className="signUp_form" onSubmit={handleSubmmit}>
        <label>Nome*</label>
        <input
          placeholder="Digite o seu nome"
          type="text"
          name="name"
          onChange={handleChangeInput}
        />
        <label className="margin-t-8">E-mail*</label>
        <input
          placeholder="Digite seu e-mail"
          type="email"
          name="email"
          onChange={handleChangeInput}
        />
        <button style={{ border: "none" }}>Continuar</button>
      </form>
      <div className="go-to-login">
        <span>Já possui uma conta? Faça seu</span>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default SignUp;
