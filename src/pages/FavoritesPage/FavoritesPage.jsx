import { useState } from "react";
import { useSelector } from "react-redux";

import CarsList from "../../components/CarsList/CarsList";
import CarModal from "../../components/CarModal/CarModal";
import MessageFavorite from "../../components/MessageFavorite/MessageFavorite";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

import { selectFavorites } from "../../redux/favorite/selectors";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavorites);

  const [visibleCarsCount, setVisibleCarsCount] = useState(12);

  const handleClick = () => {
    setVisibleCarsCount(visibleCarsCount + 12);
  };

  return (
    <div className="mainSection">
      <CarsList cars={favoriteCars.slice(0, visibleCarsCount)} />
      {!favoriteCars.length > 0 && <MessageFavorite />}
      {favoriteCars.length > visibleCarsCount && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      <CarModal />
    </div>
  );
};

export default FavoritesPage;
