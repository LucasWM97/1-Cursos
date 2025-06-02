import { api } from "../lib/axios";

export const UpdateAllCharges = async (token) => {
  try {
    const response = await api.get(`/charges/update/status`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data.error;
  }
};
