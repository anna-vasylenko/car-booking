import { useEffect } from "react";
import CarsList from "../../components/CarsList/CarsList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import {
  selectIsLastPage,
  selectIsLoading,
  selectPage,
} from "../../redux/cars/selectors";
import { setPage } from "../../redux/cars/slice";
import CarModal from "../../components/CarModal/CarModal";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectFilteredCars } from "../../redux/filters/selectors";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(setPage());
  };

  return (
    <div>
      <SearchBox />
      <CarsList cars={cars} />
      {!isLastPage && <LoadMoreBtn handleClick={handleClick} />}
      {isLoading && <Loader />}
      <CarModal />
    </div>
  );
};

export default CatalogPage;
