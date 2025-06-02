import "./styles.css";
import "../styles.css";
import UseUser from "../../../../../hooks/useUser";
import { useEffect, useState } from "react";
import { fetchClients } from "../../../../../services/getUsers";
import {
  formatChargeID,
  formatData,
} from "../../../../../helpers/FormatDataClient";
import { getLocalStorageItem } from "../../../../../helpers/localStorage";
import { useNavigate } from "react-router-dom";

const CardClientesInadimplentes = () => {
  const navigate = useNavigate();

  const token = getLocalStorageItem("token");

  const { quantityChargesFormat } = UseUser();
  const [clientsDataInArrears, setClientsDataInArrears] = useState([]);

  useEffect(() => {
    const fetchDataClient = async () => {
      const response = await fetchClients(token, "in-arrears");

      const formatedClients = formatData(response);

      setClientsDataInArrears(formatedClients);
    };
    fetchDataClient();
  }, []);

  const handleSeeAllInArrears = () => {
    sessionStorage.setItem("page", "clients");

    sessionStorage.setItem("status", "&status_client=in_arrears");
    navigate("/clients");
  };

  return (
    <div className="card-clients ">
      <div className="title-clients">
        <div className="flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 11.25C13.7949 11.25 15.25 9.79493 15.25  8C15.25 6.20507 13.7949 4.75 12 4.75C10.2051 4.75 8.75 6.20507 8.75 8C8.75 9.79493 10.2051 11.25 12 11.25Z"
              stroke="#971D1D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.2502 19.25H6.94974C5.77025 19.25 4.8901 18.2103 5.49106 17.1954C6.36268 15.7234 8.23956 14 12.2502 14"
              stroke="#971D1D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.25 19.25L15.75 15.75"
              stroke="#971D1D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.75 19.25L19.25 15.75"
              stroke="#971D1D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2>Clientes Inadimplentes</h2>
        </div>
        <div className="qt-cob-prev flex-center">
          <p>{quantityChargesFormat(clientsDataInArrears.length)}</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>ID da Clie.</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {clientsDataInArrears.slice(0, 4).map((client) => (
            <tr key={client.name + client.id}>
              <td>{client.name.split(" ")[0]}</td>
              <td>{formatChargeID(client.id)}</td>
              <td>{client.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a style={{cursor:"pointer"}} onClick={() => handleSeeAllInArrears()}>Ver Todos</a>
    </div>
  );
};

export default CardClientesInadimplentes;
