import logo from "../images/dan-logo.jpg";
import NavLinks from "./NavLinks";
import "./logo.css";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Danaendraraj R' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
