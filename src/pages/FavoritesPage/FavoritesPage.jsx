import { useSelector } from "react-redux";
import CarModal from "../../components/CarModal/CarModal";
import CarsList from "../../components/CarsList/CarsList";
import { selectFavorites } from "../../redux/favorite/selectors";
import MessageFavorite from "../../components/MessageFavorite/MessageFavorite";
import { useState } from "react";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

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
