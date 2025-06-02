import axios from "axios";

export const api = axios.create({
  baseURL: "https://back-integral-m05-equipe-4.onrender.com",
  //baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
