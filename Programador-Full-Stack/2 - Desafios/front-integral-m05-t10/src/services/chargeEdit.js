import { toastError } from "../helpers/ToastError";
import { toastSucess } from "../helpers/ToastSuccess";
import { api } from "../lib/axios";

export const chargeEdit = async (formData, token, onClose, id, getCharges) => {
  try {
    if (formData.status === "expected" && formData.due_date < new Date()) {
      toastError("Data de vencimento expirada");
      return;
    }

    const response = await api.put(`/charges/edit/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toastSucess("Cadastrado com sucesso");
    await getCharges();
    onClose();
    return response.data;
  } catch (error) {
    toastError("Data de vencimento expirada");
  }
};
