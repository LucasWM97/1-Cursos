import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientFilterIcon from "../../assets/ClientFilterIcon.svg";
import FilterIcon from "../../assets/FilterIcon.svg";
import ErrorImage from "../../assets/Group 2976.svg";
import SearchIcon from "../../assets/Search.svg";
import ChargeIcon from "../../assets/chargeButton.svg";
import ClientsIcon from "../../assets/client1.svg";
import { FormModal } from "../../components/layout/FormModal";
import Header from "../../components/layout/Header";
import { ModalRegisterCharge } from "../../components/layout/modalRegisterCharge/modalRegisterCharge";
import Navbar from "../../components/navbar";
import { formatData } from "../../helpers/FormatDataClient";
import { getLocalStorageItem } from "../../helpers/localStorage";
import UseUser from "../../hooks/useUser";
import { api } from "../../lib/axios";
import "./style.css";

export function ClientPage() {
  const navigate = useNavigate();
  const token = getLocalStorageItem("token");
  const [search, setSearch] = useState("");
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [registerChargeModalOpen, setRegisterChargeModalOpen] = useState(false);
  const [clientNumberOfPages, setClientNumberOfPages] = useState();
  const [actualClientPage, setActualClientPage] = useState(1);
  const [newRequest, setNewRequest] = useState("");
  const [searchingUp, setSearchingUp] = useState(false);
  const [localUsers, setLocalUsers] = useState([]);
  const [sort, setSort] = useState("");

  const { client_ID, setClient_ID, users, setUsers } = UseUser();

  const seeAllFilter = sessionStorage.getItem("status");

  useEffect(() => {
    setLocalUsers(users);
  }, [users]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearching = () => {
    if (search == "") {
      setNewRequest("");
      setSearchingUp(false);
      setActualClientPage(1);
      return;
    }
    if (search.match(".com")) {
      setNewRequest(`&email=${search}`);
      setSearchingUp(true);
      setActualClientPage(1);
      return;
    }
    if (search == Number(search)) {
      setNewRequest(`&cpf=${search}`);
      setSearchingUp(true);
      setActualClientPage(1);
      return;
    }
    setNewRequest(`&name=${search}`);
    setSearchingUp(true);
    setActualClientPage(1);
  };

  function handleGoToClientsDetail(id) {
    sessionStorage.setItem("client_id", id);
    setClient_ID(id);
    navigate("/clientDetail");
  }
  async function handleLoading() {
    try {
      const response = await api.get(
        `users/clients/client-page?page=${actualClientPage}${newRequest}${sort}${seeAllFilter}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const { data } = response.data;

      const formatedDataClients = formatData(data);

      setUsers(formatedDataClients);

      setClientNumberOfPages(response.data.totalPages);

      return response;
    } catch (error) {
      console.error;
    }
  }

  const hanndleActualPage = (index) => {
    setActualClientPage(Number(index));
  };

  const valorteste = Array.from({ length: clientNumberOfPages }, (_, index) => (
    <span
      className={
        index + 1 == actualClientPage ? "styled-number" : "patern-number"
      }
      onClick={() => hanndleActualPage(index + 1)}
      key={index}
    >
      {index + 1}
    </span>
  ));

  const handleRegisterChargeModalClose = () => {
    setRegisterChargeModalOpen(false);
  };

  const handleRegisterChargeModalOpen = (id) => {
    setClient_ID(id);
    setSelectedClientId(id);
    setRegisterChargeModalOpen(true);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      sessionStorage.setItem("status", "");
      setSort("");
      handleSearching();
    }
  };

  const sortAlphabetically = () => {
    if (sort === "") {
      setSort("&alphabetical=true");
    } else if (sort === "&alphabetical=true") {
      setSort("&alphabetical=false");
    } else if (sort === "&alphabetical=false") {
      setSort("&alphabetical=true");
    }
  };

  useEffect(() => {
    setClient_ID("");
    handleLoading();
  }, [actualClientPage, newRequest, sort, seeAllFilter]);

  return (
    <div className="page-container">
      <Navbar />
      <div className="clients-container">
        <Header titlePage={"Clientes"} pageClient={"Clientes"} />
        <div className="clients-header">
          <div className="clients-icon">
            <img src={ClientsIcon} alt="Client Icon" />
            <span>Clientes</span>
          </div>
          <FormModal pageName={"Clientes"} />
          <img src={FilterIcon} className="filter-button"></img>
          <div className="search">
            <input
              type="text"
              id="caixaTexto"
              value={search}
              onChange={handleSearch}
              placeholder="Pesquisa"
              onKeyDown={handleEnter}
            />
            <img
              style={{ cursor: "pointer" }}
              onClick={handleSearching}
              src={SearchIcon}
            />
          </div>
        </div>
        <table className="table-clients">
          <thead>
            <tr>
              <th className="data-title" style={{ paddingLeft: "20px" }}>
                <img
                  src={ClientFilterIcon}
                  onClick={() => sortAlphabetically()}
                  style={{ cursor: "pointer" }}
                ></img>
                Cliente
              </th>
              <th className="data-title">CPF</th>
              <th className="data-title">E-mail</th>
              <th className="data-title">Telefone</th>
              <th className="data-title">Status</th>
              <th className="data-title">Criar Cobrança</th>
            </tr>
          </thead>
          {searchingUp && localUsers.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="6" style={{ width: "100%", height: "600px" }}>
                  <img src={ErrorImage}></img>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {localUsers.map((person, index) => (
                <tr key={index}>
                  <td
                    className="data"
                    onClick={() => handleGoToClientsDetail(person.id)}
                    style={{cursor:"pointer"}}
                  >
                    {person.name}
                  </td>

                  <td className="data">{person.cpf}</td>
                  <td className="data">{person.email}</td>
                  <td className="data">{person.phone}</td>
                  <td>
                    <div
                      className={
                        person.status === "paidup" ? "defaulting" : "defaulter"
                      }
                    >
                      {person.status === "paidup" ? (
                        <span>Em dia</span>
                      ) : (
                        <span>Inadimplente</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <img
                      src={ChargeIcon}
                      onClick={() => handleRegisterChargeModalOpen(person.id)}
                      style={{ cursor: "pointer" }}
                      alt={client_ID}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        <div className="page-number">{valorteste}</div>
      </div>
      <ModalRegisterCharge
        open={registerChargeModalOpen}
        onClose={handleRegisterChargeModalClose}
        clientId={selectedClientId}
      />
    </div>
  );
}
