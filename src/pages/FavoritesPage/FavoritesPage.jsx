import { useSelector } from "react-redux";
import CarModal from "../../components/CarModal/CarModal";
import CarsList from "../../components/CarsList/CarsList";
import { selectFavorites } from "../../redux/favorite/selectors";
import MessageFavorite from "../../components/MessageFavorite/MessageFavorite";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavorites);

  return (
    <div className="mainSection">
      <CarsList cars={favoriteCars} />
      {!favoriteCars.length > 0 && <MessageFavorite />}
      <CarModal />
    </div>
  );
};

export default FavoritesPage;
