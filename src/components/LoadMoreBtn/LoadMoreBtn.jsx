import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={s.loadMoreBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
