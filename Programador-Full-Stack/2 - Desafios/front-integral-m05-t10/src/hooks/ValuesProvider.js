import { useState } from "react";

export default function ValuesProvider() {
  //client-detail
  const [client_ID, setClient_ID] = useState("");
  const [chargesList, setChargesList] = useState([]);
  const [chargesByClient, setChargesByClient] = useState([]);
  const [registerChargeModalOpen, setRegisterChargeModalOpen] = useState(false);
  const [client, setClient] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    cep: "",
    address: "",
    complement: "",
    district: "",
    city: "",
    uf: "",
  });

  //clients-page
  const [users, setUsers] = useState([]);

  //dashboard
  const [clientsChargesPaid, setClientsChargesPaid] = useState([]);
  const [clientsChargesPlanned, setClientsChargesPlanned] = useState([]);
  const [clientsChargesOverdue, setClientsChargesOverdue] = useState([]);

  //login
  const [open, setOpen] = useState(false);
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //nav
  const [homeIconColor, setHomeIconColor] = useState("#343447");
  const [chargeIconColor, setChargeIconColor] = useState("#343447");
  const [clientsIconColor, setClientsIconColor] = useState("#343447");
  const [currentPage, setCurrentPage] = useState("");

  const quantityChargesFormat = (number) => {
    return number.toString().padStart(2, 0);
  };

  return {
    users,
    setUsers,
    signUpForm,
    setSignUpForm,
    open,
    setOpen,
    chargesByClient,
    setChargesByClient,

    registerChargeModalOpen,
    setRegisterChargeModalOpen,

    homeIconColor,
    setHomeIconColor,
    chargeIconColor,
    setChargeIconColor,
    clientsIconColor,
    setClientsIconColor,
    currentPage,
    setCurrentPage,

    //CLIENTE

    client_ID,
    setClient_ID,

    //HEADER

    //CHARGES
    clientsChargesPaid,
    setClientsChargesPaid,
    clientsChargesPlanned,
    setClientsChargesPlanned,
    clientsChargesOverdue,
    setClientsChargesOverdue,

    quantityChargesFormat,
    setClient,
    client,

    chargesList,
    setChargesList,
  };
}
