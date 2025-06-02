import { useEffect } from "react";
import "./styles.css";
import "../styles.css";
import UseUser from "../../../../../hooks/useUser";
import { fetchCharges } from "../../../../../services/getUsers";
import { formatCharge } from "../../../../../helpers/FormatCharge";
import { getLocalStorageItem } from "../../../../../helpers/localStorage";
import { useNavigate } from "react-router-dom";

const CardChargesPlanned = () => {
  const navigate = useNavigate();

  const token = getLocalStorageItem("token");
  const { quantityChargesFormat } = UseUser();
  const { clientsChargesPlanned, setClientsChargesPlanned } = UseUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AllClientsChargesPlanned = await fetchCharges(token, "expected");

        const formattedChargesPlanned =
          AllClientsChargesPlanned.map(formatCharge);

        setClientsChargesPlanned(formattedChargesPlanned);
      } catch (error) {
        console.error("Error fetching Planned charges:", error);
      }
    };

    fetchData();
  }, [setClientsChargesPlanned, token]);

  function handleSeeAllPlanned() {
    sessionStorage.setItem("page", "charges");

    sessionStorage.setItem("status-charges", "&status_charge=expected");

    navigate("/charges");
  }

  return (
    <div className="card-cobranca" style={{ display: "flex" }}>
      <div className="title-cobranca flex-center">
        <h2>Cobranças Previstas</h2>
        <p id="n-cobranca-previstas">
          {" "}
          {quantityChargesFormat(clientsChargesPlanned.length)}
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
          {clientsChargesPlanned.slice(0, 4).map((client) => (
            <tr key={client.charge_id}>
              <td>{client.name.split(" ")[0]}</td>
              <td>{client.charge_id}</td>
              <td>{client.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a style={{cursor:"pointer"}} onClick={() => handleSeeAllPlanned()}>Ver Todos</a>
    </div>
  );
};

export default CardChargesPlanned;
