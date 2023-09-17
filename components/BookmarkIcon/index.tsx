import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import faBookmark from "./faBookmark.module.scss";

type BookmarkIconProps = {
  isFavorite: boolean;
  onClick: () => void;
};

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isFavorite, onClick }) => {
  return (
    <div className={faBookmark.faBookmark} onClick={onClick}>
      {isFavorite ? (
        <FaBookmark color="Gold" />
      ) : (
        <FaRegBookmark color="white" />
      )}
    </div>
  );
};

export default BookmarkIcon;
