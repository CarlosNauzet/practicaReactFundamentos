import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./styles/layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
