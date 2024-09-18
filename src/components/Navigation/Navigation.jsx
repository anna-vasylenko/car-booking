import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
