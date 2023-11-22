import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./styles/layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
