import { useState } from "react";
import Button from "../../components/shared/Button";
import FormInput from "../../components/shared/FormInput";
import "./form.css";
import { signUp } from "./service";
const SignUp = () => {
  // 1 . Crear el estado para guardar los valores de los inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // 3. Crear el console log
    // console.log(username);
    // console.log(email);
    // console.log(password);
    // console.log(name);
    await signUp(name, username, email, password);
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
      </form>
    </div>
  );
};

export default SignUp;
