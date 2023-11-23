import { useState } from "react";
import Button from "../../components/shared/Button";
import FormInput from "../../components/shared/FormInput";
import "./form.css";
import { logIn } from "./service";
import CustomLink from "../../components/shared/CustomLink";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await logIn(email, password);
      toast.success("User logged in!");
      navigate("/");
    } catch (error) {
      toast.error("There was an issue while loggin in. PLease try again");
      console.log(error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Log In here</h1>
        <FormInput
          label="email"
          value={email}
          type="text"
          onChange={(event) => setEmail(event.target.value)}
        />
        <FormInput
          label="password"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Log me in</Button>
        <CustomLink to="/signup">Not a member yet? Sign Up here!</CustomLink>
      </form>
    </div>
  );
};

export default LogIn;