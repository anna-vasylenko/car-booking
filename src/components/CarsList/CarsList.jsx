import CarItem from "../CarItem/CarItem";

import s from "./CarsList.module.css";

const CarsList = ({ cars }) => {
  return (
    <div>
      <ul className={s.carList}>
        {cars.map((item) => (
          <li key={item.id} className={s.carItem}>
            <CarItem car={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
