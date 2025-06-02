import { useState } from "react";
import ClientFilterIcon from "../../assets/ClientFilterIcon.svg";
import FilterIcon from "../../assets/FilterIcon.svg";
import SearchIcon from "../../assets/Search.svg";
import ChargesIcon from "../../assets/chargesIcon.svg";
import DeleteIcon from "../../assets/deleteIcon.svg";
import newEditIcon from "../../assets/newEditIcon.svg";
import Header from "../../components/layout/Header";
import Navbar from "../../components/navbar";
import { api } from "../../lib/axios";
import { UserProvider } from "../../context/Context";
import "./styles.css";
import { useEffect } from "react";
import { formatCharge } from "../../helpers/FormatCharge";
import ExpectedBillsIcon from "../../assets/expected-bills.svg";
import OverdueBillsIcon from "../../assets/overdue-bills.svg";
import PaidBillsIcon from "../../assets/paid-bills.svg";
import UseUser from "../../hooks/useUser";
import closeIconModal from "../../assets/x.svg";
import ChargeDetailModal from "../../components/delete-DetailChargeModal/delete-DetailCharge";
import { ModalEditCharge } from "../../components/layout/modalEditCharge/modalEditCharge";
import { getLocalStorageItem } from "../../helpers/localStorage";
import { DeleteCharges } from "../../services/deleteCharge";
import ErrorImage from "../../assets/Group 2976.svg";
import { UpdateOneClientStatus } from "../../services/updateStatusOneClient";
import { getChargeById } from "../../services/getChargeById";
import { toastError } from "../../helpers/ToastError";

