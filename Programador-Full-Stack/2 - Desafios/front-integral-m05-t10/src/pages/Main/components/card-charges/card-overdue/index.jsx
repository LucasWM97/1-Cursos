import { useEffect } from "react";
import "./styles.css";
import "../styles.css";
import UseUser from "../../../../../hooks/useUser";

import { fetchCharges } from "../../../../../services/getUsers";
import { formatCharge } from "../../../../../helpers/FormatCharge";
import { getLocalStorageItem } from "../../../../../helpers/localStorage";
import { useNavigate } from "react-router-dom";

const CardChargesOverdue = () => {
  const navigate = useNavigate();

  const token = getLocalStorageItem("token");
  const { quantityChargesFormat } = UseUser();
  const { clientsChargesOverdue, setClientsChargesOverdue } = UseUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AllClientsChargesOverdue = await fetchCharges(token, "overdue");

        const formattedChargesOverdue =
          AllClientsChargesOverdue.map(formatCharge);

        setClientsChargesOverdue(formattedChargesOverdue);
      } catch (error) {
        console.error("Error fetching overdue charges:", error);
      }
    };

    fetchData();
  }, [setClientsChargesOverdue, token]);

  function handleSeeAllOverdure() {
    sessionStorage.setItem("page", "charges");

    sessionStorage.setItem("status-charges", "&status_charge=overdue");
    navigate("/charges");
  }

  return (
    <div className="card-cobranca">
      <div className="title-cobranca flex-center">
        <h2>Cobranças Vencidas</h2>
        <p id="n-cobranca-vencidas">
          {" "}
          {quantityChargesFormat(clientsChargesOverdue.length)}
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>ID da Cob.</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {clientsChargesOverdue.slice(0, 4).map((client) => (
            <tr key={client.charge_id}>
              <td>{client.name.split(" ")[0]}</td>
              <td>{client.charge_id}</td>
              <td> {client.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a style={{cursor:"pointer"}} onClick={() => handleSeeAllOverdure()}>Ver Todos</a>
    </div>
  );
};

export default CardChargesOverdue;
