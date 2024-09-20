import { Link } from "react-router-dom";

import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className={s.textWrapper}>
        <h2 className={s.title}>Welcome to AutoRent!</h2>
        <p>
          We offer a wide range of vehicles to suit your travel needs, whether
          you are looking for a compact car for city driving or a spacious SUV
          for a family adventure. Our flexible rental terms, affordable prices,
          and convenient locations make it easy for you to explore with
          confidence.
        </p>
        <p>
          Book now and hit the road with a vehicle that matches your style and
          budget!
        </p>
        <Link to="/catalog" className={s.link}>
          Find Your Car
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
