import { FaCar } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.logo}>
        <FaCar className={s.logoIcon} />
        <p>AutoRent</p>
      </Link>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
