import axios from "axios";
export const client = axios.create({ baseURL: "http://localhost:3001" });
client.interceptors.response.use((res) => res.data);
