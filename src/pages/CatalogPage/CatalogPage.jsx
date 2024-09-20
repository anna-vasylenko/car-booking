import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBox from "../../components/SearchBox/SearchBox";
import CarsList from "../../components/CarsList/CarsList";
import CarModal from "../../components/CarModal/CarModal";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import MessageCatalog from "../../components/MessageCatalog/MessageCatalog";
import Loader from "../../components/Loader/Loader";

import { fetchAll, fetchCars } from "../../redux/cars/operations";
import { setPage } from "../../redux/cars/slice";
import {
  selectCars,
  selectIsLastPage,
  selectIsLoading,
  selectPage,
} from "../../redux/cars/selectors";
import { clearSearchFilter } from "../../redux/filters/slice";
import {
  selectFilterApplied,
  selectFilteredCars,
} from "../../redux/filters/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);
  const page = useSelector(selectPage);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const filterApplied = useSelector(selectFilterApplied);

  const visibleCars = filterApplied ? filteredCars : cars;

  useEffect(() => {
    dispatch(clearSearchFilter());
    dispatch(fetchAll());
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleClick = () => {
    dispatch(setPage());
    dispatch(fetchCars(page));
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
