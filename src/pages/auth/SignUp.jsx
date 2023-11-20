import FormInput from "../../components/shared/FormInput";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="container">
      <form className="form">
        <h1>Sign Up Here</h1>
        <FormInput label="username" type="text" />
        <FormInput label="email" type="email" />
        <FormInput label="password" type="password" />
        <FormInput label="name" type="text" />
      </form>
    </div>
  );
};

export default SignUp;
