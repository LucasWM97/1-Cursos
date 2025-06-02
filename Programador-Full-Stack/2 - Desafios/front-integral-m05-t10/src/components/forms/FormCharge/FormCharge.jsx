import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import X from "../../../assets/x.svg";
import CustomInput from "../../ui/CustomInput";
import CheckboxChecked from "./_assets/checkbox_checked.svg";
import CheckboxUnchecked from "./_assets/checkbox_unchecked.svg";
import { chargeRegister } from "../../../services/chargeRegister";

import "./styles.css";
import { getClientById } from "../../../services/getClientById";
import {
  formatCharge,
  formatCurrencyInput,
} from "../../../helpers/FormatCharge";
import { removeSpecialCharacters } from "../../../helpers/removeFormatString";
import UseUser from "../../../hooks/useUser";
import { getLocalStorageItem } from "../../../helpers/localStorage";

export function FormCharge({ onClose, clientId }) {
  const { setChargesByClient } = UseUser();
  const [isPaid, setIsPaid] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const token = getLocalStorageItem("token");

  useEffect(() => {
    const fetchClient = async () => {
      const result = await getClientById(token, clientId);
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...result,
        status: "expected",
      }));
    };

    fetchClient();
  }, []);

  let [formData, setFormData] = useState({
    name: "",
    description: "",
    due_date: "",
    value: "",
    status: "",
  });

  let [errorData, setErrorData] = useState({
    name: "",
    description: "",
    due_date: "",
    value: "",
  });

  const validateRequiredFields = () => {
    const { name, description, due_date, value } = formData;
    const errors = {};

    if (!name) {
      errors.name = "Campo nome é obrigatório";
    }
    if (!description) {
      errors.description = "Campo descrição é obrigatório";
    }

    if (!due_date) {
      errors.due_date = "Campo vencimento é obrigatório";
    }

    if (!value) {
      errors.value = "Campo valor é obrigatório";
    }

    setErrorData(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;

    if (name === "status") {
      if (value === "paid") {
        setIsPaid(true);
        setIsPending(false);
        setFormData((prevFormData) => ({
          ...prevFormData,
          status: "paid",
        }));
      } else if (value === "expected") {
        setIsPending(true);
        setIsPaid(false);
        setFormData((prevFormData) => ({
          ...prevFormData,
          status: "expected",
        }));
      }
    }
  };

  const handleChargeExpected = () => {
    setIsPending(true);
    setIsPaid(false);
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: "expected",
    }));
  };

  const handleChargePaid = () => {
    setIsPaid(true);
    setIsPending(false);
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: "paid",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const { description, due_date, value, status, name } = formData;

    if (!validateRequiredFields()) {
      return;
    }

    const fixValue = (value) => {
      const valueFormated = removeSpecialCharacters(value);

      return valueFormated;
    };

    const [day, month, year] = due_date.split("/");

    if (+day < 0 || +day > 31) {
      setErrorData((prevErrorData) => ({
        ...prevErrorData,
        due_date: "Digite um dia válido",
      }));
      return;
    }

    if (+month < 0 || +month > 12) {
      setErrorData((prevErrorData) => ({
        ...prevErrorData,
        due_date: "Digite um mês válido",
      }));
      return;
    }

    const formattedDueDate = new Date(`${year}-${month}-${day}`);

    const cobrancaData = {
      description,
      due_date: formattedDueDate,
      value: fixValue(value),
      status,
      name,
    };

    const response = await chargeRegister(
      cobrancaData,
      token,
      onClose,
      clientId
    );

    if (!response) {
      return;
    }

    const formattedCharges = formatCharge(response.charge);
    setChargesByClient((prevChargesByClient) => [
      ...prevChargesByClient,
      formattedCharges,
    ]);
  }

  return (
    <div className="edit-modal">
      <form
        onSubmit={handleSubmit}
        className="box-form"
        noValidate
        autoComplete="off"
      >
        <div className="form-group-container">
          <strong
            style={{ marginBottom: "32px" }}
            className="title-registercharge"
          >
            Cadastro de Cobrança
          </strong>
          <img
            src={X}
            alt="x"
            className="x-registercharge"
            onClick={() => onClose()}
          />
          <div className="forms-container">
            <CustomInput
              label={"Nome*"}
              name={"name"}
              error={errorData.name}
              onChange={handleChange}
              value={formData.name}
              placeholder={"Carregando..."}
              disabled="disabled"
              style={{
                backgroundColor: "#dcdcdc",
                color: "#666",
                cursor: "not-allowed",
              }}
            />

            <label className="descricao-label">Descrição*</label>
            <textarea
              className={
                errorData.description
                  ? "descricao descricao-error"
                  : "descricao"
              }
              id="descricao"
              name="description"
              value={formData.description}
              placeholder="Digite a descrição"
              onChange={handleChange}
              rows="5"
              cols="33"
            ></textarea>
            {errorData.description && (
              <span className="error-descricao">{errorData.description}</span>
            )}

            <div className="vencimentovalor">
              <div>
                <InputMask
                  mask="99/99/9999"
                  alwaysShowMask={false}
                  value={formData.due_date}
                  onChange={handleChange}
                >
                  {(inputProps) => (
                    <CustomInput
                      label={"Vencimento:*"}
                      name={"due_date"}
                      error={errorData.due_date}
                      placeholder={"Data de vencimento"}
                      {...inputProps}
                    />
                  )}
                </InputMask>
              </div>

              <div>
                <CustomInput
                  label={"Valor:*"}
                  name={"value"}
                  error={errorData.value}
                  placeholder={"Digite o valor"}
                  value={formatCurrencyInput(formData.value)}
                  onChange={handleChange}
                />
              </div>
            </div>
            <span className="cobrancastatus-title">Status:</span>
            <div className="cobrancapagacontaier">
              <input
                id="cobrancapaga"
                className="cobrancapaga"
                type="radio"
                name="status"
                value="paid"
                checked={isPaid}
                onChange={handleRadioChange}
              />
              <img
                src={isPaid ? CheckboxChecked : CheckboxUnchecked}
                alt="checkbox-checked"
                onClick={handleChargePaid}
              />
              <label htmlFor="cobrancapaga" className="cobrancapaga-label">
                Cobrança Paga
              </label>
            </div>

            <div className="cobrancapendentecontaier">
              <input
                id="cobrancapendente"
                className="cobrancapendente"
                type="radio"
                name="status"
                value="expected"
                checked={isPending}
                onChange={handleRadioChange}
              />
              <img
                src={isPending ? CheckboxChecked : CheckboxUnchecked}
                alt="checkbox-checked"
                onClick={handleChargeExpected}
              />
              <label
                htmlFor="cobrancapendente"
                className="cobrancapendente-label"
              >
                Cobrança Pendente
              </label>
            </div>
          </div>

          <div className="buttonsForm">
            <button
              className="cancelar"
              type="button"
              onClick={() => onClose()}
            >
              Cancelar
            </button>
            <button className="aplicar" type="submit">
              Aplicar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
