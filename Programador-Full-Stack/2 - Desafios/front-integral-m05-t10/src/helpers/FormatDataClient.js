function formatCPF(cpf) {
  return (
    cpf.slice(0, 3) +
    "." +
    cpf.slice(3, 6) +
    "." +
    cpf.slice(6, 9) +
    "-" +
    cpf.slice(9)
  );
}

function formatPhone(phone) {
  if (phone.length === 10) {
    return (
      "(" + phone.slice(0, 2) + ") " + phone.slice(2, 6) + "-" + phone.slice(6)
    );
  } else if (phone.length === 11) {
    return (
      "(" +
      phone.slice(0, 2) +
      ") " +
      phone.slice(2, 3) +
      " " +
      phone.slice(3, 7) +
      "-" +
      phone.slice(7)
    );
  } else {
    return phone;
  }
}
function formatCEP(cep) {
  if (!cep) {
    return;
  }

  return cep.slice(0, 5) + "-" + cep.slice(5);
}

export const FormatDataClient = (clientData) => {
  clientData.cpf = formatCPF(clientData.cpf);
  clientData.cep = formatCEP(clientData.cep);
  clientData.phone = formatPhone(clientData.phone);

  return clientData;
};

export const formatChargeID = (charge) => {
  const formattedChargeId = charge.toString().padStart(9, "0");

  return formattedChargeId;
};

export function formatData(array) {
  return array.map((item) => ({
    ...item,
    cpf: formatCPF(item.cpf),
    phone: formatPhone(item.phone),
  }));
}
