import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import Car from "../Car/Car";

const CarsList = () => {
  const cars = useSelector(selectCars);
  return (
    <div>
      <ul>
        {cars.map((item) => (
          <li key={item.id}>
            <Car car={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
