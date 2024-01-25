import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/react.svg";
import Button from "../shared/Button";
import "./styles/header.css";
import { removeAuthorizationHeader } from "../../api/client";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { authLogout } from "../../store/actions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authLogout());
    removeAuthorizationHeader();
    navigate("/login");
    toast.success("You have logged out!");
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="react-logo" />
      </Link>
      <div className="header-items">
        <NavLink to="/adverts" className="header-item" end>
          All Adverts
        </NavLink>
        <NavLink to="/adverts/new" className="header-item">
          Create new add
        </NavLink>
        <Button type="button" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </header>
  );
};

export default Header;
