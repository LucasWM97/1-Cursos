import "./style.css";
import Header from "../../components/layout/Header";

import ChargesPaid from "./components/charges/charges-paidup";
import ChargesPlanned from "./components/charges/charges-planned";
import ChargesOverdue from "./components/charges/charges-overdue";

import CardChargesOverdue from "./components/card-charges/card-overdue";
import CardChargesPlanned from "./components/card-charges/card-planned";
import CardChargesPaid from "./components/card-charges/card-paidup/index";

import CardClientsInArrears from "./components/card-clients/card-clients-in-arrears";
import CardClientsPaidUp from "./components/card-clients/card-clients-paidup";
import { UserProvider } from "../../context/Context";
import Navbar from "../../components/navbar";

export const Main = () => {
  return (
    <UserProvider>
      <div style={{ display: "flex" }}>
        <Navbar />
        <div className="main flex-center">
          <div className="content">
            <Header titlePage={"Resumo de Cobranças"} />
            <div className="cards-section">
              <div className="charges-container">
                <ChargesPaid />
                <ChargesPlanned />
                <ChargesOverdue />
              </div>
              <div className="container">
                <CardChargesPaid />
                <CardChargesPlanned />
                <CardChargesOverdue />
              </div>
              <div className="container clients-container-dashboard">
                <CardClientsInArrears />
                <CardClientsPaidUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  );
};
