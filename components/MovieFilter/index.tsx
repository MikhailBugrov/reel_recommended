import { useState } from "react";
import ReleaseYearFilter from "./Filters/ReleaseYearFilter";
import VoteAverageFilter from "./Filters/VoteAverageFilter";
import GenreFilter from "./Filters/GenreFilter";
import { FaFilter } from "react-icons/fa";
import stylesFilter from "./MovieFilter.module.scss";

interface FiltersProps {
  minVoteAverage: string;
  setMinVoteAverage: React.Dispatch<React.SetStateAction<string>>;
  releaseYear: number | null;
  setReleaseYear: React.Dispatch<React.SetStateAction<number | null>>;
  withGenres: string;
  setWithGenres: React.Dispatch<React.SetStateAction<string>>;
}

const MovieFilter: React.FC<FiltersProps> = ({
  minVoteAverage,
  setMinVoteAverage,
  releaseYear,
  setReleaseYear,
  withGenres,
  setWithGenres,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleResetFilters = () => {
    setMinVoteAverage("");
    setReleaseYear(null);
    setWithGenres("");
  };

  return (
    <>
      <div className={stylesFilter.toggleButton} onClick={toggleFilters}>
        <FaFilter className={stylesFilter.icon} />
        Filters
      </div>
      <div
        className={`${stylesFilter.showFilters} ${
          showFilters ? stylesFilter.show : ""
        }`}
      >
        <div className={stylesFilter.filtersContainer}>
          <div className={stylesFilter.filterSection}>
            <ReleaseYearFilter
              releaseYear={releaseYear}
              setReleaseYear={setReleaseYear}
            />
          </div>
          <div className={stylesFilter.filterSection}>
            <VoteAverageFilter
              minVoteAverage={minVoteAverage}
              setMinVoteAverage={setMinVoteAverage}
            />
          </div>
          <div className={stylesFilter.filterSection}>
            <GenreFilter
              withGenres={withGenres}
              setWithGenres={setWithGenres}
            />
          </div>

          <div className={stylesFilter.buttonGroup}>
            <button
              className={stylesFilter.resetButton}
              onClick={handleResetFilters}
            >
              Reset filters
            </button>
            <button
              className={stylesFilter.resetButton}
              onClick={toggleFilters}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieFilter;
