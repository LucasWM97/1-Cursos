import { api } from "../lib/axios";

export const UpdateAllClientsStatus = async (token) => {
  try {
    const response = await api.get(`/clients/update/status/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data.error;
  }
};
