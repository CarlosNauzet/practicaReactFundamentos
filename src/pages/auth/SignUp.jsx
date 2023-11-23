import { useState } from "react";
import Button from "../../components/shared/Button";
import FormInput from "../../components/shared/FormInput";
import "./styles/form.css";
import { signUp } from "./service";
import CustomLink from "../../components/shared/CustomLink";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(name, username, email, password);
      toast.success("User created!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("There was an error, please try again later");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Sign Up Here</h1>
        <FormInput
          label="username"
          // 1.2 meter el valor para que le pase su variable
          value={username}
          type="text"
          // 2. crear evento Onchange
          onChange={(event) => setUsername(event.target.value)}
        />
        <FormInput
          label="email"
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <FormInput
          label="password"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <FormInput
          label="name"
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit">Submit</Button>
        <CustomLink to="/login">Already a member? Log in here</CustomLink>
      </form>
    </div>
  );
};

export default SignUp;
