import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import stylesBookmark from "./BookmarkIcon.module.scss";

type BookmarkIconProps = {
  isFavorite: boolean;
  onClick: () => void;
};

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isFavorite, onClick }) => {
  return (
    <div className={stylesBookmark.faBookmark} onClick={onClick}>
      {isFavorite ? (
        <BsFillBookmarkFill color="#ffd700" />
      ) : (
        <BsBookmark color="#e0e0e0" />
      )}
    </div>
  );
};

export default BookmarkIcon;
