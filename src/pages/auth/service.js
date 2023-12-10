import { toast } from "react-toastify";
import { client, setAutorizationHeader } from "../../api/client";
export const signUp = async (name, username, email, password) => {
  await client.post("/api/auth/signup", { email, password, username, name });
};

export const logIn = async (email, password, rememberMe) => {
  const { accessToken } = await client.post("/api/auth/login", {
    email,
    password,
  });
  if (rememberMe === "on") {
    localStorage.setItem("accessToken", accessToken);
  } else {
    localStorage.removeItem("accessToken");
  }
  setAutorizationHeader(accessToken);
};

export const getUser = async () => {
  await client.get("/api/auth/me");
};
