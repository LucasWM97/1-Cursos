import ExpectedBillsIcon from "../../../assets/expected-bills.svg";
import OverdueBillsIcon from "../../../assets/overdue-bills.svg";
import PaidBillsIcon from "../../../assets/paid-bills.svg";
import ChargeDetailModal from "../../../components/delete-DetailChargeModal/delete-DetailCharge";
import { ModalEditCharge } from "../../../components/layout/modalEditCharge/modalEditCharge";
import ChargesIcon from "../../../assets/chargesIcon.svg";
import { ModalRegisterCharge } from "../../../components/layout/modalRegisterCharge/modalRegisterCharge";
export function CardChargeClient({
  chargesClient,
  ClientFilterIcon,
  editIcon2,
  trashIcon,
  client_ID,
  registerChargeModalOpen,
  handleRegisterChargeModalClose,
  handleRegisterChargeModalOpen,
  editChargeModalOpen,
  handleEditChargeModalOpen,
  handleEditChargeModalClose,
  selectedCharge,
  chargeDetailed,
  modeOfModal,
  handleSetChargeDetailModal,
  closeIconModal,
  HandelCloseModal,
  handleDeleteCharges,
  handleSetId,
  getCharges,
  sortId,
  sortDueDate,
}) {
  return (
    <>
      <div className="client-charges-card  flex-center-column">
        <header className="heading">
          <h1>Cobranças do Cliente</h1>
          <button
            onClick={() => handleRegisterChargeModalOpen(client_ID)}
            className="new-charge-button"
          >
            + Nova cobrança
          </button>
        </header>

        <div className="charges-client">
          <table className="table-charges-client">
            <thead>
              <tr>
                <th className="">
                  <img onClick={() => sortId()} src={ClientFilterIcon} />
                  ID Cobrança
                </th>
                <th className="">
                  <img onClick={() => sortDueDate()} src={ClientFilterIcon} />
                  Data de vencimento
                </th>
                <th className="">Valor</th>
                <th className="">Status</th>
                <th className="">Descrição</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {chargesClient.map((charge) => (
                <tr
                  style={{ borderTop: "1px solid #EFF0F6" }}
                  key={charge.charge_id}
                >
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSetChargeDetailModal({ ...charge })}
                  >
                    {charge.charge_id}
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSetChargeDetailModal({ ...charge })}
                  >
                    {charge.due_date}
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSetChargeDetailModal({ ...charge })}
                  >
                    {charge.value}
                  </td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSetChargeDetailModal({ ...charge })}
                  >
                    {charge.status == "Prevista" ? (
                      <img src={ExpectedBillsIcon} />
                    ) : charge.status == "Em atraso" ? (
                      <img src={OverdueBillsIcon} />
                    ) : (
                      <img src={PaidBillsIcon} />
                    )}
                  </td>
                  <td>{charge.description}</td>
                  <td className="icons-cell">
                    <img
                      onClick={() =>
                        handleEditChargeModalOpen(charge.charge_id)
                      }
                      src={editIcon2}
                      alt="edit icon"
                    />
                    <img
                      onClick={() => handleSetId(charge.charge_id)}
                      src={trashIcon}
                      alt="trash icon"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ModalRegisterCharge
          open={registerChargeModalOpen}
          onClose={handleRegisterChargeModalClose}
          clientId={client_ID}
        />
        <ModalEditCharge
          open={editChargeModalOpen}
          onClose={handleEditChargeModalClose}
          chargeId={selectedCharge}
          getCharges={getCharges}
        />
      </div>
      {modeOfModal !== "" && (
        <ChargeDetailModal
          HandelCloseModal={HandelCloseModal}
          modeOfModal={modeOfModal}
          closeIconModal={closeIconModal}
          DeleteCharges={() => handleDeleteCharges(selectedCharge)}
          chargeDetailed={chargeDetailed}
          ExpectedBillsIcon={ExpectedBillsIcon}
          OverdueBillsIcon={OverdueBillsIcon}
          PaidBillsIcon={PaidBillsIcon}
          ChargesIcon={ChargesIcon}
        />
      )}
    </>
  );
}
