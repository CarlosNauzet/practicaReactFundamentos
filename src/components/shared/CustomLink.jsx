import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default CustomLink;
