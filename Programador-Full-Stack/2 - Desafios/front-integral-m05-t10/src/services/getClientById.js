import { api } from "../lib/axios";

export const getClientById = async (token, id) => {
  try {
    const response = await api.get(`/clients/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.client;
  } catch (error) {
    if (error.response.data == "jwt expired") {
      return { redirectToLogin: true };
    }
  }
};
