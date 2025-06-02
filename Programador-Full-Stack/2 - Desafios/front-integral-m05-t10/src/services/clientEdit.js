import { toastSucess } from "../helpers/ToastSuccess";
import { api } from "../lib/axios";

export const clientEdit = async (clientData, id, token, onClose) => {
  try {
    const response = await api.put(`/clients/edit/profile/${id}`, clientData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toastSucess("Dados do cliente atualizados com sucesso");

    onClose();
    return response.data;
  } catch (error) {
    return error.response.data.error;
  }
};
