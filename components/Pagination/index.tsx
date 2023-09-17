import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import pagination from "./pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onPageChange: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5;
    const ellipsis = "...";

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            disabled={currentPage === i}
          >
            {i}
          </button>
        );
      }
    } else {
      let startPage = currentPage - Math.floor(visiblePages / 2);
      let endPage = currentPage + Math.floor(visiblePages / 2);

      if (startPage < 1) {
        startPage = 1;
        endPage = visiblePages;
      }

      if (endPage > totalPages) {
        startPage = totalPages - visiblePages + 1;
        endPage = totalPages;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            disabled={currentPage === i}
          >
            {i}
          </button>
        );
      }

      if (startPage > 1) {
        pageNumbers.unshift(
          <span key="ellipsis1" className="pagination-ellipsis">
            {ellipsis}
          </span>
        );
      }

      if (endPage < totalPages) {
        pageNumbers.push(
          <span key="ellipsis2" className="pagination-ellipsis">
            {ellipsis}
          </span>
        );
      }
    }

    return pageNumbers;
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className={pagination.pagination_container}>
      <button onClick={onPreviousPage} disabled={currentPage === 1}>
        <BsChevronLeft />
      </button>
      {renderPageNumbers()}
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
