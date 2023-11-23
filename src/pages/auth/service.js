import { toast } from "react-toastify";
import { client, setAutorizationHeader } from "../../api/client";
export const signUp = async (name, username, email, password) => {
  await client.post("/api/auth/signup", { email, password, username, name });
};

export const logIn = async (email, password) => {
  const token = await client.post("/api/auth/login", { email, password });
  setAutorizationHeader(token);
};
