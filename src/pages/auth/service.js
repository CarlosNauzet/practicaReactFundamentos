import { toast } from "react-toastify";
import { client } from "../../api/client";
export const signUp = async (name, username, email, password) => {
  try {
    await client.post("/api/auth/signup", { email, password, username, name });
    toast.success("User created with success");
  } catch (error) {
    console.log(error);
    toast.error("There was an error, please try again later");
  }
};

export const logIn = async (email, password) => {
  try {
    await client.post("/api/auth/login", { email, password });
    toast.success("You have successfully logged in");
  } catch (error) {
    console.log(error);
    toast.error("There was an error at the log in process. Please try again");
  }
};
