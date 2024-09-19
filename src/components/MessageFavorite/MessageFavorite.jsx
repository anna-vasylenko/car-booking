import { Link } from "react-router-dom";
import s from "./MessageFavorite.module.css";

const MessageFavorite = () => {
  return (
    <div className={s.messageWrapper}>
      <p className={s.messageText}>
        It looks like you have not added any cars to your favorites yet. Start
        browsing our collection and add your top picks to see them here!
      </p>
      <p className={s.messageText}>
        Need help finding the perfect car? Check out our
        <Link to="/catalog" className={s.link}>
          {" "}
          latest listings{" "}
        </Link>
        or
        <a href="tel:+380730000000" className={s.link}>
          {" "}
          contact us{" "}
        </a>
        for assistance. We are here to help!
      </p>
    </div>
  );
};

export default MessageFavorite;