export function Charges() {
  const token = getLocalStorageItem("token");
  const [search, setSearch] = useState("");
  const [modeOfModal, setModeOfModal] = useState("");
  const [editChargeModalOpen, setEditChargeModalOpen] = useState(false);
  const [selectedCharge, setSelectedCharge] = useState(null);
  const [newRequest, setNewRequest] = useState("");
  const [actualClientPage, setActualClientPage] = useState(1);
  const [clientNumberOfPages, setClientNumberOfPages] = useState();
  const [searchingUp, setSearchingUp] = useState(false);
  const [sort, setSort] = useState("");
  const [sortNum, setSortNum] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);

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

  const { chargesList, setChargesList } = UseUser();

  const seeAllCharges = sessionStorage.getItem("status-charges");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  async function getCharges() {
    try {
      const response = await api.get(
        `users/charges/charge-page?page=${actualClientPage}${newRequest}${sort}${sortNum}${seeAllCharges}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { data } = response.data;

      const formattedData = data.map(formatCharge);

      setChargesList(formattedData);

      setClientNumberOfPages(response.data.totalPages);

      return response;
    } catch (error) {
      console.error;
    }
  }

  async function handleDeleteCharges(idCharge, client_id) {
    await DeleteCharges(idCharge, token, setModeOfModal, getCharges);
    await UpdateOneClientStatus(client_id);
  }

  function handleSetChargeDetailModal(modalDetail) {
    setModeOfModal("detail");
    setChargeDetailed(modalDetail);
  }

  const handleEditChargeModalClose = () => {
    setEditChargeModalOpen(false);
  };

  const handleEditChargeModalOpen = (id) => {
    setSelectedCharge(id);
    setEditChargeModalOpen(true);
  };

  const handleSetId = async (id, client_id) => {
    try {
      const charge = await getChargeById(token, id);

      if (charge.status === "paid") {
        toastError("Não é possível excluir esta cobrança");
        setSelectedCharge(null);
        return;
      }
      setModeOfModal("delete");
      setSelectedCharge(id);
      setSelectedClient(client_id);
    } catch (error) {
      console.error;
    }
  };

  function HandelCloseModal() {
    setModeOfModal("");

    setChargeDetailed({
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

  const handleSearching = () => {
    if (search == "") {
      setNewRequest("");
      setSearchingUp(false);
      return;
    }
    if (search == Number(search)) {
      setNewRequest(`&charge_id=${search}`);
      setSearchingUp(true);
      return;
    }
    setNewRequest(`&name=${search}`);
    setSearchingUp(true);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
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
    setSortNum("");
  };

  const sortNumeric = () => {
    if (sortNum === "") {
      setSortNum("&numericOrder=true");
    } else if (sortNum === "&numericOrder=true") {
      setSortNum("&numericOrder=false");
    } else if (sortNum === "&numericOrder=false") {
      setSortNum("&numericOrder=true");
    }

    setSort("");
  };

  useEffect(() => {
    getCharges();
  }, [actualClientPage, newRequest, sort, sortNum, seeAllCharges]);

  return (
    <UserProvider>
      <div className="page-container ">
        <Navbar />
        <div className="clients-container">
          <Header titlePage={"Cobranças"} />
          <div className="charges_header">
            <div className="clients-icon">
              <img src={ChargesIcon} alt="Client Icon" />
              <span>Cobranças</span>
            </div>

            <div className="union_components">
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
                <img src={SearchIcon} />
              </div>
            </div>
          </div>

          <table className="table-clients">
            <thead>
              <tr>
                <th className="data-title" style={{ paddingLeft: "20px" }}>
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => sortAlphabetically()}
                    src={ClientFilterIcon}
                  ></img>
                  Cliente
                </th>
                <th className="data-title" style={{ paddingLeft: "20px" }}>
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => sortNumeric()}
                    src={ClientFilterIcon}
                  ></img>
                  ID Cob.
                </th>
                <th className="data-title">Valor</th>
                <th className="data-title">Data de venc.</th>
                <th className="data-title">Status</th>
                <th className="data-title">Descrição</th>
                <th className="data-title"></th>
              </tr>
            </thead>
            {searchingUp && chargesList.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="6" style={{ width: "100%", height: "600px" }}>
                    <img src={ErrorImage}></img>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {chargesList.map((person, index) => (
                  <tr key={index} style={{ cursor: "pointer" }}>
                    <td
                      className="data"
                      onClick={() => handleSetChargeDetailModal({ ...person })}
                      style={{ paddingLeft: "20px" }}
                    >
                      {person.name}
                    </td>
                    <td
                      onClick={() => handleSetChargeDetailModal({ ...person })}
                      className="data"
                    >
                      {person.charge_id}
                    </td>
                    <td
                      onClick={() => handleSetChargeDetailModal({ ...person })}
                      className="data"
                    >
                      {person.value}
                    </td>
                    <td
                      onClick={() => handleSetChargeDetailModal({ ...person })}
                      className="data"
                    >
                      {person.due_date}
                    </td>
                    <td>
                      <div
                        onClick={() =>
                          handleSetChargeDetailModal({ ...person })
                        }
                        className={person.status}
                      >
                        {person.status == "Prevista" ? (
                          <img src={ExpectedBillsIcon} />
                        ) : person.status == "Em atraso" ? (
                          <img src={OverdueBillsIcon} />
                        ) : (
                          <img src={PaidBillsIcon} />
                        )}
                      </div>
                    </td>
                    <td
                      onClick={() => handleSetChargeDetailModal({ ...person })}
                      className="data"
                    >{`${person.description.substring(0, 10)}...`}</td>
                    <td className="charges_icons">
                      <img
                        src={newEditIcon}
                        onClick={() =>
                          handleEditChargeModalOpen(person.charge_id)
                        }
                        style={{ cursor: "pointer" }}
                        alt="Ícone"
                      />
                      <img
                        src={DeleteIcon}
                        style={{ cursor: "pointer" }}
                        alt="Ícone"
                        onClick={() =>
                          handleSetId(person.charge_id, person.client_id)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          <div className="page-number">{valorteste}</div>

          {modeOfModal !== "" && (
            <ChargeDetailModal
              HandelCloseModal={HandelCloseModal}
              modeOfModal={modeOfModal}
              closeIconModal={closeIconModal}
              setChargeDetailed={setChargeDetailed}
              ChargesIcon={ChargesIcon}
              chargeDetailed={chargeDetailed}
              ExpectedBillsIcon={ExpectedBillsIcon}
              OverdueBillsIcon={OverdueBillsIcon}
              PaidBillsIcon={PaidBillsIcon}
              DeleteCharges={() =>
                handleDeleteCharges(selectedCharge, selectedClient)
              }
            />
          )}
        </div>
        <ModalEditCharge
          open={editChargeModalOpen}
          onClose={handleEditChargeModalClose}
          chargeId={selectedCharge}
          getCharges={getCharges}
        />
      </div>
    </UserProvider>
  );
}
