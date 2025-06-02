import { setLocalStorageItem } from "../helpers/localStorage";
import { api } from "../lib/axios";

export const getUserLogged = async (token) => {
  try {
    const response = await api.get("/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLocalStorageItem("name", response.data.name);

    return response.data;
  } catch (error) {
    if (error.response.data == "jwt expired") {
      return { redirectToLogin: true };
    }
  }
};
