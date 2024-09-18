import { FaCar } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <FaCar className={s.logoIcon} />
        <p>AutoRent</p>
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
