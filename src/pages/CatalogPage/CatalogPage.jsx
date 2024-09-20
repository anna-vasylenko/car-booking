import { useEffect } from "react";
import CarsList from "../../components/CarsList/CarsList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll, fetchCars } from "../../redux/cars/operations";
import {
  selectCars,
  selectIsLastPage,
  selectIsLoading,
  selectPage,
} from "../../redux/cars/selectors";
import { setPage } from "../../redux/cars/slice";
import CarModal from "../../components/CarModal/CarModal";
import SearchBox from "../../components/SearchBox/SearchBox";
import {
  selectFilterApplied,
  selectFilteredCars,
} from "../../redux/filters/selectors";
import Loader from "../../components/Loader/Loader";
import MessageCatalog from "../../components/MessageCatalog/MessageCatalog";
import { clearSearchFilter } from "../../redux/filters/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  const filterApplied = useSelector(selectFilterApplied);

  const visibleCars = filterApplied ? filteredCars : cars;

  useEffect(() => {
    dispatch(clearSearchFilter());
    dispatch(fetchAll());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(setPage());
  };

  return (
    <div className="mainSection">
      <SearchBox />
      <CarsList cars={visibleCars} />
      {visibleCars.length === 0 && <MessageCatalog />}
      {!isLastPage && !filterApplied && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      {isLoading && <Loader />}
      <CarModal />
    </div>
  );
};

export default CatalogPage;
