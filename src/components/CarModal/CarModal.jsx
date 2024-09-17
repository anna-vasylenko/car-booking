import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/slice";
import s from "./CarModal.module.css";
import { selectIsModalOpen } from "../../redux/modal/selectors";
import { selectCurrentCar } from "../../redux/cars/selectors";

const CarModal = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector(selectIsModalOpen);
  const car = useSelector(selectCurrentCar);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={() => dispatch(closeModal())}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalWrapper}>
        {" "}
        <img src={car.img} alt={car.model} width={"274"} height={"268"} />
      </div>
    </Modal>
  );
};

export default CarModal;
