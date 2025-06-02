import { getLocalStorageItem } from "../helpers/localStorage";
import { api } from "../lib/axios";

export const UpdateOneClientStatus = async (id) => {
  const token = getLocalStorageItem("token");
  try {
    const response = await api.get(`/clients/update/status/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data.error;
  }
};
