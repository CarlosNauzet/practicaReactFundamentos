import { useState } from "react";
import Button from "../../components/shared/Button";
import FormInput from "../../components/shared/FormInput";
import "./styles/form.css";
import { logIn } from "./service";
import CustomLink from "../../components/shared/CustomLink";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authLoginSuccess } from "../../store/actions";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authLoginSuccess());
    try {
      setIsSubmitting(true);
      await logIn(email, password, rememberMe);
      toast.success("User logged in!");
      navigate("/");
    } catch (error) {
      toast.error("There was an issue while loggin in. Please try again");
      console.log(error);
    } finally {
      setIsSubmitting(false);
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
          isSubmitting={isSubmitting}
        />
        <FormInput
          label="password"
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          isSubmitting={isSubmitting}
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

        <Button type="submit">
          {isSubmitting ? "Loggin in..." : "Log In"}
        </Button>
        <CustomLink to="/signup">Not a member yet? Sign Up here!</CustomLink>
      </form>
    </div>
  );
};

export default LogIn;
