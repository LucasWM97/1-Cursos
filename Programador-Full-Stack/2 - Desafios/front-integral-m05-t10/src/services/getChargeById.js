import { api } from "../lib/axios";

export const getChargeById = async (token, id) => {
  try {
    const response = await api.get(`/charges/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.charge;
  } catch (error) {
    if (error.response.data == "jwt expired") {
      return { redirectToLogin: true };
    }
  }
};
