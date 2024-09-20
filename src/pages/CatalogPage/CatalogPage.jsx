import { useEffect, useState } from "react";
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
import MessageCatalog from "../../components/MessageCatalog/MessageCatalog";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectFilteredCars);

  const [visibleCarsCount, setVisibleCarsCount] = useState(12);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(setPage());
    setVisibleCarsCount(visibleCarsCount + 12);
  };

  const handleClickFilteredCar = () => {
    setVisibleCarsCount(visibleCarsCount + 12);
  };

  const handleSearch = () => {
    setVisibleCarsCount(12);
  };

  return (
    <div className="mainSection">
      <SearchBox onSearch={handleSearch} />
      <CarsList cars={cars.slice(0, visibleCarsCount)} />
      {!cars.length > 0 && <MessageCatalog />}
      {!isLastPage && <LoadMoreBtn handleClick={handleClick} />}
      {cars.length > visibleCarsCount && (
        <LoadMoreBtn handleClick={handleClickFilteredCar} />
      )}
      {isLoading && <Loader />}
      <CarModal />
    </div>
  );
};

export default CatalogPage;
