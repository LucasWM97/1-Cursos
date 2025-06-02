export function formatCharge(charge) {
  const formattedChargeId = charge.charge_id.toString().padStart(9, "0");

  const statusMap = {
    paid: "Pago",
    overdue: "Em atraso",
    expected: "Prevista",
  };
  const status = statusMap[charge.status] || charge.status;

  const valueFormated = formatCurrency(charge.value);

  const [year, month, day] = charge.due_date.split("-");
  const [newDay] = day.split("T");

  const formattedDueDate = `${newDay}/${month}/${year}`;
  return {
    ...charge,
    charge_id: formattedChargeId,
    status: status,
    value: valueFormated,
    due_date: formattedDueDate,
  };
}

export function formatCurrency(valueInCents) {
  const valueInReais = (valueInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valueInReais;
}

export function formatCurrencyInput(inputValue) {
  const cleanValue = inputValue.toString().replace(/[^\d]/g, "");

  if (cleanValue === "") return "";

  const valueInCents = parseInt(cleanValue);
  if (isNaN(valueInCents)) return "";

  const formattedValue = (valueInCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedValue;
}

export const formatDateCharge = (charge) => {
  const [year, month, day] = charge.due_date.split("-");
  const [newDay] = day.split("T");

  const formattedDueDate = `${newDay}/${month}/${year}`;
  return formattedDueDate;
};
