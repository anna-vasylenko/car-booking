import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import { openModal } from "../../redux/modal/slice";
import { setCurrentCar } from "../../redux/cars/slice";
import { addToFavorite, removeFromFavorite } from "../../redux/favorite/slice";
import { selectFavorites } from "../../redux/favorite/selectors";
import { getCarDescription } from "../../helpers/getCarData";

import s from "./CarItem.module.css";

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);

  const isExist = favoriteCars.some((item) => item?.id === car?.id);
  const description = getCarDescription(car);

  const handleClick = () => {
    dispatch(openModal());
    dispatch(setCurrentCar(car));
  };

  return (
    <div className={s.wrapper}>
      {isExist ? (
        <button
          className={s.favoriteBtn}
          onClick={() => dispatch(removeFromFavorite(car.id))}
          type="button"
          aria-label="Remove from favorites"
        >
          <FaHeart className={s.icon} color="#3470ff" />
        </button>
      ) : (
        <button
          className={s.favoriteBtn}
          onClick={() => dispatch(addToFavorite(car))}
          type="button"
          aria-label="Add to favorites"
        >
          <FaRegHeart color="#fff" className={s.icon} />
        </button>
      )}
      <div className={s.imgWrapper}>
        <img src={car.img} alt={car.model} width={"274"} height={"268"} />
      </div>
      <div className={s.titleWrapper}>
        <h3 className={clsx(s.title, s.carTitle)}>
          {car.make} <span>{car.model},</span> {car.year}
        </h3>
        <p className={s.title}>{car.rentalPrice}</p>
      </div>
      <p className={s.description}>
        {description.map((item, index) => (
          <span key={index} className={s.descriptionItem}>
            {item}
          </span>
        ))}
      </p>

      <button onClick={handleClick} className={s.button}>
        Learn more
      </button>
    </div>
  );
};

export default CarItem;
