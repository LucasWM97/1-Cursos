import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientFilterIcon from "../../assets/ClientFilterIcon.svg";
import ClientsIcon from "../../assets/client1.svg";
import editIcon2 from "../../assets/editIcon2.svg";
import trashIcon from "../../assets/trashIcon.svg";
import Header from "../../components/layout/Header";
import Navbar from "../../components/navbar";
import { formatCharge } from "../../helpers/FormatCharge";
import UseUser from "../../hooks/useUser";
import { api } from "../../lib/axios";
import { CardChargeClient } from "./components/cardChargeClient";
import { CardClientData } from "./components/cardClient";
import closeIconModal from "../../assets/x.svg";
import "./styles.css";
import { FormatDataClient } from "../../helpers/FormatDataClient";
import { getLocalStorageItem } from "../../helpers/localStorage";
import { DeleteCharges } from "../../services/deleteCharge";
import { UpdateOneClientStatus } from "../../services/updateStatusOneClient";
import { getChargeById } from "../../services/getChargeById";
import { toastError } from "../../helpers/ToastError";

export function ClientDetail() {
  const navigate = useNavigate();
  const { chargesByClient, setChargesByClient } = UseUser();
  const [registerChargeModalOpen, setRegisterChargeModalOpen] = useState(false);
  const [editChargeModalOpen, setEditChargeModalOpen] = useState(false);
  const [selectedCharge, setSelectedCharge] = useState(null);

  const [sort, setSort] = useState(false);

  const [modeOfModal, setModeOfModal] = useState("");

  const [chargeDetailed, setChargeDetailed] = useState({
    charge_id: "",
    client_id: "",
    createdat: "",
    description: "",
    due_date: "",
    name: "",
    status: "",
    updatedat: "",
    user_id: "",
    value: "",
  });

  const { client, setClient } = UseUser();

  const client_ID = sessionStorage.getItem("client_id");

  const token = getLocalStorageItem("token");

  async function handleSetChargeDetailModal(modalDetail) {
    setModeOfModal("detail");
    setChargeDetailed(modalDetail);
  }

  const handleRegisterChargeModalClose = () => {
    setRegisterChargeModalOpen(false);
  };

  const handleRegisterChargeModalOpen = () => {
    setRegisterChargeModalOpen(true);
  };

  const handleEditChargeModalClose = () => {
    setEditChargeModalOpen(false);
  };

  const handleEditChargeModalOpen = (id) => {
    setSelectedCharge(id);
    setEditChargeModalOpen(true);
  };

  function HandelCloseModal() {
    setModeOfModal("");
  }

  async function getClientData() {
    try {
      const response = await api.get(`/clients/${client_ID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { client } = response.data;

      const result = await FormatDataClient(client);

      setClient(result);
    } catch (error) {
      navigate("/clients");
    }
  }

  async function getChargesClient() {
    try {
      const response = await api.get(`/clients/charges/${client_ID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { charges } = response.data;

      const formattedCharges = charges.map(formatCharge);

      setChargesByClient(formattedCharges);
    } catch (error) {
      console.error;
    }
  }

  async function handleDeleteCharges(idCharge) {
    await DeleteCharges(idCharge, token, setModeOfModal, getChargesClient);
    await UpdateOneClientStatus(client.id);
  }

  const handleSetId = async (id) => {
    try {
      const charge = await getChargeById(token, id);

      if (charge.status === "paid") {
        toastError("Não é possível excluir esta cobrança");
        setSelectedCharge(null);
        return;
      }
      setModeOfModal("delete");
      setSelectedCharge(id);
    } catch (error) {
      console.error;
    }
  };

  const sortId = () => {
    const sortedCharges = [...chargesByClient].sort((a, b) => {
      if (!sort) {
        return b.charge_id - a.charge_id;
      } else {
        return a.charge_id - b.charge_id;
      }
    });

    setSort(!sort);
    setChargesByClient(sortedCharges);
  };

  const sortDueDate = () => {
    const sortedCharges = [...chargesByClient].sort((a, b) => {
      const dateA = new Date(a.due_date);
      const dateB = new Date(b.due_date);

      if (!sort) {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

    setSort(!sort);
    setChargesByClient(sortedCharges);
  };

  useEffect(() => {
    getClientData();
    getChargesClient();
  }, []);

  return (
    <div className="client-detail-page-container">
      <Navbar />

      <main className="client-detail-main">
        <Header
          titlePage={""}
          pageClient={"Clientes"}
          pageClientDetail={"Editar clientes"}
        />

        <section className="client-detail-content">
          <header className="client-name">
            <img src={ClientsIcon} alt="Client Icon" />
            <h1>{client.name}</h1>
          </header>

          <CardClientData client={client} />

          <CardChargeClient
            chargesClient={chargesByClient}
            ClientFilterIcon={ClientFilterIcon}
            editIcon2={editIcon2}
            trashIcon={trashIcon}
            client_ID={client_ID}
            registerChargeModalOpen={registerChargeModalOpen}
            handleRegisterChargeModalClose={handleRegisterChargeModalClose}
            handleRegisterChargeModalOpen={handleRegisterChargeModalOpen}
            editChargeModalOpen={editChargeModalOpen}
            handleEditChargeModalOpen={handleEditChargeModalOpen}
            handleEditChargeModalClose={handleEditChargeModalClose}
            selectedCharge={selectedCharge}
            modeOfModal={modeOfModal}
            closeIconModal={closeIconModal}
            HandelCloseModal={HandelCloseModal}
            handleDeleteCharges={() => handleDeleteCharges(selectedCharge)}
            handleSetId={handleSetId}
            getCharges={getChargesClient}
            sortId={() => sortId()}
            sortDueDate={() => sortDueDate()}
            handleSetChargeDetailModal={handleSetChargeDetailModal}
            chargeDetailed={chargeDetailed}
          />
        </section>
      </main>
    </div>
  );
}
