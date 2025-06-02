import { useEffect } from "react";
import "./styles.css";
import "../styles.css";
import UseUser from "../../../../../hooks/useUser";
import { fetchCharges } from "../../../../../services/getUsers";
import { formatCharge } from "../../../../../helpers/FormatCharge";
import { getLocalStorageItem } from "../../../../../helpers/localStorage";
import { useNavigate } from "react-router-dom";

const CardChargesPaid = () => {
  const navigate = useNavigate();

  const token = getLocalStorageItem("token");
  const { clientsChargesPaid, setClientsChargesPaid, quantityChargesFormat } =
    UseUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AllClientsChargesPaid = await fetchCharges(token, "paid");

        const formattedChargesPaid = AllClientsChargesPaid.map(formatCharge);

        setClientsChargesPaid(formattedChargesPaid);
      } catch (error) {
        console.error("Error fetching Paid charges:", error);
      }
    };

    fetchData();
  }, [setClientsChargesPaid, token]);

  function handleSeeAllPaidUp() {
    sessionStorage.setItem("page", "charges");

    sessionStorage.setItem("status-charges", "&status_charge=paid");

    navigate("/charges");
  }

  return (
    <div className="card-cobranca">
      <div className="title-cobranca flex-center">
        <h2>Cobranças Pagas</h2>
        <p id="n-cobranca-pagas">
          {" "}
          {quantityChargesFormat(clientsChargesPaid.length)}
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
          {clientsChargesPaid.slice(0, 4).map((client) => (
            <tr key={client.charge_id}>
              <td>{client.name.split(" ")[0]}</td>
              <td>{client.charge_id}</td>
              <td>{client.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a style={{cursor:"pointer"}} onClick={() => handleSeeAllPaidUp()}>Ver Todos</a>
    </div>
  );
};

export default CardChargesPaid;
