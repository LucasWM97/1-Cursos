import { api } from "../lib/axios";

export const fetchCharges = async (token, status) => {
  try {
    const response = await api.get(`/charges/${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.charges;
  } catch (error) {
    console.error("Erro ao buscar clientes em dia:", error);
    return [];
  }
};

export const fetchClients = async (token, status) => {
  try {
    const response = await api.get(`/clients/${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clientes em dia:", error);
    return [];
  }
};

export const fetchValue = async (token, status) => {
  try {
    const response = await api.get(`/clients/${status}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clientes em dia:", error);
    return [];
  }
};
