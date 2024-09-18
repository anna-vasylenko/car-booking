import { useSelector } from "react-redux";
import CarModal from "../../components/CarModal/CarModal";
import CarsList from "../../components/CarsList/CarsList";
import { selectFavorites } from "../../redux/favorite/selectors";
import Message from "../../components/Message/Message";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavorites);

  return (
    <div>
      <CarsList cars={favoriteCars} />
      {!favoriteCars.length > 0 && <Message />}
      <CarModal />
    </div>
  );
};

export default FavoritesPage;
