import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import iconeCadastrar from "../../../assets/iconeCadastrar.svg";
import { FormatDataClient } from "../../../helpers/FormatDataClient";
import { removeSpecialCharacters } from "../../../helpers/removeFormatString";
import UseUser from "../../../hooks/useUser";
import { clientEdit } from "../../../services/clientEdit";
import { clientRegister } from "../../../services/clientRegister";
import { getClientById } from "../../../services/getClientById";
import CustomInput from "../../ui/CustomInput";
import "./styles.css";
import { validateEmail } from "../../../helpers/ValidateEmail";
import { handleZipCodeBlur } from "../../../services/handleZipCodeBlur";
import { getLocalStorageItem } from "../../../helpers/localStorage";

export function FormModalDefault({ pageName, onClose }) {
  const token = getLocalStorageItem("token");

  const { client_ID, setClient, users, setUsers } = UseUser();

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    cep: "",
    address: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  });

  let [errorData, setErrorData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    cep: "",
    address: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchClientData = async () => {
      if (pageName === "Editar clientes") {
        const result = await getClientById(token, client_ID);

        setFormData((prevFormData) => ({
          ...prevFormData,
          ...result,
        }));
      }
    };
    fetchClientData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrorData({ ...errorData, [name]: "" });
  };

  const validateRequiredFields = () => {
    const { name, email, phone, cpf } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Campo nome é obrigatório";
    }

    if (!email.trim()) {
      errors.email = "Campo email é obrigatório";
    } else if (!validateEmail(email)) {
      errors.email = "Digite um e-mail válido";
    }

    if (!phone.trim()) {
      errors.phone = "Campo telefone é obrigatório";
    }

    if (!cpf.trim()) {
      errors.cpf = "Campo cpf é obrigatório";
    }

    setErrorData(errors);
    return Object.keys(errors).length === 0;
  };

  const validateCPF = () => {
    const cpfWithoutFormat = removeSpecialCharacters(formData.cpf);
    const errors = {};

    if (cpfWithoutFormat.length < 11 || cpfWithoutFormat.length > 11) {
      errors.cpf = "Digite um CPF válido";
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

    const {
      name,
      email,
      phone,
      cpf,
      cep,
      address,
      complement,
      district,
      city,
      uf,
    } = formData;

    const clientData = {
      name: name.trim(),
      email: email.trim(),
      cpf: removeSpecialCharacters(cpf),
      phone: removeSpecialCharacters(phone),
      cep: removeSpecialCharacters(cep),
      address: address?.trim(),
      complement: complement?.trim(),
      district: district?.trim(),
      city: city?.trim(),
      uf: uf?.trim(),
    };

    if (pageName === "Clientes") {
      const response = await clientRegister(clientData, token, onClose);

      if (response === "Email already registered") {
        setErrorData((prevErrorData) => ({
          ...prevErrorData,
          email: "Email já registrado",
        }));
      }
      if (response === "CPF already registered") {
        setErrorData((prevErrorData) => ({
          ...prevErrorData,
          cpf: "Cpf já registrado",
        }));
      }
      if (response.message === "the email must have a valid format") {
        setErrorData((prevErrorData) => ({
          ...prevErrorData,
          email: "Email com formato inválido",
        }));
      }

      const result = FormatDataClient(response.data.client);

      if (users.length < 10) {
        setUsers([result, ...users]);
        return;
      }

      users.pop();
      setUsers([result, ...users]);

      return;
    }

    if (pageName === "Editar clientes") {
      const response = await clientEdit(clientData, client_ID, token, onClose);

      const result = await getClientById(token, client_ID);
      const formatedResult = await FormatDataClient(result);

      setClient(formatedResult);

      if (response === "Email already registered") {
        setErrorData((prevErrorData) => ({
          ...prevErrorData,
          email: "Email já registrado",
        }));
      }
      if (response === "Cpf already registered") {
        setErrorData((prevErrorData) => ({
          ...prevErrorData,
          cpf: "Cpf já registrado",
        }));
      }
      return;
    }
  }

  return (
    <div>
      <div className="register-client-modal">
        <form
          onSubmit={handleSubmit}
          className="box-form-register"
          noValidate
          autoComplete="off"
        >
          <div className="form-group-container-register-client">
            <div className="title-register-container">
              <CloseIcon onClick={onClose} className="close-icon" />
              <img src={iconeCadastrar} alt="" />
              <h2 className="title">{pageName}</h2>
            </div>

            <div className="forms-container-register-client">
              <CustomInput
                label="Nome*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite o nome"
                error={errorData.name}
              />

              <CustomInput
                label="Email*"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite o e-mail"
                error={errorData.email}
              />

              <div className="first-type-division">
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
                      placeholder={"Digite o CPF"}
                      {...inputProps}
                    />
                  )}
                </InputMask>

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
                      placeholder={"Digite o Telefone"}
                      {...inputProps}
                    />
                  )}
                </InputMask>
              </div>

              <CustomInput
                label="Endereço"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Digite o endereço"
                error={errorData.address}
              />

              <CustomInput
                label="Complemento"
                name="complement"
                value={formData.complement}
                onChange={handleChange}
                placeholder="Digite o complemento"
                error={errorData.complement}
              />

              <div className="first-type-division">
                <InputMask
                  mask="99999-999"
                  value={formData.cep}
                  onChange={handleChange}
                  onBlur={() => handleZipCodeBlur(setFormData, formData.cep)}
                  alwaysShowMask={false}
                >
                  {(inputProps) => (
                    <CustomInput
                      label={"Cep"}
                      name={"cep"}
                      error={errorData.cep}
                      placeholder={"Digite o Cep"}
                      {...inputProps}
                    />
                  )}
                </InputMask>

                <CustomInput
                  label="Bairro"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="Digite o bairro"
                  error={errorData.district}
                />
              </div>

              <div className="second-type-division">
                <div>
                  <CustomInput
                    label="Cidade"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Digite a cidade"
                    error={errorData.city}
                  />
                </div>

                <div className="uf-client">
                  <CustomInput
                    label="UF"
                    name="uf"
                    value={formData.uf}
                    onChange={handleChange}
                    placeholder="Digite a UF"
                    error={errorData.uf}
                  />
                </div>
              </div>
            </div>

            <div className="buttons-register-client">
              <button className="cancel" type="button" onClick={onClose}>
                Cancelar
              </button>
              <button className="apply" type="submit">
                Aplicar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
