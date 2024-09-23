import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

import { selectIsModalOpen } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/slice";
import { selectCurrentCar } from "../../redux/cars/selectors";
import { getRentalConditions } from "../../helpers/numbersFormat";
import { getCarDescriptionForModal } from "../../helpers/getCarData";

import s from "./CarModal.module.css";

Modal.setAppElement("#root");

const CarModal = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsModalOpen);
  const car = useSelector(selectCurrentCar);

  if (!car) return;

  const description = getCarDescriptionForModal(car);
  const rentalConditions = getRentalConditions(car);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => dispatch(closeModal())}
      className={s.modal}
      overlayClassName={s.overlay}
      bodyOpenClassName={s.noScroll}
    >
      <div className={s.modalWrapper}>
        <button
          className={s.closeBtn}
          onClick={() => dispatch(closeModal())}
          type="button"
          aria-label="Close modal window"
        >
          <IoCloseOutline className={s.icon} />
        </button>
        <div className={s.imgWrapper}>
          <img src={car.img} alt={car.model} width={"274"} height={"268"} />
        </div>
        <h3 className={s.title}>
          {car.make} <span>{car.model},</span> {car.year}
        </h3>
        <p className={s.description}>
          {description.map((item, index) => (
            <span key={index} className={s.descriptionItem}>
              {item}
            </span>
          ))}
        </p>
        <p className={s.text}> {car.description}</p>
        <h4 className={s.itemTitle}>Accessories and functionalities:</h4>
        <p className={s.description}>
          {car.accessories.map((item, index) => (
            <span key={index} className={s.descriptionItem}>
              {item}
            </span>
          ))}
          {car.functionalities.map((item, index) => (
            <span key={index} className={s.descriptionItem}>
              {item}
            </span>
          ))}
        </p>
        <h4 className={s.itemTitle}>Rental Conditions:</h4>
        <ul className={s.conditionsList}>
          {rentalConditions.map((item, index) => (
            <li key={index} className={s.conditionItem}>
              <p>
                {item.label} <span className={s.number}>{item.value}</span>
              </p>
            </li>
          ))}
        </ul>
        <a href="tel:+380730000000" className={s.rentalCarButton}>
          Rental car
        </a>
      </div>
    </Modal>
  );
};

export default CarModal;
