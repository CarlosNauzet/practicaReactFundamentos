import { useState } from "react";
import Button from "../../components/shared/Button";
import FormInput from "../../components/shared/FormInput";
import "./styles/form.css";
import CustomLink from "../../components/shared/CustomLink";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/actions";
import { getIsLoading } from "../../store/selectors";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsLoading);
  console.log({ isFetching });

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authLogin({ email, password }, rememberMe));
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
          isSubmitting={isFetching}
        />
        <FormInput
          label="password"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          isSubmitting={isFetching}
        />

        <div className="check-form-row">
          <input
            type="checkbox"
            name="remember-me"
            onChange={(e) => {
              setRememberMe(e.target.value);
            }}
          />
          Remember me
        </div>

        <Button type="submit">{isFetching ? "Loggin in..." : "Log In"}</Button>
        <CustomLink to="/signup">Not a member yet? Sign Up here!</CustomLink>
      </form>
    </div>
  );
};

export default LogIn;
