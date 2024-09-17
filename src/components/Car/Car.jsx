import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice";
import { setCurrentCar } from "../../redux/cars/slice";

const Car = ({ car }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openModal());
    dispatch(setCurrentCar(car));
  };

  const { img, model } = car;

  return (
    <div>
      <div>
        <img src={img} alt={model} width={"274"} height={"268"} />
        <button onClick={handleClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Car;
