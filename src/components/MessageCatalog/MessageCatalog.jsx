import s from "./MessageCatalog.module.css";

const MessageCatalog = () => {
  return (
    <div className={s.messageWrapper}>
      <p className={s.messageText}>
        Sorry, there are no available cars that match your selected filters.
        Please try adjusting your search criteria or check back later for more
        options.
      </p>
    </div>
  );
};

export default MessageCatalog;
