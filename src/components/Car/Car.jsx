import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modal/slice";
import { setCurrentCar } from "../../redux/cars/slice";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { addToFavorite, removeFromFavorite } from "../../redux/favorite/slice";
import { selectFavorites } from "../../redux/favorite/selectors";

const Car = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);

  const isExist = favoriteCars.some((item) => item?.id === car?.id);

  const handleClick = () => {
    dispatch(openModal());
    dispatch(setCurrentCar(car));
  };

  const { img, model, id } = car;

  return (
    <div>
      {isExist ? (
        <FaHeart
          color="#3470ff"
          onClick={() => dispatch(removeFromFavorite(id))}
        />
      ) : (
        <FaRegHeart onClick={() => dispatch(addToFavorite(car))} />
      )}
      <div>
        <img src={img} alt={model} width={"274"} height={"268"} />
        <button onClick={handleClick}>Learn more</button>
      </div>
    </div>
  );
};

export default Car;
