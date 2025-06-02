import alertIcon from "../../assets/alertIcon.svg";

export default function ChargeDetailModal(props) {
  const { modeOfModal, closeIconModal, HandelCloseModal } = props;

  return (
    <div className="modal-background">
      <div className={`card-modal ${modeOfModal === "delete" ? "alert" : ''}`}>
        {modeOfModal === "detail" ? (
          <>
            <img
              src={closeIconModal}
              alt="close icon"
              className="close-icon"
              onClick={() => HandelCloseModal()}
            />

            <div className="heading-modal-charge">
              <img src={props.ChargesIcon} alt="" />
              <h1>Detalhes da cobrança</h1>
            </div>

            <div>
              <h3>Nome</h3>
              <span>{props.chargeDetailed.name}</span>
            </div>

            <div>
              <h3>Descrição</h3>
              <p>{props.chargeDetailed.description}</p>
            </div>

            <table className="oters-detail-charge">
              <thead>
                <tr>
                  <th>Vencimento</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.chargeDetailed.due_date}</td>
                  <td>{props.chargeDetailed.value}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>ID cobranças</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.chargeDetailed.charge_id}</td>
                  <td>
                    <div className={props.chargeDetailed.status}>
                      {props.chargeDetailed.status == "Prevista" ? (
                        <img src={props.ExpectedBillsIcon} />
                      ) : props.chargeDetailed.status == "Em atraso" ? (
                        <img src={props.OverdueBillsIcon} />
                      ) : (
                        <img src={props.PaidBillsIcon} />
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <img
              src={closeIconModal}
              alt="close icon"
              className="close-icon"
              onClick={() => HandelCloseModal()}
            />
            <img src={alertIcon} alt="alert icon" />
            <p className="text-confirm-delete">
              Tem certeza que deseja excluir esta cobrança?
            </p>
            <div className="buttons-delete">
              <button onClick={() => HandelCloseModal()} className="button-no">
                Não
              </button>
              <button
                onClick={() => props.DeleteCharges()}
                className="button-yes"
              >
                Sim
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
