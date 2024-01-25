import { useSelector } from "react-redux";
import { getAuth } from "../../../store/selectors";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector(getAuth);
  return auth ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;
