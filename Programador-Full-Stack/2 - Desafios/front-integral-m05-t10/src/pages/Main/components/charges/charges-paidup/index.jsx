import "./styles.css";
import "../styles.css";
import { useEffect, useState } from "react";
import { api } from "../../../../../lib/axios";
import { formatCurrency } from "../../../../../helpers/FormatCharge";
import { getLocalStorageItem } from "../../../../../helpers/localStorage";

const CobrancaPagas = () => {
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
    fetchVallue("paid");
  }, []);

  return (
    <div className="charges charges-pag">
      <svg
        width="34"
        height="37"
        viewBox="0 0 34 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.0834 35.4167H5.66667C3.08934 35.4167 1 33.3274 1 30.75V6.25004C1 3.67271 3.08934 1.58337 5.66667 1.58337H20.25L30.1667 11.5V20.0001"
          stroke="#1FA7AF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.5846 12.0833H19.668V2.16663"
          stroke="#1FA7AF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.584 30.1666L25.5007 33.6666L33.084 23.1666"
          stroke="#1FA7AF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="charges-info">
        <h3>Cobranças Pagas</h3>

        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default CobrancaPagas;
