import { toastError } from "../helpers/ToastError";
import { toastSucess } from "../helpers/ToastSuccess";
import { api } from "../lib/axios";

export const chargeRegister = async (formData, token, onClose, id) => {
  try {
    if (formData.status === "expected" && formData.due_date < new Date() + 1) {
      toastError("Data de vencimento expirada");
      return;
    }

    const response = await api.post(`/charges/register/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toastSucess("Cadastrado com sucesso");
    onClose();
    return response.data;
  } catch (error) {
    toastError("Data de vencimento expirada");
  }
};
