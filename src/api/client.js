import axios from "axios";
export const client = axios.create({ baseURL: "http://localhost:3001" });
client.interceptors.response.use((res) => res.data);

export const setAutorizationHeader = (token) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${token}`);
