import { useEffect } from "react";
import CarsList from "../../components/CarsList/CarsList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectIsLastPage, selectPage } from "../../redux/cars/selectors";
import { setPage } from "../../redux/cars/slice";
import CarModal from "../../components/CarModal/CarModal";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLastPage = useSelector(selectIsLastPage);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(setPage());
  };

  return (
    <div>
      <CarsList />
      {!isLastPage && <LoadMoreBtn handleClick={handleClick} />}
      <CarModal />
    </div>
  );
};

export default CatalogPage;
