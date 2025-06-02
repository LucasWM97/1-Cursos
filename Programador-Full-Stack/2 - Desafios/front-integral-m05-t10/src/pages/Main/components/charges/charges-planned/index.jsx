import "./styles.css";
import "../styles.css";
import { useEffect, useState } from "react";
import { api } from "../../../../../lib/axios";
import { formatCurrency } from "../../../../../helpers/FormatCharge";
import { getLocalStorageItem } from "../../../../../helpers/localStorage";

const CobrancasPrevistas = () => {
  const token = getLocalStorageItem("token");
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchVallue = async (status) => {
      try {
        const response = await api.get(`/charges/${status}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setValue(formatCurrency(response.data.totalValue));
      } catch (error) {
        console.error("Erro ao buscar clientes em dia:", error);
        return [];
      }
    };
    fetchVallue("expected");
  }, []);

  return (
    <div className="charges charges-pre">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="37"
        viewBox="0 0 31 37"
        fill="none"
      >
        <path
          d="M13.6673 34.6875H5.50065C2.92332 34.6875 0.833984 32.5982 0.833984 30.0208V5.52079C0.833984 2.94346 2.92332 0.854126 5.50065 0.854126H20.084L30.0007 10.7708V34.6875"
          stroke="#C5A605"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.4186 11.354H19.502V1.43738"
          stroke="#C5A605"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.543 20.1041V25.9375"
          stroke="#C5A605"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.0007 34.6875C23.0007 35.4928 22.3476 36.1458 21.5423 36.1458C20.737 36.1458 20.084 35.4928 20.084 34.6875C20.084 33.8822 20.737 33.2291 21.5423 33.2291C22.3476 33.2291 23.0007 33.8822 23.0007 34.6875Z"
          stroke="#C5A605"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="charges-info">
        <h3>Cobranças Previstas</h3>

        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default CobrancasPrevistas;
