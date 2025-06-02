import { toastError } from "../helpers/ToastError";
import { toastSucess } from "../helpers/ToastSuccess";
import { api } from "../lib/axios";

export async function DeleteCharges(
  idCharge,
  token,
  setModeOfModal,
  getCharges
) {
  try {
    await api.delete(`/charges/${idCharge}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toastSucess("Cobrança excluida com sucesso");

    return setTimeout(() => {
      setModeOfModal("");
      getCharges();
    }, 700);
  } catch (error) {
    if (error.response.data.error === "Charge not found") {
      return toastError("Cobrança não encontrada");
    }
  }
}
