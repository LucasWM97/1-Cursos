import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import X from "../../../assets/x.svg";
import { removeSpecialCharacters } from "../../../helpers/removeFormatString";
import { editUserLogged } from "../../../services/EditUserLogged";
import CustomInput from "../../ui/CustomInput";
import PasswordInput from "../../ui/PasswordInput";
import "./styles.css";
import { getUserLogged } from "../../../services/GetUserLogged";
import { useNavigate } from "react-router-dom";
import { redirectToLogin } from "../../../helpers/redirecToLogin";
import { validateEmail } from "../../../helpers/ValidateEmail";
import { getLocalStorageItem } from "../../../helpers/localStorage";

export function FormEdit({ onClose }) {
  const token = getLocalStorageItem("token");

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  let [errorData, setErrorData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await getUserLogged(token);

      if (result && result.redirectToLogin) {
        redirectToLogin();
      } else {
        const { name, email, phone, cpf } = result;
        setFormData((prevFormData) => ({
          ...prevFormData,
          name,
          email,
          cpf: cpf ? cpf : "",
          phone: phone ? phone : "",
        }));
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrorData({ ...errorData, [name]: "" });
    return;
  };

  const validateRequiredFields = () => {
    const { name, email, password, confirmPassword } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Campo nome é obrigatório";
    }

    if (!email.trim()) {
      errors.email = "Campo email é obrigatório";
    } else if (!validateEmail(email)) {
      errors.email = "Digite um e-mail válido";
    }

    if (password || confirmPassword) {
      if (!password && confirmPassword) {
        errors.password = "As senhas não conferem";
      }
      if (password.length < 5) {
        errors.password = "Mínimo de 5 caracteres";
      }
      if (password !== confirmPassword) {
        errors.confirmPassword = "As senhas não conferem";
      }
    }
    setErrorData(errors);
    return Object.keys(errors).length === 0;
  };

  const validateCPF = () => {
    const cpfWithoutFormat = removeSpecialCharacters(formData.cpf);
    const errors = {};

    if (cpfWithoutFormat) {
      if (cpfWithoutFormat.length < 11 || cpfWithoutFormat.length > 11) {
        errors.cpf = "Digite um CPF válido";
      }
    }

    setErrorData((prevErrorData) => ({
      ...prevErrorData,
      ...errors,
    }));

    return Object.keys(errors).length === 0;
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateRequiredFields() || !validateCPF()) {
      return;
    }

    const { name, email, cpf, password, phone } = formData;

    const userData = {
      name: name.trim(),
      email: email.trim(),
      cpf: removeSpecialCharacters(cpf),
      phone: removeSpecialCharacters(phone),
      password,
    };

    await editUserLogged(userData, token, onClose);
  }

  return (
    <div className="edit-modal">
      <form
        onSubmit={handleSubmit}
        className="box-form-edit"
        noValidate
        autoComplete="off"
      >
        <div className="form-group-container-edit">
          <strong
            style={{ marginBottom: "32px" }}
            className="title-editprofile"
          >
            Edite seu cadastro
          </strong>
          <img
            src={X}
            alt="x"
            className="x-editprofile"
            onClick={() => onClose()}
          />
          <div className="forms-container-edit">
            <CustomInput
              label={"Nome*"}
              name={"name"}
              error={errorData.name}
              onChange={handleChange}
              value={formData.name}
              placeholder={"Digite seu nome"}
            />

            <CustomInput
              label={"E-mail*"}
              type="email"
              name={"email"}
              error={errorData.email}
              onChange={handleChange}
              value={formData.email}
              placeholder={"Digite seu e-mail"}
            />

            <div className="cpftelefone">
              <div>
                <InputMask
                  mask="999.999.999-99"
                  alwaysShowMask={false}
                  value={formData.cpf}
                  onChange={handleChange}
                >
                  {(inputProps) => (
                    <CustomInput
                      label={"CPF*"}
                      name={"cpf"}
                      error={errorData.cpf}
                      placeholder={"Digite seu CPF"}
                      {...inputProps}
                    />
                  )}
                </InputMask>
              </div>
              <div>
                <InputMask
                  mask="(99) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  alwaysShowMask={false}
                >
                  {(inputProps) => (
                    <CustomInput
                      label={"Telefone*"}
                      name={"phone"}
                      error={errorData.phone}
                      placeholder={"Digite seu Telefone"}
                      {...inputProps}
                    />
                  )}
                </InputMask>
              </div>
            </div>

            <PasswordInput
              label={"Nova senha*"}
              name={"password"}
              onChange={handleChange}
              error={errorData.password}
              value={formData.password}
              placeholder={"••••••••"}
            />

            <PasswordInput
              label={"Confirmar senha*"}
              name={"confirmPassword"}
              onChange={handleChange}
              error={errorData.confirmPassword}
              value={formData.confirmPassword}
              placeholder={"••••••••"}
            />
          </div>
          <div className="buttonsFormEdit">
            <button type="submit">Continuar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
