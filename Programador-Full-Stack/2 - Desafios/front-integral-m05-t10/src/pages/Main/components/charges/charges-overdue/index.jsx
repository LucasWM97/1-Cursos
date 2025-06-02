import "./styles.css";
import "../styles.css";
import { useEffect, useState } from "react";
import { api } from "../../../../../lib/axios";
import { formatCurrency } from "../../../../../helpers/FormatCharge";
import { getLocalStorageItem } from "../../../../../helpers/localStorage";

const CobrancasVencidas = () => {
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
    fetchVallue("overdue");
  }, []);

  return (
    <div className="charges charges-v">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="37"
        viewBox="0 0 31 37"
        fill="none"
      >
        <path
          d="M14.4154 35.4167H5.4987C2.92137 35.4167 0.832031 33.3274 0.832031 30.75V6.25004C0.832031 3.67271 2.92137 1.58337 5.4987 1.58337H20.082L29.9987 11.5V20.5001"
          stroke="#971D1D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.5078 32.4114L17.4164 22.6796"
          stroke="#971D1D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5964 32.5914L27.3281 22.5"
          stroke="#971D1D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.4167 12.0833H19.5V2.16663"
          stroke="#971D1D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="charges-info">
        <h3>Cobranças Vencidas</h3>

        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default CobrancasVencidas;
